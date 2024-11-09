// Configuration and Imports
require("dotenv").config();
const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require('mongodb');

const port = process.env.PORT || 8000;
const uri = process.env.MONGODB_STRING;

let client, db;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


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

// Authentication Middleware
const basicAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", "Basic");
    return res.status(401).send("Unauthorized");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const [email, password] = Buffer.from(base64Credentials, "base64").toString("ascii").split(":");

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

// User Sign Up
app.post("/signup", async (req, res) => {
  try {
    const user = req.body;
    if (user.password.length < 6) throw new Error("Password too short");
    if (!user.email.includes("@")) throw new Error("Invalid email format");

    const collection = db.collection("User");
    const existingUser = await collection.findOne({ email: user.email });
    if (existingUser) throw new Error("User already exists");

    const result = await collection.insertOne(user);
    res.status(201).json({ message: "User created successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.collection("User").findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

//POST Request For Availabeproducts 
app.post("/Availableproducts", async (req, res) => {
  try {
      const newProduct = req.body; 
      res.status(201).json({ data: newProduct });
  } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});



// GET ALL  AvailableProject 
app.get("/Availableproducts", async (req, res) => {
  try {
    const products = await db.collection("Availableproducts").find({}).toArray();

    if (products.length === 0) {
      return res.status(404).send("No products found");
    }

    console.log("Successfully retrieved all products:", products); 
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving available products:", error);
    res.status(500).send("Error retrieving available products");
  }
});

// GET AvailableProduct by ID
app.get("/Availableproducts/:id", async (req, res) => {
  try {
    const id = req.params.id; 
    const product = await db.collection("Availableproducts").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).send("Product not found with this ID");
    }

    console.log("Successfully retrieved product by ID:", product); 
    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product by ID:", error);
    res.status(500).send("Error retrieving product by ID");
  }
});


//POST REQUEST FOR STORES

app.post("/stores", async (req, res) => {
  try {
   
    const { name, email, products } = req.body;
    if (!name || !email || !Array.isArray(products) || products.length === 0) {
      return res.status(400).send("Invalid input. Ensure 'name', 'email', and 'products' are provided.");
    }
    const newStore = {
      name,
      email,
      products,  
    };
    const result = await db.collection("Stores").insertOne(newStore);
    if (result.acknowledged) {
      console.log("Store added successfully:", newStore);
      res.status(201).json({ message: "Store added successfully", data: newStore });
    } else {
      return res.status(500).send("Error adding store");
    }
  } catch (error) {
    console.error("Error adding store:", error);
    res.status(500).send("Error adding store");
  }
});


// Get  all  Stores 
app.get("/stores", async (req, res) => {
  try {
    const stores = await db.collection("Stores").find({}).toArray();
    console.log("Stores retrieved:", stores);
    if (stores.length === 0) {
      return res.status(404).send("No stores found");
    }
    const allProducts = stores.map(store => {
      console.log("Products in store:", store.products);
      return store.products;
    }).flat();

    if (allProducts.length === 0) {
      return res.status(404).send("No products available in the stores");
    }
    console.log("Stores retrieved successfully");
    res.status(200).json(allProducts);
  } catch (error) {
    console.error("Error retrieving stores:", error);
    res.status(500).send("Error retrieving stores");
  }
});



//Get Stores by Email
app.get("/stores/:email", async (req, res) => {
  try {
    const email = req.params.email;  
    if (!email) {
      return res.status(400).send("Email is required");
    }
    const stores = await db.collection("Stores").find({ email: email }).toArray();
    if (stores.length === 0) {
      return res.status(404).send("No stores found for this email");
    }
    const allProducts = stores.map(store => store.products).flat();
    if (allProducts.length === 0) {
      return res.status(404).send("No products available in the stores for this email");
    }
    console.log("Stores retrieved successfully for email:", email);
    res.status(200).json(allProducts);
  } catch (error) {
    console.error("Error retrieving stores by email:", error);
    res.status(500).send("Error retrieving stores by email");
  }
});


//GET ONE  possiblelocations by id
app.get("/possiblelocation/:id", async (req, res) => {
  try {
    const id = req.params.id; 
    const location = await db.collection("Possiblelocation").findOne({ _id: new ObjectId(id) });

    if (!location) {
      return res.status(404).send("No location found with this ID");
    }
    console.log("Successfully retrieved user's location by ID:", location); 
    res.status(200).json({ message: "User's location found", data: location });
  } catch (error) {
    console.error("Error retrieving user's location by ID:", error);
    res.status(500).send("Error retrieving user's location by ID");
  }
});

//Get all  possiblelocation
app.get("/possiblelocation", async (req, res) => {
  try {
    const locations = await db.collection("Possiblelocation").find({}).toArray();

    if (locations.length === 0) {
      return res.status(404).send("No locations found");
    }
    console.log("Successfully retrieved all locations:", locations);

    res.status(200).json({ message: "All possible locations found", data: locations });
  } catch (error) {
    console.error("Error retrieving all locations:", error);
    res.status(500).send("Error retrieving all locations");
  }
});

//POST FOR Possiblelocation 
app.post("/possiblelocation", async (req, res) => {
  try {
    const { Country, Province, City, Userid } = req.body;
    if (!Country || !Province || !City || !Userid) {
      return res.status(400).send("All fields are required: Country, Province, City, Userid");
    }
    const newLocation = {
      Country: "Nigeria",
      Province: "Kano State",
      City: "Kano",
      Userid: "('8722449ect48c59ab504fdes')",
    };
    const result = await db.collection("Possiblelocation").insertOne(newLocation);
    if (result.acknowledged) {
      res.status(201).json({
        message: "Possible location created successfully",
        data: {
          _id: result.insertedId,
          ...newLocation,
        },
      });
    } else {
      res.status(500).send("Error creating possible location");
    }
  } catch (error) {
    console.error("Error creating possible location:", error);
    res.status(500).send("Error creating possible location");
  }
});



//  GET  one User'cart by email 
app.get("/singleusercart/:email", async (req, res) => {
  try {
    const userEmail = req.params.email; 
    const userCard = await db.collection("Userscart").findOne({ email: userEmail });

    if (!userCard) return res.status(404).send("No card found for this user");

    console.log("User's cart retrieved successfully");
    res.status(200).json({ message: "User's cart found", data: userCard });
  } catch (error) {
    console.error("Error getting User's cart:", error);
    res.status(500).send("Error getting User's cart");
  }
});


//Get All userscart
app.get("/userscart", async (req, res) => {
  try {
    const allUserCarts = await db.collection("Userscart").find({}).toArray(); 
    if (allUserCarts.length === 0) {
      return res.status(404).send("No carts found");
    }
    res.status(200).json({ message: "All user carts found", data: allUserCarts });
  } catch (error) {
    console.error("Error retrieving all user carts:", error);
    res.status(500).send("Error retrieving all user carts");
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const collection = db.collection("User");
    const users = await collection.find({}).toArray();
    if (users.length < 1) return res.status(404).json({ message: "No users found" });
    res.status(200).json({ message: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});


//Get One User by email
app.get("/users/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const collection = db.collection("User");
    const user = await collection.findOne({ email: userEmail });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    res.status(200).json(user); 
  } catch (error) {
    console.error("Error fetching user:", error);  
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});


// Update User by Email
app.put("/users/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const updatedUserData = req.body;
    if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    const collection = db.collection("User");
    const result = await collection.updateOne({ email: userEmail }, { $set: updatedUserData });
    if (result.modifiedCount === 0) return res.status(404).json({ message: "User not found or no changes made" });

    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

// Delete User by Email
app.delete("/users/:email", async (req, res) => {
  try {
    const userEmail = req.params.email;
    const collection = db.collection("User");
    const result = await collection.deleteOne({ email: userEmail });
    if (result.deletedCount === 0) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
});

app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  console.log("Received data:", receivedData);
  res.status(201).send({ message: "Data received successfully", data: receivedData });
});




app.listen(port, "0.0.0.0", async () => {
  await connectToMongo();
  console.log(`Server is running on http://52.90.48.96:${port}`);
});
