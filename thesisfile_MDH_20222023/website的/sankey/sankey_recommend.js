anychart.onDocumentReady(function () {

    // add data
    const data = [



        {from: "Genre Related", to: null, value: 341, color: '#999EA2'},
        {from: "Structure Related", to: null, value: 851, color: '#999EA2'},
        {from: "Personal Refections", to: null, value: 701, color: '#999EA2'},
        {from: "Quotes", to: null, value: 740, color: '#999EA2'},
        {from: "Others", to: null, value: 231, color: '#999EA2'},


        {from: "Recommend", to: "Re-read", value: 196, color: '#999EA2'},
        {from: "Recommend", to: "Poetic Compelling", value: 135, color: '#0e0e10'},
        {from: "Recommend", to: "Imagination & Metaphor", value: 166, color: '#0e0e10'},
        {from: "Recommend", to: "Translation", value: 51, color: '#999EA2'},
        {from: "Recommend", to: "Difficult to Comment", value: 71, color: '#999EA2'},
        {from: "Recommend", to: "Favorite", value: 65, color: '#999EA2'},
        {from: "Recommend", to: "Unusual", value: 50, color: '#999EA2'},

        {from: "Genre Related", to: "Imagination & Metaphor", value: 123, color: '#0e0e10'},
        {from: "Genre Related", to: "Poetic Compelling", value: 360, color: '#999EA2'},
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
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#75809c",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",
        "#b6bbbe",


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
                    (this.from === "Goodreads" && this.to === "English Reviews") ||
                    (this.from === "English Reviews" && this.to === "Recommend") ||
                    (this.from === "Recommend" && this.to === "Re-read") ||
                    (this.from === "Recommend" && this.to === "Difficult to Comment")
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
                    (this.from === "English Reviews" && this.to === "Recommend") ||
                    (this.from === "Recommend" && this.to === "Re-read") ||
                    (this.from === "Recommend" && this.to === "Difficult to Comment")
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
            '<span style = "color: #0e0e10; font-Family: PTMono_bold; font-size:20px;">Recommend Related Analysis</span>' +
            '<br/><span style="color:#0e0e10; font-Family: PTMono_regular; font-size: 16px;">(based on language and Topic Modeling)</span>'
        );

    // set the chart container id
    chart.container("sankey_recommend_container");

    // draw the chart
    chart.draw();

    chart.background().fill('transparent');


});