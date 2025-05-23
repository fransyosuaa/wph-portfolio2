// generate-clamp.js

function generateClamp(minPx, maxPx, containerWidthPx, minViewportPx = 320) {
  const slope = ((maxPx - minPx) / (containerWidthPx - minViewportPx)) * 100;
  const intercept = slope * (minViewportPx / 100) + minPx;

  const slopeRounded = +slope.toFixed(2);
  const interceptRounded = +intercept.toFixed(1);
  const maxRounded = +maxPx.toFixed(0);

  return `clamp(${minPx}px, max(${minPx}px, -${interceptRounded}px + ${slopeRounded}vw), ${maxRounded}px)`;
}

// Accept arguments from command line
const [, , min, max, container, minVw = 320] = process.argv;

if (!min || !max || !container) {
  console.error(
    '❌ Usage: node generate-clamp.js <minPx> <maxPx> <containerWidth>'
  );
  process.exit(1);
}

const result = generateClamp(
  Number(min),
  Number(max),
  Number(container),
  Number(minVw)
);
console.log(`✅ Generated CSS clamp:\n\n${result}`);
