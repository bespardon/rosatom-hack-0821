anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile("data_images.json", function (data) {
      var chart = anychart.graph(data);

      chart.title("Визуализация загрузки отдела - Теплообслуживание");
      var nodes = chart.nodes();

      nodes.normal().height(30);
      nodes.hovered().height(45);
      nodes.selected().height(45);

      nodes.normal().stroke(null);
      nodes.hovered().stroke("#CD5C5C", 3);
      nodes.selected().stroke("#CD5C5C", 3);

      chart.nodes().labels().enabled(true);

      chart.nodes().labels().format("{%id}");
      chart.nodes().labels().fontSize(11);

      chart.nodes().labels('green');

      chart.title().fontSize(20);
      chart.nodes().labels().fontWeight(600);

      chart.container("container").draw();

    });
  });