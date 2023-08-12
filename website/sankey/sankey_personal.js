anychart.onDocumentReady(function () {

    // add data
    const data = [
        {from: "Genre Related", to: null, value: 824, color: '#999EA2'},
        {from: "Structure Related", to: null, value: 851, color: '#999EA2'},
        {from: "Recommend Related", to: null, value: 773, color: '#999EA2'},
        {from: "Quotes", to: null, value: 740, color: '#999EA2'},
        {from: "Other", to: null, value: 231, color: '#999EA2'},



        {from: "Personal Refections", to: "Urban Society", value: 253, color: '#999EA2'},
        {from: "Personal Refections", to: "Slice of Life", value: 85, color: '#0e0e10'},
        {from: "Personal Refections", to: "Reading Experience", value: 62, color: '#999EA2'},
        {from: "Personal Refections", to: "Architecture", value: 19, color: '#999EA2'},
        {from: "Personal Refections", to: "Emperor", value: 17, color: '#999EA2'},
        {from: "Personal Refections", to: "Imagination & Metaphor", value: 9, color: '#999EA2'},
        {from: "Personal Refections", to: "Language and Sign", value: 8, color: '#999EA2'},
        {from: "Personal Refections", to: "Existentialism", value: 6, color: '#999EA2'},
        {from: "Personal Refections", to: "Other Topics", value: 31, color: '#999EA2'},
    ];

    // create a sankey diagram instance
    let chart = anychart.sankey();

    // load the data to the sankey diagram instance
    chart.data(data);

    // set the chart's padding
    chart.padding(20, 40);

    // configure a custom color palette
    chart.palette([
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#75809c",
        "#75809c",
        "#75809c",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#75809c",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#75809c",
        "#75809c",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",



        "#8e9aa8",
        "#ddcfc2",
        "#8d8fa4",
        "#97a5c0",
        "#d6c3b4",
        "#9297ab",
        "#b6bbbe",
        "#d3bbb7"
    ]);

    // customize the nodes:
    // set the width
    chart.nodeWidth("50%");
    // set the padding
    chart.nodePadding(45);

    chart.dropoff().normal().fill('rgba(221, 44, 1, 0)');

    // customize the labels
    chart.node().normal().labels().fontSize(14).fontFamily('PTMono_regular');
    chart.node().labels().useHtml(true);
    chart
        .node()
        .labels()
        .format("<span style='font-weight:bold'>{%name}</span><br>{%value}");

    chart.flow({
        normal: {
            fill: function () {
                if (
                    (this.from === "Personal Refections" && this.to === "Urban Society") ||
                    (this.from === "Personal Refections" && this.to === "Slice of Life")
                ) {
                    return '#75809c';
                } else {
                    return '#b6bbbe' + " " + 0.8;
                }
            }
        },
        hovered: {
            fill: function () {
                if (
                    (this.from === "Goodreads" && this.to === "English Reviews") ||
                    (this.from === "English Reviews" && this.to === "Personal Refections") ||
                    (this.from === "Personal Refections" && this.to === "Urban Life") ||
                    (this.from === "Personal Refections" && this.to === "Slice of life")
                ) {
                    return '#75809c';
                } else {
                    return '#b6bbbe' + " " + 0.8;
                }
            }
        },
    });





    // add a title and customize it
    chart
        .title()
        .enabled(true)
        .useHtml(true)
        .text(
            '<span style = "color: #0e0e10; font-Family: PTMono_bold; font-size:20px;">Personal Reflections Analysis</span>' +
            '<br/><span style="color:#0e0e10; font-Family: PTMono_regular; font-size: 16px;">(based on language and Topic Modeling)</span>'
        );

    // set the chart container id
    chart.container("sankey_personal_container");

    // draw the chart
    chart.draw();

    chart.background().fill('transparent');


});



