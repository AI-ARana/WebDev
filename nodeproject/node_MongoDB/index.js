const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test_mongodb1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    regId: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URLencoded data

// Route to get users as JSON (for Postman)
app.get('/api/users', async (req, res) => {
    try {
        const allUsers = await User.find({}); // Fetch all users from the database
        return res.json(allUsers); // Send JSON response
    } catch (error) {
        console.error("Error fetching users:", error); // Log error to the console
        res.status(500).send("Internal Server Error"); // Send error response
    }
});

// Route to get users as HTML (for Browser)
app.get('/users', async (req, res) => {
    try {
        const allUsers = await User.find({}); // Fetch all users from the database

        // Generate plain text string with user data
        const responseText = allUsers.map(user => `${user.firstName} ${user.lastName} - ${user.email}`).join('<br>');

        // Send the HTML response
        res.send(responseText);
    } catch (error) {
        console.error("Error fetching users:", error); // Log error to the console
        res.status(500).send("Internal Server Error"); // Send error response
    }
});

// RESTful Routes for User Operations
app
    .route("/users/:id")
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            return res.json(user); // Return the user as JSON
        } catch (error) {
            console.error("Error fetching user:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    })

    .delete(async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            return res.json({ status: "Success" }); // Return success message
        } catch (error) {
            console.error("Error deleting user:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    });
app.patch("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        // Log the incoming request body
        console.log("Request body for PATCH:", req.body);

        // Ensure that the request body is not empty
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No update fields provided." });
        }

        // Fetch the current user
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if email is being updated and if it already exists
        if (req.body.email && req.body.email !== existingUser.email) {
            const emailExists = await User.findOne({ email: req.body.email });
            if (emailExists) {
                return res.status(400).json({ error: "Email already in use." });
            }
        }

        // Update user while returning the updated document
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        console.log("User updated:", updatedUser); // Log the updated user

        return res.json({ status: "Success", user: updatedUser }); // Return updated user
    } catch (error) {
        console.error("Error updating user:", error); // Log the error
        return res.status(500).json({ error: "Internal Server Error", details: error.message }); // Return detailed error response
    }
});


// POST route to create a user
app.post("/users", async (req, res) => {
    console.log("Received request body:", req.body); // Log the incoming request body

    const { firstName, lastName, email, course, regId } = req.body;

    // Validate request body
    if (!firstName || !lastName || !email || !course || !regId) {
        console.log("Error: Missing fields in the request"); // Log error for missing fields
        return res.status(400).json({ error: "Please fill out all fields." });
    }

    try {
        const newUser = await User.create({ firstName, lastName, email, course, regId });
        console.log("User created:", newUser); // Log the created user
        return res.status(201).json({ msg: "User successfully created!", newUser });
    } catch (err) {
        console.log("Error creating user:", err); // Log any errors during user creation
        return res.status(400).json({ error: "Error creating user", details: err.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
