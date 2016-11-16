var myWeights = [
  {age: 1, weight: 10},
  {age: 4, weight: 30},
  {age: 6, weight: 50},
  {age: 8, weight: 60},
  {age: 10, weight: 70},
  {age: 13, weight: 80},
  {age: 16, weight: 120},
  {age: 18, weight: 120},
  {age: 20, weight: 125},
  {age: 25, weight: 125},
  {age: 29, weight: 130},
  {age: 30, weight: 150},
  {age: 35, weight: 160},
  {age: 38, weight: 170},
  {age: 40, weight: 140},
  {age: 42, weight: 150},
  {age: 43, weight: 160},
  {age: 45, weight: 150}
];

var height = 500;
var width = 500;

var weightScale     = d3.scale.linear().domain([0,200]).range([height -10, 10]);
var ageScale        = d3.scale.linear().domain([0,60]).range([10, width -10]);
var ageToSatScale   = d3.scale.linear().domain([0,myWeights.length]).range([70, 0]);

function weightToY (data) {
 return weightScale(data.weight);
};

function ageToX (data) {
  return ageScale(data.age);
};

function ageToColor (data, counter) {
  var sat = ageToSatScale(counter);
  return "hsl(0,"+ sat +"%,70%)";
};

var svg = d3.select('svg');
svg.selectAll('circle')
  .data(myWeights)
  .enter()
  .append("circle")
  .attr('class', 'weight')
  .style("cx", ageToX)
  .style("cy", weightToY)
  .style("fill", ageToColor)


