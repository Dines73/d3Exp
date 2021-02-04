// d3.select('body')
//     .append('p')
//     .text('First Paragraph')
//     .style('color', 'red')

var dataset = [40, 50, 20, 44, 80, 55, 70, 80, 110];
//var dataset = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);


var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return svgHeight - d
        //return svgHeight - yScale(d)
    })
    .attr("height", function (d) {
        return d
        //return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
    .attr("fill", "red")
    

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d
    })
    .attr("y", function(d, i) {
        return svgHeight - d - 2;
    })
    .attr("x", function(d, i){
        return barWidth*i
    })
    .attr("fill", "A64C38")

