function GeneratePieChart() {

    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            category: "Spain",
            value: 701.9
        }, {
            category: "Czechia",
            value: 5.9
        }, {
            category: "Ireland",
            value: 20.1
        }, {
            category: "Germany",
            value: 10.8
        }, {
            category: "Australia",
            value: 40.9
        }, {
            category: "Austria",
            value: 25.3
        }, {
            category: "UK",
            value: 99
        }]);

        series.appear(1000, 100);

    }); // end am5.ready()



}