const express = require('express')
const app = express();
const artists = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Den"
    },
    {
        id: 3,
        name: "Petro"
    }
]
app.get('/', (req, res) => { res.send('Hello API') })
app.get('/artists', (req, res) => { res.send(artists) })
app.get('/artists/:id', (req, res) => { 
   console.log(req.params);
   let artist =artists.find(i=>i.id===+req.params.id)
   res.send(artist.name) })
app.listen(8080);
console.log('App started! Look at http://localhost:8080');