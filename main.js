const fs = require('fs')

fs.readFile('../data/deathnroll.json', 'utf8', function (err, data) {
  if (err) throw err;
    let json = JSON.parse(data)
    console.log(json[0])
});
