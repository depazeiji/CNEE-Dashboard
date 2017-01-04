var chartData;

$(function(){
  $.ajax({

    //url: 'http://localhost:3000/datos',
    url: 'http://ec2-52-42-150-14.us-west-2.compute.amazonaws.com:8080/api/cantidadInterrupciones?apiVersion=1',

    type: 'GET',
    success : function(data) {
      chartData = data;
      var template = Handlebars.compile($("#tabular-template").html());
      $("#table-location").html(template(data));

      var chartProperties = {
        "caption": "Interrupciones",
        "numberprefix": "",
        "xAxisName": "Día",
        "yAxisName": "Cantidad"
      };

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var lineChart = new FusionCharts({
        type: 'msline',
        renderAt: 'chart-location',
        width: '1000',
        height: '600',
        dataFormat: 'json',
        dataSource: {
          chart: chartProperties,
          categories : categoriesArray,
          dataset : data["dataset"]
        }
      });
      lineChart.render();
    }
  });
});
