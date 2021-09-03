anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(
      'data.json',
      function (data) {
        // makes tree from the data for the sample
        var dataTree = anychart.data.tree(data, 'as-table');

        // create sunburst chart
        var chart = anychart.sunburst(dataTree);

        // set chart title
        chart.title('Структура жилищно-коммунального хозяйства');

        // set calculation mode
        chart.calculationMode('parent-dependent');

        // format chart labels
        chart.labels().format('{%Product}');

        // format chart labels  chart.tooltip().format('Выбрать отдел:{%name}  {%title}');
        chart.tooltip().format('Выбрать отдел');

        // set container id for the chart
        chart.container('container');
        // initiate chart drawing
        chart.draw();
      }
    );
  });