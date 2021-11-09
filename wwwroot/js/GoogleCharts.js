function googleCharts() {
    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(initChart);

    function initChart() {
        var ys = [500,450,600,700,670];
        var xs = [1999,2003,2007,2011,2015,2004,2005];
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
            hAxis: { title: 'Años' },
            vAxis: { title: 'Alumnos' },
            title: 'Nuevos alumnos en la universidad',
            legend: { position: 'none' },
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    };




}

//<script src="js/bootstrap.bundle.min.js"></script>
//    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>