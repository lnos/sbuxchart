/**
 * TODO:
 * - Axis - > name on x-axis, caffeine content on y-axis
 * - Incorporate Starbucks Data
 * - Allow user to search for drinks and add data
 **/

// //Initializing / Loading Data
// var featured = [];

// d3.csv("./drinks.csv", function(data) {
//   data.forEach(function(d){
//     if(d.featured == "TRUE"){
//       featured.push(d); 
//     }
//   }
// )});

var margin = {top: 5, right: 5, bottom: 20, left: 20};
var fullWidth = 400;
var fullHeight = 200;

var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;
var svg = d3.select('#holder').append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  .attr("class", "chart")
  // this g is where the bar chart will be drawn
  .append('g')
    // translate it to leave room for the left and top margins
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var xScale = d3.scaleBand()
  .range([0, width])
  .padding(0.1);

var x_axis = d3.axisBottom()
              .scale(xScale);

var yScale = d3.scaleLinear()
              .range([height, 0]);

var y_axis = d3.axisLeft()
              .scale(yScale);

var clicked = ""; 

function update(){

  //Remove old chart
  svg.selectAll('.bar-holder').remove();
  svg.selectAll('.tick').remove();

  var barHolder = svg.append('g')
  .classed('bar-holder', true);

  // get the data
  d3.csv("drinks.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
      d.caffeine = +d.caffeine;
    });

    //filter the data
    var featured = [];
    data.forEach(function(d){
      if(d.featured == "TRUE" || d.name == clicked){
        featured.push(d); 
      }
    });

    // Scale the range of the data in the domains
    xScale.domain(featured.map(function(d) { return d.name; }));
    yScale.domain([0, d3.max(featured, function(d) { return d.caffeine; })]);

    //Adding bars
    barHolder.selectAll('.bar')
      .data(featured)
      .enter().append('rect')
      .attr("class", "bar")
      .attr("x", function(d){return xScale(d.name);})
      .attr("y", function(d){return yScale(d.caffeine);})
      .attr("height", function(d) { return height - yScale(d.caffeine); })
      .attr("transform", "translate(32.5, 0)")
      .style("fill", "#00723f")
      .style("margin-top", function(d){ 
        return fullHeight - d; 
      });
   
    svg.append("g")
        .attr("transform", "translate(10," + height +")")
        .call(x_axis);

    svg.append("g")
        .attr("transform", "translate(10, 0)")
        .call(y_axis);
  });
}

// Add a new datum to the set
d3.select("#add-btn").on("click", function(e){
  clicked = "Americano";
	update();
});

var domReady = function(callback) {
  (document.readyState === "interactive" || document.readyState === "complete") && featured.length != 0 ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(function() {
  update();
});

d3.csv("./drinks.csv", function(data) {
  var table = document.getElementById("searchTable");
  var rowNum = 1;
  data.forEach(function(d){
    if(d.featured != "TRUE"){
      var row = table.insertRow(1);
        var cell1= row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = d.name;
        cell2.innerHTML = d.caffeine;
        rowNum++;
    }
  }
)});


