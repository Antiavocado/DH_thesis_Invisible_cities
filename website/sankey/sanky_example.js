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
        {from: "English Reviews", to: "Recommend Related", value: 773, color: '#999EA2'},
        {from: "English Reviews", to: "Personal Reflections", value: 701, color: '#999EA2'},
        {from: "English Reviews", to: "Structure Related", value: 851, color: '#999EA2'},
        {from: "English Reviews", to: "Quotes", value: 740, color: '#999EA2'},
        {from: "English Reviews", to: "Other", value: 231, color: '#999EA2'},

        {from: "Genre Related", to: null, value: 341, color: '#999EA2'},
        {from: "Structure Related", to: null, value: 851, color: '#999EA2'},
        {from: "Recommend Related", to: null, value: 472, color: '#999EA2'},
        {from: "Quotes", to: null, value: 740, color: '#999EA2'},
        {from: "Other", to: null, value: 231, color: '#999EA2'},
        {from: "Personal Reflections", to: null, value: 692, color: '#999EA2'},



        {from: "Recommend Related", to: "Imagination & Metaphor", value: 166, color: '#0e0e10'},
        {from: "Recommend Related", to: "Poetic Compelling", value: 135, color: '#0e0e10'},
        {from: "Genre Related", to: "Imagination & Metaphor", value: 123, color: '#0e0e10'},
        {from: "Genre Related", to: "Poetic Compelling", value: 360, color: '#999EA2'},
        {from: "Personal Reflections", to: "Imagination & Metaphor", value: 9, color: '#999EA2'},
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
        "#75809c",
        "#75809c",
        "#75809c",
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
                    (this.from === "English Reviews" && this.to === "Personal Reflections") ||
                    (this.from === "English Reviews" && this.to === "Recommend Related") ||
                    (this.from === "English Reviews" && this.to === "Genre Related") ||

                    (this.from === "Genre Related" && this.to === "Poetic Compelling") ||
                    (this.from === "Genre Related" && this.to === "Imagination & Metaphor") ||
                    (this.from === "Personal Reflections" && this.to === "Poetic Compelling") ||
                    (this.from === "Personal Reflections" && this.to === "Imagination & Metaphor") ||
                    (this.from === "Recommend Related" && this.to === "Poetic Compelling") ||
                    (this.from === "Recommend Related" && this.to === "Imagination & Metaphor") ||

                    (this.from === "English Reviews" && this.to === "Poetic Compelling") ||
                    (this.from === "English Reviews" && this.to === "Imagination & Metaphor")
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
                    (this.from === "English Reviews" && this.to === "Personal Reflections") ||
                    (this.from === "English Reviews" && this.to === "Recommend Related") ||
                    (this.from === "English Reviews" && this.to === "Genre Related") ||

                    (this.from === "Genre Related" && this.to === "Poetic Compelling") ||
                    (this.from === "Genre Related" && this.to === "Imagination & Metaphor") ||
                    (this.from === "Personal Reflections" && this.to === "Poetic Compelling") ||
                    (this.from === "Personal Reflections" && this.to === "Imagination & Metaphor") ||
                    (this.from === "Recommend Related" && this.to === "Poetic Compelling") ||
                    (this.from === "Recommend Related" && this.to === "Imagination & Metaphor") ||

                    (this.from === "English Reviews" && this.to === "Poetic Compelling") ||
                    (this.from === "English Reviews" && this.to === "Imagination & Metaphor") ||

                    (this.from === "Personal Reflections" && this.to === "Imagination & Metaphor")
                ) {
                    return '#75809c';
                } else {
                    return '#b6bbbe' + " " + 0.8;
                }
            }
        },
    });







    // set the chart container id
    chart.container("sankey_whole_container");

    // draw the chart
    chart.draw();

    chart.background().fill('transparent');


});



