const express = require('express');
const { Deta } = require('deta');

const deta = Deta('c0satnnd_czQVTKyaTkKp9qMcaNUcLhQxMDHwybos'); // configure your Deta project
const db = deta.Base('songs');  // access your DB


const app = express(); // instantiate express

app.use(express.json()) // for parsing application/json bodies

app.get('/', async (req, res) => {
    res.json({"message" : "noerror"});
    res.render("home.ejs");
    // res.sendFile(__dirname+'../home.html');
});

app.post('/addsong', async (req, res) => {
    const insertedSong = await db.put(req.body); // put() will autogenerate a key for us
    res.status(201).json(insertedSong);
});

app.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await db.get(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({"message": "user not found"});
    }
});

app.get('/search-by-year/:year', async (req, res) => {
    const { year } = req.params;
    const { items } = await db.fetch({"year":year});
    res.json(items);
});

app.get('/fetchtest', async (req, res) => {
    let ret = await db.fetch();
    res.json(ret.items);
});

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, hometown } = req.body;
    const toPut = { key: id, name, age, hometown };
    const newItem = await db.put(toPut);
    return res.json(newItem)
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await db.delete(id);
    res.json({"message": "deleted"})
});

module.exports = app;

// function playsong() {
//     // document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/" + songs[index]);
//     window.open(
//         "https://www.youtube.com/watch?v=" + songs[index], "_blank");
//     // console.log(songs[index]);
// }