const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movies/:movie', (req, res) => {
    const movies = req.params.movie;

    return axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${movies}`
    })
    .then(response => {
        res.status(200).send(response.data);
    })
    .catch(() => {
        res.status(404).send('error');
    });
});

app.get('/movie/:id', (req, res) => {
    return axios({
        method: 'get',
        url: `http://omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`
    })
    .then(response => {
        res.status(200).send(response.data);
    })
    .catch(() => {
        res.status(404).send('error');
    });
});

module.exports = app;
