require("dotenv").config();
const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const uri = process.env.MONGODB_STRING;
let client, db;

async function connectToMongo() {
  try {
    console.log("Connecting to MongoDB...");
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db("JMApp");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const basicAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).send("Unauthorized");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64")
    .toString("ascii")
    .split(":");
  const email = credentials[0];
  const password = credentials[1];

  try {
    const user = await db.collection("User").findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Unauthorized");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};
app.post("/signup", async (req, res) => {
  try {
    const user = req.body;
    if (user.password.length < 6) {
      throw new Error("Password too short");
    }

    if (!user.email.includes("@")) {
      throw new Error("Invalid email format");
    }
    const collection = db.collection("User");

    const existingUser = await collection.findOne({ email: user.email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const result = await collection.insertOne(user);
    res.status(201).json({
      message: "User created successfully",
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error inserting user: ", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});
app.get('/Stores', async (req, res) => {
  try {
    console.log("Fetching stores by address");
    const address = req.query.address;
    const stores = await db.collection('Stores').find({ Address: address }).toArray();

    console.log(stores);

    if (stores.length === 0) {
      res.status(404).send("No stores found at this address");
    } else {
      res.status(200).json(stores);
    }
  } catch (error) {
    console.error("Error retrieving Stores: ", error);
    res.status(500).send("Error retrieving Stores");
  }
});

// GET user by email
app.get('/users', async (req, res) => {
  try {
    const collection = db.collection("User");
    const user = await collection.find({}).toArray()

    if (user.length < 1) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: user })
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});
app.put('/users/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;
    const updatedUserData = req.body;
    if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }
    console.log("Updating user with email:", userEmail);
    console.log("Data to update:", updatedUserData);
    const collection = db.collection("User");
    const result = await collection.updateOne(
      { email: userEmail },
      { $set: updatedUserData }
    );
    console.log("Update result:", result);
    if (result.acknowledged === false) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }
    else {
      res.json({ message: "user updated successfully" })
    }
  } catch (error) {
    console.error("Error updating user: ", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});
app.delete('/users/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;

    console.log("Deleting user with email:", userEmail);
    const collection = db.collection("User");
    const result = await collection.deleteOne({ email: userEmail });
    console.log("Delete result:", result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user: ", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});
// adding new users 
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);
  res.status(201).send({
    message: 'Data received successfully',
    data: receivedData
  });
});

app.listen(port, "0.0.0.0", async () => {
  await connectToMongo();
  console.log(`Server is running on http://98.83.7.174:${port}`);
});  

// adding comments