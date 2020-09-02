// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as sampleData
d3.json("/data/samples.json").then((sampleData) => {
    // function trialNames(bellyButton) {
    //   return bellyButton.names;
    // }
    function samplesData(bellyButton) {
      return bellyButton.samples.sample_values;
    }
    // var nameData = sampleData.filter(trialNames);
    var sampledData = sampleData.filter(samplesData);
    // console.log(nameData);
    console.log(sampledData);
    // function makeTrace(filteredTrial, color) {
    //   // Use the map method with the arrow function to return all the filtered movie titles.
    //   var titles = filteredTrial.map(bellyData =>  bellyData.title);
    //   // Use the map method with the arrow function to return all the filtered movie metascores.
    //   var ratings = filteredTrial.map(bellyData => bellyData.metascore);
    //   // Check your filtered metascores.
    //   console.log(ratings);
    //   // Create your trace.
    //   var trace = {
    //     x: titles,
    //     y: ratings,
    //     type: "bar",
    //     marker: {
    //       color: color
    //     }
    //   };
    //   return trace;
    // }
    // var okTrace = makeTrace(nameData, "#CC0000");
    // var greatTrace = makeTrace(sampledData, "#00CC00");
    // // Create the data array for our plot
    // var data = [okTrace, greatTrace];
    // // Define the plot layout
    // var layout = {
    //   title: "The highest critically acclaimed bellyData.",
    //   xaxis: { title: "Title" },
    //   yaxis: { title: "Metascore (Critic) Rating"}
    // };
    // // Plot the chart to a div tag with id "bar-plot"
    // Plotly.newPlot("bar-plot", data, layout);
  });
  
  