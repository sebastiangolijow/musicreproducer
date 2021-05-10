const express = require("express");
const router = require("express").Router();
const axios = require("axios").default;

router.get("/", (req, res) => {
  res.send("<h1>Welcome to Musicpage</h1>");
});

router.get("/music", async (req, res) => {
  let {name} = req.query
    try {
    let music = await axios.get(`https://api.deezer.com/search?q=${name}`)
    console.log('aca ' + music.data)
    res.send(music.data.data);
  } catch {
      res.send('<h1>not found</h1>')
    }
});


router.get("/music", async (req, res) => {
  let {id} = req.query
    try {
    let music = await axios.get(`https://api.deezer.com/track/${id}`)
    res.send(music.data.data);
  } catch {
      res.send('<h1>not found</h1>')
    }
});

module.exports = router;
