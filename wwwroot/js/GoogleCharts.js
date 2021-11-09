function googleCharts() {
    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(initChart);

    function initChart() {
        var xs = [1,2,3,4,5];
        var ys = [5,10,15,20,25];
        window.createNewChart({ xs, ys });
    }

    window.createNewChart = (params) => {
        var xs = params.xs;
        var ys = params.ys;

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Y');

        for (var i = 0; i < ys.length; i++) {
            data.addRow([xs[i], ys[i]]);
        }

        var options = {
            hAxis: { title: 'Horizontal Axis Label' },
            vAxis: { title: 'Vertical Axis Label' },
            title: 'This is a Google Chart in Blazor',
            legend: { position: 'none' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    };




}

//<script src="js/bootstrap.bundle.min.js"></script>
//    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>