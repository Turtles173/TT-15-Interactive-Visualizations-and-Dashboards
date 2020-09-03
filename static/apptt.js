
// Create a function to fetch data 
function dataFetch(id) {

// Incoming data is internally referred to as sampleData

    d3.json("/data/samples.json").then(function(data) {
      console.log(data[0])

      // Grab the wash frequency (wfreq)
      var washFrequency = sampleData.metadata.map(data => data.wfreq)
      console.log(`Test: ${washFrequency}`)
            
      // Filter by ID
      var sampleIDS = sampleData.sample.filter(sam => sam.id == id)[0]
      console.log(sampleIDS);

      // Slice to get the top 10 - sample values (sample_value)
      



      // Slice to get the top 10 - otu ids (out_ids)




      // 










    });

      





};
  
  