/**
 * Created by jalalc on 13/07/14.
 */

var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var playlistsPath = './playlists/';

function allowCrossDomain(req, res, next)
{
    'use strict';

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use('/playlists/covers', express.static(__dirname + '/playlists/covers/'))

app.get('/Library', function(request, response)
{
    'use strict';

    fs.readdir(playlistsPath, function(err, files)
    {
        var playlists = [];

        if (err !== null)
        {
            response.send("Fail to load library");
        }
        files = files.filter(function(file)
        {
            return fs.statSync(playlistsPath + file).isFile() && file.match(/.*\.json/);
        });

        files.forEach(function(file, position, files)
        {
            var content = fs.readFileSync(playlistsPath + file);

            playlists.push(JSON.parse(content));
        });
        response.send(playlists);
    });
});

app.post('/Library', function(request, response)
{
    'use strict';
    var playlists = request.body;
    var extension = '.json';

    playlists.forEach(function(playlist)
    {
        var file = playlistsPath + playlist.name + extension;
        fs.writeFile(file, JSON.stringify(playlist), function(err)
        {
           if (err !== null)
           {
               response.status = 500;
               response.send('Cannot save library');
           }
        });
    });
    response.send('Saved');
});

app.listen(8000);