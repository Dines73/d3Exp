var data = [
    {"month": "Januar", "percentage": 13.11},
    {"month": "Februar", "percentage": 20.51},
    {"month": "Mart", "percentage": 28.41},
    {"month": "April", "percentage": 33.41},
];

var svgWidth = 400, svgHeight = 400, 
    radius = Math.min(svgWidth, svgHeight) / 2;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie-chart
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d){
    return d.percentage
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g")

arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) {return color(d.data.percentage);});

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

arc.append("text")
    .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {return d.data.month+":"+d.data.percentage+"%";})