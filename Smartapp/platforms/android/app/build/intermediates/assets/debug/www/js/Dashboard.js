
var jsonExemplo = {
        labels: ['05', '06', '07', '08', '09', '10'],
        series: [ [22, 23.3, 24, 23, 20, 21],[3, 3, 3, 4, 6, 30]]
      }


function montarGraficos()
{
    new Chartist.Line('#chartist-line', jsonExemplo);
    
      new Chartist.Bar('#chartist-bar', {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        series: [
          [5, 4, 3, 7, 5, 10],
          [3, 2, 9, 5, 4, 6]
        ]
      });
}


