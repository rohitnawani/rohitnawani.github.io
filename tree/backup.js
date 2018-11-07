<!--     <script>

    var graph = {
                  "nodes": [

                    {"x": 900, "y": 350, "name": "Jagdish"},  //0
                    {"x": 850, "y": 350, "name": "Vinita"},   //1 
                    {"x": 900, "y": 450, "name": "Bhavesh"},  //2
                    {"x": 850, "y": 450, "name": "Ashish"},   //3

                    {"x": 800, "y": 350, "name": "Santosh"},  //4
                    {"x": 750, "y": 350, "name": "Eva"},      //5
                    {"x": 800, "y": 450, "name": "Rohit"},    //6

                    {"x": 700, "y": 350, "name": "Suresh"},   //7
                    {"x": 650, "y": 350, "name": "Lavina"},   //8
                    {"x": 700, "y": 450, "name": "Neha"},     //9
                    {"x": 650, "y": 450, "name": "Nikhil"},   //10

                    {"x": 600, "y": 350, "name": "Manoj"},    //11
                    {"x": 550, "y": 350, "name": "Reena"},    //12
                    {"x": 600, "y": 450, "name": "Aditya"},   //13
                    {"x": 550, "y": 450, "name": "Jiaan"},    //14

                    {"x": 800, "y": 250, "name": "Atmaram"},  //15
                    {"x": 600, "y": 250, "name": "Kamla"},    //16

                    // **********

                    {"x": 469, "y": 450, "name": "Hirdesh"},  //17
                    {"x": 493, "y": 450, "name": "Chitra"},   //18
                    {"x": 469, "y": 350, "name": "Dhruv"},    //19
                    {"x": 493, "y": 350, "name": "Ojas"},     //20

                    {"x": 469, "y": 410, "name": "Mikki"},    //21
                    {"x": 493, "y": 364, "name": "Raju"},     //22
                    {"x": 469, "y": 410, "name": "Carishma"}, //23
                    {"x": 493, "y": 364, "name": "Pooja"},    //24

                    {"x": 469, "y": 410, "name": "Meenu"},    //25
                    {"x": 493, "y": 364, "name": "Raja"},     //26

                    {"x": 469, "y": 250, "name": "Kanayalal"},//27
                    {"x": 493, "y": 250, "name": "Pushpa"},   //28

                    // **********

                    {"x": 469, "y": 410, "name": "Kavita"},   //29
                    {"x": 493, "y": 364, "name": "Raj"},      //30
                    {"x": 469, "y": 410, "name": "Hriday"},   //31

                    {"x": 493, "y": 364, "name": "Rashimi"},  //32

                    {"x": 469, "y": 410, "name": "Kunal"},    //33

                    {"x": 469, "y": 250, "name": "Pooran"},   //34
                    {"x": 493, "y": 250, "name": "Sheela"},   //35


                  ],

                  "links": [
                    {"source":  0, "target":  2},
                    {"source":  0, "target":  3},
                    {"source":  1, "target":  2},
                    {"source":  1, "target":  3},

                    {"source":  4, "target":  6},
                    {"source":  5, "target":  6},

                    {"source":  7, "target":  9},
                    {"source":  7, "target":  10},
                    {"source":  8, "target":  9},
                    {"source":  8, "target":  10},

                    {"source":  11, "target":  13},
                    {"source":  11, "target":  14},
                    {"source":  12, "target":  13},
                    {"source":  12, "target":  14},

                    {"source":  15, "target":  0},
                    {"source":  15, "target":  4},
                    {"source":  15, "target":  7},
                    {"source":  15, "target":  11},
                    {"source":  16, "target":  0},
                    {"source":  16, "target":  4},
                    {"source":  16, "target":  7},
                    {"source":  16, "target":  11},

                    // **********

                    {"source":  17, "target":  19},
                    {"source":  17, "target":  20},
                    {"source":  18, "target":  19},
                    {"source":  18, "target":  20},

                    {"source":  21, "target":  23},
                    {"source":  21, "target":  24},
                    {"source":  22, "target":  23},
                    {"source":  22, "target":  24},

                    {"source":  27, "target":  17},
                    {"source":  27, "target":  21},
                    {"source":  27, "target":  25},
                    {"source":  28, "target":  17},
                    {"source":  28, "target":  21},
                    {"source":  28, "target":  25},

                    // **********

                    {"source":  29, "target":  31},
                    {"source":  30, "target":  31},

                    {"source":  34, "target":  29},
                    {"source":  34, "target":  32},
                    {"source":  34, "target":  33},
                    {"source":  35, "target":  29},
                    {"source":  35, "target":  32},
                    {"source":  35, "target":  33},

                  ]
                }

    var width = 960,
        height = 700;

    var force = d3.layout.force()
        .size([width, height])
        //.on("tick", tick)
        //.charge(-400)
        //.linkDistance(40)
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    //var drag = force.drag()
        //.on("dragstart", dragstart);

    var svg = d3.select("#tree").append("svg")
        .attr("width", width)
        .attr("height", height);

    var link = svg.selectAll(".link")
                  .data(graph.links)
                  .enter().append("line")
                  .attr("class", "link")
                  .attr("x1", function(d) { return d.source.x; })
                  .attr("y1", function(d) { return d.source.y; })
                  .attr("x2", function(d) { return d.target.x; })
                  .attr("y2", function(d) { return d.target.y; });

    var node_g = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("class", "node_g");

    var node = node_g.append("circle")
        .attr("class", "node")
        .attr("r", 8)
        .attr("cx", function(d) { return d.x })
        .attr("cy", function(d) { return d.y });
        // .on("dblclick", dblclick)
        // .call(drag);

    var text = node_g.append("text")
        .text(function(d) { return d.name })
        .attr("font-size", "90%")
        .attr("dx", function(d) { return d.x - 4; })
        .attr("dy", function(d) { return d.y - 15; });


    //force.on("end", tick);
    // function tick() {
    //   link.attr("x1", function(d) { return d.source.x; })
    //       .attr("y1", function(d) { return d.source.y; })
    //       .attr("x2", function(d) { return d.target.x; })
    //       .attr("y2", function(d) { return d.target.y; });

    //   node.attr("cx", function(d) { return d.x; })
    //       .attr("cy", function(d) { return d.y; });

    //   text.attr("dx", function(d) { return d.x - 4; })
    //       .attr("dy", function(d) { return d.y - 15; });
    // }

    function dblclick(d) {
      d3.select(this).classed("fixed", d.fixed = false);
    }

    function dragstart(d) {
      d3.select(this).classed("fixed", d.fixed = true);
      tick() ;
    }

    </script> -->