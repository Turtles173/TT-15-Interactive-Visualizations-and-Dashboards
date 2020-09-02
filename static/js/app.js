// 1. Use the D3 library to read in `samples.json`.

// Wrap the reading in of the data into a function
// function readData(id) {
    
// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
    d3.json("data/samples.json").then((incomingData) => {
        console.log(incomingData)
        // function filteredSampleID(samples) {
        // return samples.otu_ids;
        // }
        // function filteredSampleValues(samples) {
        // return samples.sample_values;
        // }
        // function filteredSampleLabels(samples) {
        // return samples.otu_labels;
        // }

        // var otu_ids = incomingData.filter(filteredSampleID);
        // console.log(out_ids);



    });

// }
