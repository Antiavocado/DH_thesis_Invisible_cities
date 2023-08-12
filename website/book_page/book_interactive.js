var diameter = 770,
    radius = diameter / 2,
    innerRadius = radius - 120;

var cluster = d3.cluster()
    .size([360, innerRadius]);

var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.85))
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");

var color = d3.scaleOrdinal(d3.schemeCategory10);  // Define color scale



d3.json("book_topic_data.json", function(error, classes) {
    if (error) throw error;

    var root = packageHierarchy(classes)
        .sum(function(d) { return d.size; });

    cluster(root);

    link = link
        .data(packageImports(root.leaves()))
        .enter().append("path")
        .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
        .attr("class", "link")
        .attr("d", line)
        .style("stroke-opacity", 0.2)
        .style("stroke", "#999EA2");


    node = node
        .data(root.leaves())
        .enter().append("text")
        .attr("class", "node")
        .attr("dy", "0.31em")
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
        .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
        .style("font-size", "8") // Add this line
        .text(function(d) { return d.data.key; });


});

function packageHierarchy(classes) {
    var map = {};

    function find(name, data) {
        var node = map[name], i;
        if (!node) {
            node = map[name] = data || {name: name, children: []};
            if (name.length) {
                node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                node.parent.children.push(node);
                node.key = name.substring(i + 1);
            }
        }
        return node;
    }

    classes.forEach(function(d) {
        find(d.name, d);
    });

    return d3.hierarchy(map[""]);
}

function packageImports(nodes) {
    var map = {},
        imports = [];

    nodes.forEach(function(d) {
        map[d.data.name] = d;
    });

    nodes.forEach(function(d) {
        if (d.data.imports) d.data.imports.forEach(function(i) {
            var link = map[d.data.name].path(map[i.target]);
            link.topic = i.topic;  // Add topic to the link
            imports.push(link);
        });
    });

    return imports;
}


// Update the updateTopic() function

function updateTopic() {

    var topicNum = document.getElementById('topicSelect').value;

    // Get related nodes for selected topic
    var relatedNodes = [];
    svg.selectAll(".link").each(function(d) {
        if (d.topic == topicNum) {
            relatedNodes.push(d.source.data.name);
            relatedNodes.push(d.target.data.name);
        }
    });

    svg.selectAll(".link")
        .style("stroke", function(d) {
            return d.topic == topicNum ? "#0E0E10" : "#999EA2";
        })
        .style("stroke-opacity", function(d) {
            return d.topic == topicNum ? 0.5 : 0.1;
        });

    svg.selectAll(".node")  // select all nodes
        .style("opacity", function(d) {
            return relatedNodes.includes(d.data.name) ? 0.8 : 0.1;
        });

    svg.selectAll(".node text")  // select all node labels
        .style("opacity", function(d) {
            return relatedNodes.includes(d.data.name) ? 0.8 : 0.1;
        });
}

document.getElementById('topicSelect').addEventListener('change', function() {
    var selectedTopic = this.value; // get selected topic

    // hide all topics
    var topics = document.getElementsByClassName('topic container');
    for (var i = 0; i < topics.length; i++) {
        topics[i].style.display = 'none';
    }

    // hide default state
    var defaultState = document.getElementById('default_info');
    defaultState.style.display = 'none';

    // show selected topic or default state
    if (selectedTopic === 'return') {
        // show default state
        var defaultState = document.getElementById('defaultState');
        defaultState.style.display = 'block';
        topicSelect.style.display = 'none';
    }

    if (selectedTopic ==='0') {
        topicSelect.style.marginLeft = '60%';
    }

    if (selectedTopic !== '0') {
        document.getElementById('topic' + selectedTopic).style.display = 'block';
        topicSelect.style.marginLeft = '10%';
    } else {
        defaultState.style.display = 'block'; // show default state

    }


});





document.getElementById('startSelectionBtn').addEventListener('click', function() {
    document.getElementById('defaultState').style.display = 'none';
    document.getElementById('selection').style.display = 'block'; // show selection div

    // show the search box
    var topicSelect = document.getElementById('topicSelect');
    topicSelect.style.display = 'block';
    topicSelect.style.marginLeft = '60%';

    document.getElementById('default_info').style.display = 'block';
});



function startSelection() {
    // Hide default state div and show selection div
    document.getElementById('defaultState').style.display = 'none';
    document.getElementById('selection').style.display = 'block';
}




