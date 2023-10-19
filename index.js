const concaveman = require('concaveman');
const points = JSON.parse('[[10,20],[30,12.5]]');
const polygon = concaveman(points);
console.log(polygon);
