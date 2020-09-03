
// Create a function to fetch data 
function dataFetch(ids) {

// Incoming data is internally referred to as sampleData

    d3.json("/data/samples.json").then(function(sampleData) {
      console.log(sampleData[0])
      // var washFrequency = sampleData.metadata.map(data => data.wfreq)
      // console.log(`Test: ${washFrequency}`)




    });

      





};
  
  