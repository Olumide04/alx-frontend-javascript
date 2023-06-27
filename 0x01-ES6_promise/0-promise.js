export default function getResponseFromAPI() {
  const k = true;
  return new Promise((resolve, reject) => {
    if (k) {
      resolve();
    } else {
      reject();
    }
  });
}
