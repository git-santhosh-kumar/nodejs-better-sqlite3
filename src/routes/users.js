import { Router } from "express";

const router = Router();

export default (db) => {
    // Route to get all users
    router.get('/', (req, res) => {
        try {
            // Preparing and executing a query to fetch all users
            const users = db.prepare(`
                SELECT * FROM USERS;
            `).all();

            res.status(200).json(users); // Send users as JSON
        } catch (err) {
            // Log the error for debugging
            console.error("Error fetching users:", err);
            res.status(500).json({ message: err.message });
        }
    });

    // Route to get a specific user by ID
    router.get('/:id', (req, res) => {
        try {
            const userId = req.params.id;

            // Ensure the user ID is valid
            if (!userId) {
                return res.status(400).json({ message: 'Invalid user ID' });
            }

            // Fetch user by ID
            const user = db.prepare(`
                SELECT * FROM USERS WHERE id = ?;
            `).get(userId);

            // If user not found, return 404
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user); // Send the user data
        } catch (err) {
            console.error("Error fetching user by ID:", err);
            res.status(500).json({ message: err.message });
        }
    });

    router.delete('/', (req, res) => {
        try {
            const deleteUserTable = db.exec(`
                DROP TABLE USERS;
            `)
            console.log("deleteUserTable: ", deleteUserTable);
            res.status(200).json(deleteUserTable); // Send users as JSON
        } catch (err) {
            // Log the error for debugging
            console.error("Error fetching users:", err);
            res.status(500).json({ message: err.message });
        }
    });

    // Route to create a new user
    router.post('/add', (req, res) => {
        try {
            const requestBody = Array.isArray(req.body) ? req.body : [].concat(req.body); // Assuming these fields are needed
            console.log("Your input: ", requestBody)


            // Validate input
            if (requestBody.some(i => !i.name || !i.email)) {
                return res.status(400).json({ message: "Few items doesn't have name or email." });
            }

            // Insert a new user into the database
            const insert = db.prepare('INSERT INTO USERS (name, email) VALUES (@name, @email)');

            const insertMany = db.transaction((users) => {
                console.log("users: ", users)
                for (const user of users) insert.run(user);
            });         

            let finalResult = insertMany(requestBody);
            
            res.status(201).json(finalResult); // Return the created user with status 201
        } catch (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ message: err.message });
        }
    });

    return router;
}