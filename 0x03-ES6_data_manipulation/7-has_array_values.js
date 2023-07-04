export default function hasValuesFromArray(set, array) {
  return array.every((k) => set.has(k));
}
