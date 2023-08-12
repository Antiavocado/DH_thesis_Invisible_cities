anychart.onDocumentReady(function () {

    // add data
    const data = [

        {from: "Recommend", to: null, value: 773, color: '#999EA2'},
        {from: "Structure Related", to: null, value: 851, color: '#999EA2'},
        {from: "Personal Refections", to: null, value: 701, color: '#999EA2'},
        {from: "Quotes", to: null, value: 740, color: '#999EA2'},
        {from: "Others", to: null, value: 231, color: '#999EA2'},


        {from: "Genre Related", to: "Poetic Compelling", value: 360, color: '#999EA2'},
        {from: "Genre Related", to: "Imagination & Metaphor", value: 123, color: '#0e0e10'},
        {from: "Genre Related", to: "Borges Style", value: 36, color: '#0e0e10'},
        {from: "Genre Related", to: "1001 Arabian Nights", value: 18, color: '#999EA2'},
        {from: "Genre Related", to: "Magical Realism", value: 19, color: '#999EA2'},
        {from: "Genre Related", to: "Einstein Dreams", value: 13, color: '#999EA2'},
        {from: "Genre Related", to: "Post-modernism", value: 13, color: '#999EA2'},
        {from: "Genre Related", to: "Other", value: 242, color: '#999EA2'},

        {from: "Recommend", to: "Imagination & Metaphor", value: 166, color: '#0e0e10'},
        {from: "Recommend", to: "Poetic Compelling", value: 135, color: '#0e0e10'},

        {from: "Personal Refections", to: "Imagination & Metaphor", value: 9, color: '#999EA2'},
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
        "#b6bbbe",
        "#b6bbbe",
        "#75809c",
        "#75809c",
        "#75809c",
        "#75809c",
        "#75809c",
        "#b6bbbe",
        "#75809c",
        "#75809c",
        "#75809c",
        "#75809c",
        "#75809c",
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
                    (this.from === "Genre Related" && this.to === "Borges Style") ||
                    (this.from === "Genre Related" && this.to === "1001 Arabian Nights") ||
                    (this.from === "Genre Related" && this.to === "Magical Realism") ||
                    (this.from === "Genre Related" && this.to === "Post-modernism") ||
                    (this.from === "Genre Related" && this.to === "Einstein Dreams")
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
                    (this.from === "Genre Related" && this.to === "Borges Style") ||
                    (this.from === "Genre Related" && this.to === "1001 Arabian Nights") ||
                    (this.from === "Genre Related" && this.to === "Magical Realism") ||
                    (this.from === "Genre Related" && this.to === "Post-modernism") ||
                    (this.from === "Genre Related" && this.to === "Einstein Dreams")
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
            '<span style = "color: #0e0e10; font-Family: PTMono_bold; font-size:20px;">Genre Related Analysis</span>' +
            '<br/><span style="color:#0e0e10; font-Family: PTMono_regular; font-size: 16px;">(based on language and Topic Modeling)</span>'
        );

    // set the chart container id
    chart.container("sankey_genre_container");

    // draw the chart
    chart.draw();

    chart.background().fill('transparent');


});



