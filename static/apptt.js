
// Start with a function and loading up some of the data
function dataFetch(sample) {

  d3.json("../data/samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata)
    
    // Filter the data for the object with the desired sample number
    var sampleNo = metadata.filter(dataObjects => dataObjects.id == sample);
    var results = sampleNo[0];

    // Obtain the data from metadata from sample
    var dataResults = d3.select("#sample-metadata");

    // Clear the results
    dataResults.html("");

    // console.log(results)

    Object.entries(results).forEach(([key,value]) => {
      dataResults.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    })
}
// Test the fetching is working
dataFetch(978);

function demographic(id) {
  // read the json file to get data
  d3.json("../data/samples.json").then((data)=> {
    var metadata = data.metadata;
    console.log(metadata)

    // filter meta data info by id
    var result = metadata.filter(meta => meta.id.toString() === id)[0];

    // select demographic panel to put data
    var demoInfo = d3.select("#sample-metadata");

    demoInfo.html("");
    
    // grab the necessary demographic data data for the id and append the info to the panel
    Object.entries(result).forEach(([key,value]) => {
            demoInfo.append("h5").text(`${key.toUpperCase()}: ${value}`);    
    });
  });
}
demographic(978);

// Function to amend when the selection changes in the dropdown box
function selection(id) {
  dataFetch(sample);
  demographic(id);
}

// 
function init() {
  var menu = d3.select("#selDataset");
  d3.json("../data/samples.json").then((data)=> {
  data.names.forEach(function(name) {
    menu.append("option").text(name).property("value");
  });

  dataFetch(samples.names[0]);
  demographic(data.names[0]);

  });
  
}
init();

// // Build the charts to upload
// function charting(sample) {
//   d3.json("../data/samples.json").then((data) => {
//     var samples = data.samples;
//     console.log(samples)

//     // Filter by ID
//     var sampleSlice = samples.filter(dataObjects => dataObjects.id == sample);    
//     var resultsBar = sampleSlice[0];

//   console.log(resultsBar)

//     // Top 10 results via a slice (results and labels))
//     var samplesValue = resultsBar.sample_values.slice(0, 10).reverse();

//     var idVal = resultsBar.otu_ids.slice(0, 10).reverse();
    
//     var idLabels = resultsBar.out_labels.slice(0, 10);

//     console.log(samplesValue)

//     // Create the trace
//     var trace = {
//       x : samplesValue,
//       y : idVal,
//       text : idLabels,
//       type : "bar",
//       orientation: "h",
//     };
    

//     var barChartLayout = {
//       title: "Top 10 OTU Results",
//       margin: {
//         l: 125,
//         r: 125,
//         t: 40,
//         b: 40
//       }
//     };
  
//     var chartTrace = [trace];

//     return trace;

//   });

//   Plotly.newPlot("bar-plot", chartTrace, barChartLayout);
// };



// Build the charts to upload
// function charting(sample) {
//   d3.json("../data/samples.json").then((data) => {
//     var chartSamples = data.chartSamples;
//     // Filter the data for the object with the desired sample number
//     var sampleNo = chartSamples.filter(dataObjects => dataObjects.id == sample);
//     var results = sampleNo[0];

    
    
    
    
//     // Build the charting vars
//     var otuIds = results.otu_ids;
//     var otuSampleValues = results.sample_values;
//     var otuLabels = results.otu_labels;
//     // var washFrequency = results.wfreq;
    
//     // Chart building
  

    
// });
// };

      // Grab the wash frequency (wfreq)
      // var washFrequency = sampleData.metadata.map(data => data.wfreq)
      // console.log(`Test: ${washFrequency}`)
            
      // Filter by ID
      // var sampleIDS = sampleData.sample.filter(sam => sam.id == id)[0]
      // console.log(sampleIDS);

      // Slice to get the top 10 - sample values (sample_value)
      



      // Slice to get the top 10 - otu ids (out_ids)



