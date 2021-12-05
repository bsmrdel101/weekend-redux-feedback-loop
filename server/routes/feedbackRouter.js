const express = require('express');
const router = express.Router();

const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'prime_feedback',
    host: 'localhost'
  });

pool.on('connect', () => {
    console.log('Postgresql connected');
  });
  
  pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
  });



router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM feedback;'
  pool.query(sqlText)
    .then((dbRes) => {
      const feedbackFromDb = dbRes.rows;
      res.send(feedbackFromDb);
    }).catch((dbErr) => {
      console.error(dbErr);
    });
});

router.post('/', (req, res) => {
    const newFeedback = {
        feeling: req.body[0],
        understanding: req.body[1],
        support: req.body[2],
        comments: req.body[3]
    };
    console.log(newFeedback);
    const sqlText = (`
    INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES
      ($1, $2, $3, $4);
  `)
  const sqlValues = [
    newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments
  ]
  console.log(sqlText)
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.error(dbErr);
    })
});

module.exports = router;