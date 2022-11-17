const express = require("express");
const app = express();

const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

const userRoutes = require("./Routes/users");

app.use(express.json());
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

//Get all -users
// app.get("/users", (req, res) => {
//   pool.query("SELECT * FROM users", (err, results, fields) => {
//     console.log(results);
//     res.json(results);
//   });
// });

//get by ID-User
// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   pool.query(`SELECT * FROM users WHERE id = ${id}`, (err, results, fields) => {
//     res.json(results);
//   });
// });

// //create- user
// app.post("/users", (req, res) => {
//   const { name, email, password } = req.body;
//   pool.query(
//     `INSERT INTO users (id, name, email, password) VALUES (?, ?, ? ,?)`,
//     [null, name, email, password],
//     (err, results, fields) => {
//       res.json(results);
//     }
//   );
// });

// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   pool.query(
//     //SQL query
//     `UPDATE users SET ? WHERE id= ?`,
//     //abstract vars
//     [req.body, id],
//     //callback function
//     (err, results, fields) => {
//       res.json(results);
//     }
//   );
// });

// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   pool.query(
//     `DELETE FROM users WHERE id= ?`,

//     [id],

//     (err, results, fields) => {
//       res.json(results);
//     }
//   );
// });

app.listen(PORT, () => console.log(`i am listening on port ${PORT}`));
