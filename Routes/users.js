const express = require("express");
const router = express.Router()
const pool = require("../sql/connection")

//TODO break out all contorllers to controller file.




router.get("/users", (req, res) => {
    pool.query("SELECT * FROM users", (err, results, fields) => {
      
      res.json(results);
    });
  });
 
 
 
  module.exports =router;


  router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (err, results, fields) => {
      res.json(results);
    });
  });
  
  //create- user
  router.post("/users", (req, res) => {
    const { name, email, password } = req.body;
    pool.query(
      `INSERT INTO users (id, name, email, password) VALUES (?, ?, ? ,?)`,
      [null, name, email, password],
      (err, results, fields) => {
        res.json(results);
      }
    );
  });
  
  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      //SQL query
      `UPDATE users SET ? WHERE id= ?`,
      //abstract vars
      [req.body, id],
      //callback function
      (err, results, fields) => {
        res.json(results);
      }
    );
  });
  
  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
      `DELETE FROM users WHERE id= ?`,
  
      [id],
  
       (err, results, fields) => {
        res.json(results);
      }
    );
  });