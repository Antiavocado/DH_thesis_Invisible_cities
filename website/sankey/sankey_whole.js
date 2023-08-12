anychart.onDocumentReady(function () {

    // add data
    const data = [
        {from: "Goodreads", to: "English Reviews", value: 4120, color: '#0e0e10' },
        {from: "Goodreads", to: "Italian Reviews", value: 407, color: '#999EA2'} ,
        {from: "Goodreads", to: "Spanish Reviews", value: 287, color: '#999EA2'},
        {from: "Goodreads", to: "Portuguese Reviews", value: 210, color: '#999EA2'},
        {from: "Goodreads", to: "Turkish Reviews", value: 108, color: '#999EA2'},
        {from: "Goodreads", to: "Arabic Reviews", value: 100, color: '#999EA2'},
        {from: "Goodreads", to: "Other Language Reviews", value: 600, color: '#999EA2'},

        {from: "Turkish Reviews", to: null, weight: 108, color: '#999EA2'},
        {from: "Italian Reviews", to: null, value: 407, color: '#999EA2'},
        {from: "Spanish Reviews", to: null, value: 287, color: '#999EA2'},
        {from: "Portuguese Reviews", to: null, value: 210, color: '#999EA2'},
        {from: "Turkish Reviews", to: null, value: 108, color: '#999EA2'},
        {from: "Arabic Reviews", to: null, value: 100, color: '#999EA2'},
        {from: "Other Language Reviews", to: null, value: 600, color: '#999EA2'},

        {from: "English Reviews", to: "Genre Related", value: 824, color: '#0e0e10'},
        {from: "English Reviews", to: "Structure Related", value: 851, color: '#999EA2'},
        {from: "English Reviews", to: "Personal Refections", value: 701, color: '#999EA2'},
        {from: "English Reviews", to: "Recommend", value: 773, color: '#999EA2'},
        {from: "English Reviews", to: "Quotes", value: 740, color: '#999EA2'},
        {from: "English Reviews", to: "Others", value: 231, color: '#999EA2'},

        {from: "Genre Related", to: null, value: 824, color: '#999EA2'},
        {from: "Structure Related", to: null, value: 851, color: '#999EA2'},
        {from: "Recommend", to: null, value: 73, color: '#999EA2'},
        {from: "Quotes", to: null, value: 360, color: '#999EA2'},
        {from: "Others", to: null, value: 231, color: '#999EA2'},

        {from: "Personal Refections", to: "Complexicily", value: 230, color: '#999EA2'},
        {from: "Personal Refections", to: "Urban Life", value: 136, color: '#0e0e10'},
        {from: "Personal Refections", to: "Slice of Life", value: 123, color: '#0e0e10'},
        {from: "Personal Refections", to: "Reading Experience", value: 89, color: '#999EA2'},
        {from: "Personal Refections", to: "null", value: 34, color: '#999EA2'},
        {from: "Personal Refections", to: "Architecture", value: 39, color: '#999EA2'},
        {from: "Personal Refections", to: "Emperor", value: 25, color: '#999EA2'},
        {from: "Personal Refections", to: "Imagination", value: 13, color: '#999EA2'},
        {from: "Personal Refections", to: "Language and Sign", value: 12, color: '#999EA2'},
        {from: "Personal Refections", to: "Existentialism", value: 9, color: '#999EA2'},
        {from: "Personal Refections", to: "Other Topics", value: 10, color: '#999EA2'},
    ];

    // create a sankey diagram instance
    let chart = anychart.sankey();

    // load the data to the sankey diagram instance
    chart.data(data);

    // set the chart's padding
    chart.padding(20, 40);

    // configure a custom color palette
    chart.palette([
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
                    (this.from === "Goodreads" && this.to === "English Reviews") ||
                    (this.from === "English Reviews" && this.to === "Personal Refections") ||
                    (this.from === "Personal Refections" && this.to === "Urban Life") ||
                    (this.from === "Personal Refections" && this.to === "Slice of Life")
                ) {
                    return '#75809c';
                } else {
                    return anychart.color.lighten(this.sourceColor, 0.5) + " " + 0.3;
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
            '<span style = "color: #0e0e10; font-Family: PTMono_regular; font-size:20px;">Reviews Analysis</span>' +
            '<br/><span style="color:#0e0e10; font-Family: PTMono_regular; font-size: 16px;">(based on language and Topic Modeling)</span>'
        );

    // set the chart container id
    chart.container("sankey_whole_container");

    // draw the chart
    chart.draw();

    chart.background().fill('transparent');


});



