const express = require('express');
const router = express.Router();
const pool = require("../modules/pool.js");



// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
    let idToGet = req.params.id
    console.log("itemID", idToGet)
     const queryText = `UPDATE "gallery" SET likes = likes +1 WHERE "id" = $1;`
    const queryParam = [idToGet]
    pool.query(queryText,queryParam)
      .then((result) => {
        res.sendStatus(204)
      })
      .catch((error) => {
        console.log("Woops, error making query: ", queryText)
        console.error(error)
        res.sendStatus(500)
      })
  })


  
;

 // Setup a GET route to get all the items from the database
router.get('/', (req, res) => {
  // code here
  console.log("hit the get route");
  const queryText = `SELECT * FROM "gallery"`;
  pool.query(queryText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${queryText}`, error);
          res.sendStatus(500); // Good server always responds
      });
});


module.exports = router;
