// credit goes to https://codepen.io/zhulinpinyu/pen/EaZrmM for js file of the tree

var json_data = {
    "name": "Hi",
    "children": [
        {
            "name": "Data",
            "free": true,
            "value": 20,
            "description": "Interactive authoring tools",
            "children": [
                {
                    "name": "Reporting",
                    "value": 15,
                    "description": "Web-based 'cloud' applications for authoring data visualizations",
                    "free": true,
                    "children":[
                        {
                            "name": "WebFocus",
                            "value": 5,
                            "description": "Web-based 'cloud' applications for authoring data visualizations",
                            "free": true
                        },
                        {
                            "name": "Power BI",
                            "value": 13,
                            "free": true
                        },
                        {
                            "name": "Tableau",
                            "value": 9,
                            "free": true
                        },
                        {
                            "name": "SSRS",
                            "value": 13,
                            "description": "SQL Server Reporting Services",
                            "free": true
                        },
                    ]
                },
                {
                    "name": "Management",
                    "value": 20,
                    "children":[
                    {
                        "name": "SSMS",
                        "value": 15,
                        "description": "SQL Server Management Studio",
                        "free": true
                    }]
                },
                {
                    "name": "Integration",
                    "value": 15,
                    "description": "Practicing ETL (Extract, Transform, Load) methods into a unified source.",
                    "free": true,
                    "children": [
                        {
                            "name": "SSIS",
                            "value": 20,
                            "description": "SQL Server Integration Services",
                            "free": true
                        }
                    ]
                }
            ]
        }, {
            "name": "Web Development",
            "description": "DOM",
            "value": 6,
            "free": true,
            "children": [
                {
                    "name": "Front-end",
                    "value": 10,
                    "children":
                    [
                        {
                            "name": "HTML5",
                            "value": 10,
                            "description": "Markup Language",
                            "free": true
                        },
                        {
                            "name": "CSS",
                            "description": "Style Language",
                            "free": true,
                            "value": 10,
                            "children": [{
                                "name": "Bootstrap",
                                "description": "CSS Framework",
                                "value": 9,
                                "free": true
                            }]
                        },
                        {
                            "name": "JavaScript",
                            "description": "The language behind most browser-based DOM manipulations",
                            "free": true,
                            "value": 7,
                            "children": [{
                                    "name": "JQuery",
                                    "value": 5,
                                    "description": "",
                                    "free": true
                                },
                                {
                                    "name": "Frameworks",
                                    "value": 6,
                                    "free": true,
                                    "children":
                                    [
                                        {
                                            "name": "Angular",
                                            "value": 2,
                                            "description": "One of the frameworks for Web Apps",
                                            "free": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Back-end",
                    "value": 20,
                    "children":
                    [
                        {
                            "name": "Entity Framework",
                            "value": 15
                        },
                        {
                            
                            "name": "ASP.NET MVC",
                            "description": "One of the frameworks for Web Apps",
                            "value": 12
                        },
                        {
                            
                            "name": "Node JS",
                            "description": "One of the frameworks for Web Apps",
                            "value": 9
                        }
                    ]
                }
                
            ]
        },
        {
            "name": "Programming Languages",
            "description": "Coding Languages",
            "free": true,
            "value": 6,
            "children": [

                {
                    "name": "C#",
                    "description": "Language for applications like Unity, Web Apps",
                    "value": 10,
                    "free": true,
                    "children": [
                        {
                            "name": "WPF",
                            "value": 4,
                            "description": "Windows Presentation Foundation",

                        },
                        {
                            "name": "Unity",
                            "value": 4,
                            "description": "Used in multiple projects of mine.",
                            "free": true
                        }
                    ]
                },
                {
                    "name": "Python",
                    "description": "Python's a very popular language in data science and is a pleasant language to learn and use",
                    "free": true,
                    "value": 8,
                    "children": [{
                        "name": "Jupyter Anaconda",
                        "description": "Language for querying data in databases",

                    }]
                },
                {
                    "name": "T-SQL",
                    "value": 15,
                    "description": "Language for querying data in databases"
                }
            ]
        }
    ]
}

var m = [20, 120, 20, 20],
    w = 1280 - m[1] - m[3],
    h = 800 - m[0] - m[2],
    i = 0,
    root;

var tree = d3.layout.tree()
    .size([h, w]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) {
        return [d.y, d.x];
    });

var vis = d3.select("#treeskills").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
    .call(responsivefy)
    .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

root = json_data;
root.x0 = h / 2;
root.y0 = 0;

function toggleAll(d) {
    if (d.children) {
        d.children.forEach(toggleAll);
        toggle(d);
    }
}

// Initialize the display to show a few nodes.
root.children.forEach(toggleAll);
// toggle(root.children[1]);
// toggle(root.children[1].children[2]);
// toggle(root.children[9]);
// toggle(root.children[9].children[0]);

update(root);
//credit to https://brendansudol.com/writing/responsive-d3 for this function
function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("perserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type, 
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}

function update(source) {
    var duration = d3.event && d3.event.altKey ? 5000 : 500;

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse();

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });

    // Update the nodes…
    var node = vis.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("svg:g")
        .attr("class", "node")
        .attr("transform", function (d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on("click", function (d) {
            toggle(d);
            update(d);
        });

    nodeEnter.append("svg:circle")
        .attr("r", 1e-6)
        .style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    nodeEnter.append('a')
        .attr('xlink:href', function (d) {
            return d.url;
        })
        .append("svg:text")
        .attr("x", function (d) {
            return d.children || d._children ?
                (d.value + 4) * -1 : d.value + 4
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function (d) {
            return d.name;
        })
        .style('fill', function (d) {
            return d.free ? 'black' : '#999';
        })

        .style("fill-opacity", 1e-6);

    nodeEnter.append("svg:title")
        .text(function (d) {
            return d.description;
        });

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeUpdate.select("circle")
        .attr("r", function (d) {
            return d.value;
        })
        .style('fill', function (d) {
            return d.free ? '#fff' : 'lightgray';
        })
        .style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select("circle")
        .attr("r", 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = vis.selectAll("path.link")
        .data(tree.links(nodes), function (d) {
            return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("svg:path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return diagonal({
                source: o,
                target: o
            });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children.
function toggle(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
}
window.addEventListener('resize', drawChart);

function updateHeight(winWidth) {
    height = .7 * width;
}