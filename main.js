// const fs = require('fs')
// var http = require('http')

// fs.readFile('../randomhits/data/deathnroll.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let json = JSON.parse(data)
//     location.replace("https://www.youtube.com/" + json.song1.videos[0])
//     // res.end(json.song1.videos[0])
//   }).listen(8080);
// });
var songs = [
    "faoDlV3YlFE",
    "m6Jp8WaYl70",
    "bxF9RvVPbQE",
    "pW7tgAi1QlQ",
    "smwSXm7816M",
];
var index = Math.floor(Math.random() * songs.length);

function playsong() {
    // document.getElementById("player").setAttribute("src","https://www.youtube.com/embed/" + songs[index]);
    window.open(
        "https://www.youtube.com/watch?v=" + songs[index], "_blank");
    // console.log(songs[index]);
}


