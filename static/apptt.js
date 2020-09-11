// Loading up some of the data
function dataFetch(id) {

  d3.json("../data/samples.json").then((data) => {
    var metadata = data.metadata;
    console.log(metadata)
    
    // Filter the data for the object with the desired sample number
    var sampleNo = metadata.filter(dataObjects => dataObjects.id == id);
    var results = sampleNo[0];

    // Obtain the data from metadata from sample
    var dataResults = d3.select("#sample-metadata");

    dataResults.html("");

    // Add the key & value pairs using objects
    Object.entries(results).forEach(([key,value]) => {
      dataResults.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    })
}

// Function to build the charts
function chartbuilding(id) {
  d3.json("../data/samples.json").then((data) => {
    var samples = data.samples;

    console.log(samples)
    
    // Filter the data for the object with the desired sample number
    var SampleOutcome = samples.filter(dataObjects => dataObjects.id.toString() == id);
    var sampleResults = SampleOutcome[0];

    // Grab the variables, sample_vales, otu_ids & the otu_labels
    var sample_value = sampleResults.sample_values;
    var otu_ids = sampleResults.otu_ids;
    var otu_labels = sampleResults.otu_labels;

    // Filter to do a bar plot of the top ten
    // Top 10 results via a slice (values, results and labels))
    var samplesTop10 = sample_value.slice(0, 10).reverse();
    var otu_idsTop = otu_ids.slice(0, 10).reverse();
    var otu_LabelsTop10 = otu_labels.slice(0, 10);

    // Format the Ids
    var otu_IdsTop10 = otu_idsTop.map(formIDS => "OTU " + formIDS)

    // Create the bar chart
    var traceBar = {
      x : samplesTop10,
      y : otu_IdsTop10,
      text : otu_LabelsTop10,
      type : "bar",
      orientation: "h",
    };
    
    var barChartLayout = {
      title: "Top 10 OTU Results",
      margin: {
        l: 125,
        r: 125,
        t: 40,
        b: 40
      }
    };
    // Set the Variable
    var chartTrace = [traceBar];

    Plotly.newPlot("bar", chartTrace, barChartLayout);

    // Bubble Chart  
    var bubbleTrace = {
      x: otu_ids,
      y: sample_value,
      mode: "markers",
      marker: {
        size: sample_value,
        color: otu_ids
      },
      text: otu_labels
    };
        
    var bubbleLayout = {
      title: "Belly Button Bacteria",
      margin: { t: 20},
      xaxis: { title: "OTU IDS"},
      margin: { t: 40}
    };

    // Set the variable
    var bubbleChart = [bubbleTrace]

    // Create the plot
    Plotly.newPlot("bubble", bubbleChart, bubbleLayout);

  });
}

// Function to amend when the selection changes in the dropdown box
function optionChanged(id) {
  dataFetch(id);
  chartbuilding(id);
}

// Render the data
function init() {
  var menu = d3.select("#selDataset");
  d3.json("../data/samples.json").then((data)=> {
  data.names.forEach(function(name) {
    menu.append("option").text(name).property("value");
  });

  dataFetch(data.names[0]);
  chartbuilding(data.names[0]);
  });
  
}
init();



