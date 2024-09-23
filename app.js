import express from "express"
import sqliteDB from "./db.js"
import usersRoute from "./src/routes/users.js"

const app = express()
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    const db = sqliteDB() // SQLite database connection

    app.get("/", (req, res) => {
        res.send({ message: "Hello, Welcome to node-express server." })
    })
    
    app.use("/users", usersRoute(db)); // Plug the user routes into the app
})