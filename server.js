const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let artists = [
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
   console.log(req.params.id);
   let artist =artists.find(i=>i.id===+req.params.id)
   res.send(artist) })

   app.post('/artists', (req, res)=> {
    let artist = {
    id: Date.now(),
    name: req.body.name
    };
    artists.push(artist);
    res.send(artist);
    })

app.put( '/artists/:id', (req, res)=> {
   let artist = artists.find( i =>i.id === +req.params.id)
    artist.name = req.body.name;
    res.send(artist);
    })

app.delete('/artists/:id',(req, res)=> {
    artists = artists.filter(i=> i.id !== +req.params.id)
    res.send(artists);
        })

app.listen(8080);
console.log('App started! Look at http://localhost:8080');