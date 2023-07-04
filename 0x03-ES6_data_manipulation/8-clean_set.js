export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((k) => {
    if (k && k.startsWith(startString)) result += `${k.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}
