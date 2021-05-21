//making dynamic svg bar graph
const canvas = d3.select(".canva");

/* 
JSON - JavaScript Object Notation
*/
var dataArray = [
    {width: 25, height: 4, fill: "pink"},
    {width: 25, height: 14, fill: "purple"},
    {width: 25, height: 44, fill: "orange"},
    {width: 25, height: 124, fill: "green"},
    {width: 25, height: 12, fill: "red"},
    {width: 25, height: 4, fill: "pink"},
    {width: 25, height: 14, fill: "purple"},
    {width: 25, height: 42, fill: "orange"},
    {width: 25, height: 114, fill: "green"},
    {width: 25, height: 34, fill: "red"},
    {width: 25, height: 10, fill: "pink"},
    {width: 25, height: 64, fill: "purple"},
    {width: 25, height: 25, fill: "orange"},
    {width: 25, height: 10, fill: "green"},
    {width: 25, height: 120, fill: "red"},
]

//add an svg element
  const svg = canvas.select("svg")
  

const rect = svg.selectAll("rect")

rect.data(dataArray)  
    .enter().append("rect") //to add the rect
    .attr("width",24) 
    .attr("fill", (d,i) => d.fill) // function or arrow to color change
    .attr("height",function (d){
      var a = 12;
        return d.height*2;
    })
   
    .attr("x",function (d, i) {   
        return i*25;
    })
    .attr("y",function (d, i) {   
      return  100 - (d.height*2);
    })
    svg.append("text")
    .text("Mutation of genes")
    .attr("x",100)
    .attr("y",140)
    .attr("text-anchor","right")
    .attr("fill", "red")
    .attr("stroke", "black")
    .attr("font-size", 14)


/*svg.append("circle").attr("cx",60)
            .attr("cy",60)
            .attr("r", 50)
            .attr("fill", "blue")
            .attr("stroke", "black");

svg.append("rect")
.attr("width", 80)
.attr("height",80)
.attr("rx",15)
.attr("ry",15)
.attr("x",50)
.attr("y",50)
.attr("fill", "beige")
.attr("stroke", "red");

svg.append("line")
.attr("x1",120)
.attr("x2",45)
.attr("y1",100)
.attr("y2",46)
.attr("stroke", "gray");

svg.append("text")
.text("Shapes of sample genes")
.attr("x",50)
.attr("y",50)
.attr("text-anchor","right")
.attr("fill", "red")
.attr("stroke", "black")
.attr("font-size", 14)

svg.append("text")
.text("One")
.attr("x",50)
.attr("y",80)
.attr("fill", "red")
.attr("font-size", 14)
*/

