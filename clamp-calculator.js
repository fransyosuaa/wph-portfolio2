// clamp-calculator.js

const [, , containerPx, minPx, maxPx] = process.argv;

function calculateClamp(minSizePx, maxSizePx, containerSizePx) {
  const minRem = +(minSizePx / 16).toFixed(2);
  const preferredVw = +((maxSizePx / containerSizePx) * 100).toFixed(2);
  const maxRem = +(maxSizePx / 16).toFixed(2);

  return `clamp(${minRem}rem, ${preferredVw}vw, ${maxRem}rem)`;
}

if (!minPx || !maxPx || !containerPx) {
  console.error(
    'Usage: node clamp-calculator.js <minPx> <maxPx> <containerPx>'
  );
  process.exit(1);
}

console.log(calculateClamp(Number(minPx), Number(maxPx), Number(containerPx)));
