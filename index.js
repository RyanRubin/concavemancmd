const process = require('process');
const concaveman = require('concaveman');

try {
  const points = JSON.parse(process.argv[process.argv.length - 1]);
  const polygon = concaveman(points);
  console.log(polygon);
} catch (ex) {
  console.log('[]');
}
