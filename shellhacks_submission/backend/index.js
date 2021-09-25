const express = require('express')
const fetch = require('axios')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.get('/', async (req, res) => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.yelp.com/v3/businesses/search?term="hispanic"&location="'+req.query.location+"\"",
      headers: { 
        'Authorization': 'Bearer joCHI4iyiFsdWXevs76e3NDMoand-ZtkGOse3e-nPQXFJmsiP8gbwILFJawdYlQzrJgU1HqHyNuA9q2HqAkcIhnlpc60y1jRlkF3imHgNU4DTlgM4au8YGaP7wsiX3Yx'
      }
    };
    
    axios(config)
    .then(function (response) {
    res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})