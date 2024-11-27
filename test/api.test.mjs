
import { expect, use } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
const server = "http://localhost:8000";
describe("GET /users", () => {
  it("should return user data", function (done) {

    chai
      .request.execute(server)
      .get("/users")
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err)
        }
        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body.message);
          const users = res.body.message;
          expect(res).to.have.status(200);
          expect(users).to.be.an("array");
          console.log("First Element:", res.body[0]);
          expect(users[0]).to.have.property("_id");
          done(); 
        } catch (error) {
          done(error);
        }
      });
  });
});
;

// GET ONE USER BY email

describe("GET /users/:email", () => {
  it("should return a single user by email", function (done) {
    this.timeout(10000);
    const sampleEmail = "kesiamukile@gmail.com"; 
    chai
      .request.execute(server)
      .get(`/User/${sampleEmail}`)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err);
        }

        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ========>", res.body);
          expect(res).to.have.status(200);           
          expect(res.body).to.be.an("object");  
          expect(res.body).to.have.property("_id");    
          expect(res.body).to.have.property("name"); 
          expect(res.body).to.have.property("email"); 
          expect(res.body.email).to.equal(sampleEmail);
          done(); 
        } catch (error) {
          done(error)
        }
      });
  });
});

// POST REQUEST for users
describe("POST /api/data", () => {
  it("should create a new user and return user data", function (done) {
    this.timeout(10000);

    const userData = {
      name: "Tracia",
      email: "traciamutobe@gmaill.com",
      Age: "20",
      password: "traciaMk"
    };

    chai
      .request.execute(server)
      .post("/api/data")
      .send(userData)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err)
        }
        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body.message);

          const responseMessage = res.body.message;
          const responseData = res.body.data;
          expect(res).to.have.status(201);
          expect(responseMessage).to.equal("Data received successfully");
          expect(responseData).to.be.an("object");
          expect(responseData).to.have.property("name", userData.name);
          expect(responseData).to.have.property("email", userData.email);
          expect(responseData).to.have.property("Age", userData.Age);
          expect(responseData).to.have.property("password", userData.password);
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});


//GET all Request For AvailableProducts
describe("GET /Availableproducts", () => {
  it("should return Availableproducts data", function (done) {
    this.timeout(10000);
    chai
      .request.execute(server)
      .get("/Availableproducts")
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err); 
        }

        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body);
          const users = res.body;
          expect(res).to.have.status(200);
          expect(users).to.be.an("array");
          console.log("First Element:", res.body[0]);
          expect(users[0]).to.have.property("_id");
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});



// GET Request For  one  AvailableProducts by id
describe("GET /Availableproducts/:id", () => {
  it("should return a single product by ID", function (done) {
    this.timeout(10000);
    const ObjectId = "665363a73867fb5467bd2e33";
    chai
      .request.execute(server)
      .get(`/Availableproducts/${ObjectId}`)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err); 
        }

        try {
          console.log("Status Code:", res.status);
          console.log("Response Body:", res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id");
          expect(res.body._id).to.equal(ObjectId);
          expect(res.body).to.have.property("Name");
          expect(res.body).to.have.property("Price");
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});

//POST Request For AvailableProducts
describe("POST /Availableproducts", () => {
  it("should create a new product and return product data", function (done) {
    const userData = {
      name: "Orange shirt",
      Price: "160",
      Size: "XL, S",
      Quality: "Cotton wood"
    };

    chai
      .request.execute(server)
      .post("/Availableproducts")
      .send(userData)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err); 
        }
        try {
          console.log("Response Body: ===>", res.body);

          expect(res).to.have.status(201);
          expect(res.text).to.equal("Product added successfully");

          const newproduct = res.body.data;
          expect(newproduct).to.be.an("object");
          expect(newproduct).to.have.property("name", userData.name);
          expect(newproduct).to.have.property("Price", userData.Price);
          expect(newproduct).to.have.property("Size", userData.Size);
          expect(newproduct).to.have.property("Quality", userData.Quality);
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});


//GET  ALL Request For Possiblelocations
describe("GET /possiblelocation", () => {
  it("should return Possiblelocations data", function (done) {
    this.timeout(10000); 

    chai
      .request.execute(server)
      .get("/Possiblelocation")
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err); 
        }
        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body);
          const locations = res.body.data;
          expect(res).to.have.status(200);
          expect(locations).to.be.an("array");
          if (locations.length > 0) {
            console.log("First Element:", locations[0]);
            expect(locations[0]).to.have.property("_id");
          }
          done(); 
        } catch (error) {
          done(error);
        }
      });
  });
});


//GET one  Possiblelocation by id
describe("GET /possiblelocation/:id", () => {
  it("should return a single possible location by id", function (done) {
    this.timeout(10000); 
    const locationId = "66530200bc48c59ab504fe26"; 
    chai
      .request.execute(server)
      .get(`/Possiblelocation/${locationId}`)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err);
        }

        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body);
          const location = res.body.data;
          expect(res).to.have.status(200);
          expect(location).to.be.an("object");
          expect(location).to.have.property("_id");
          expect(location).to.have.property("Country");
          done(); 
        } catch (error) {
          done(error); 
        }
      });
  });
});


//POST ON Possiblelocation 

describe("POST /possiblelocation", () => {
  it("should create a new possible location", function (done) {
    this.timeout(10000); 
    const locationData = {
      Country: "Nigeria",
      Province: "Kano State",
      City: "Kano",
      Userid: "('8722449ect48c59ab504fdes')" 
    };

    chai
      .request.execute(server)
      .post("/Possiblelocation")
      .send(locationData)
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err); 
        }
        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body);
          const newLocation = res.body.data;
          expect(res).to.have.status(201);
          expect(newLocation).to.be.an("object");
          expect(newLocation).to.have.property("_id");
          expect(newLocation).to.have.property("Country", locationData.Country);
          expect(newLocation).to.have.property("Province", locationData.Province);
          expect(newLocation).to.have.property("City", locationData.City);
          expect(newLocation).to.have.property("Userid", locationData.Userid);
          done();
        } catch (error) {
          done(error); 
        }
      });
  });
});



//GET ALL Request For User'scart
describe("GET /userscart", () => {
  it("should return the user's cart data", function (done) {
    this.timeout(10000); 

    chai
      .request.execute(server)
      .get("/Userscart")
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err);
          return done(err);
        }

        try {
          console.log("Response:", res);
          console.log("Status Code:", res.status);
          console.log("Response Body: ===>", res.body);
          const cartItems = res.body.data;
          expect(res).to.have.status(200);  
          expect(cartItems).to.be.an("array");  
          if (cartItems.length > 0) {
            console.log("First Cart Item:", cartItems[0]);
            expect(cartItems[0]).to.have.property("Order");
            expect(cartItems[0]).to.have.property("Size");
            expect(cartItems[0]).to.have.property("Color");
          }
          done(); 
        } catch (error) {
          done(error); 
        }
      });
  });
});



//GET a singleusercart  Request by email 
describe("POST /userscart", () => {
  it("should add a new cart item for the user", function (done) {
    this.timeout(10000);

    const newCartItem = {
      email: "CraceMKt@gmail.com",
      Order: "T-shirt",
      Size: "M",
      Color: "Red"
    };

    chai.request.execute(server)
      .post("/Userscart")
      .send(newCartItem)
      .end((err, res) => {
        if (err) {
          return done(err); 
        }
        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body:", res.body.data);
        expect(res).to.have.status(201);
        const responseData = res.body.data;
        expect(responseData).to.be.an("object");
        expect(responseData).to.have.property("email", newCartItem.email);
        expect(responseData).to.have.property("Order", newCartItem.Order);
        expect(responseData).to.have.property("Size", newCartItem.Size);
        expect(responseData).to.have.property("Color", newCartItem.Color);
        done(); 
      });
  });
});



//POST ON USER"S CARD
describe("POST /userscart", () => {
  it("should add a new cart item for the user", function (done) {
    this.timeout(10000); 
    const newCartItem = {
      email: "CraceMKt@gmail.com",
      Order: "T-shirt",
      Size: "M",
      Color: "Red"
    };

    chai.request.execute(server)
      .post("/Userscart")
      .send(newCartItem)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body:", res.body.data);
        expect(res).to.have.status(201);
        const responseData = res.body.data;
        expect(responseData).to.be.an("object");
        expect(responseData).to.have.property("email", newCartItem.email);
        expect(responseData).to.have.property("Order", newCartItem.Order);
        expect(responseData).to.have.property("Size", newCartItem.Size);
        expect(responseData).to.have.property("Color", newCartItem.Color);
        done(); 
      });
  });
});


//GET ALL  STORES  REQUEST 
describe("GET /stores", () => {
  it("should return a list of stores", function (done) {
    this.timeout(10000); 
    
    chai.request.execute(server)
      .get("/stores")
      .end((err, res) => {
        if (err) {
          return done(err); 
        }
        console.log("Status Code:", res.status);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");

        res.body.forEach((store, index) => {
          console.log(`Store ${index}:`, store);
          expect(store).to.have.property("_id");
          if (store.hasOwnProperty("status")) {
            expect(store).to.have.property("status");
          }
          if (store.hasOwnProperty("Address")) {
            expect(store).to.have.property("Address");
          }
          if (store.hasOwnProperty("storecode")) {
            expect(store).to.have.property("storecode");
          }
          if (store.hasOwnProperty("storeName")) {
            expect(store).to.have.property("storeName");
          }
          if (store.hasOwnProperty("email")) {
            expect(store.email).to.be.a("string");
          }
        });
        done(); 
      });
  });
});





//POST ON STORE 
describe("POST /stores", () => {
  it("should add a new store", function (done) {
    this.timeout(10000); 

    const newStore = {
      name: "CETim",
      email: "info.newsmarket@gmail.com",
      products: [
        { productId: "001", name: "Newset", price: 100 },
        { "productId": "002", "name": "Product 2", "price": 200 }
      ],
      status: "active",
      Address: "Newmarket",
      storecode: "7892",
      storeName: "CETim"
    };

    chai.request.execute(server)
      .post("/stores")
      .send(newStore)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body:===>", res.body);

        expect(res).to.have.status(201);
        const responseData = res.body.data;
        expect(responseData).to.be.an("object");
        expect(responseData).to.have.property("name", newStore.name);
        expect(responseData).to.have.property("email", newStore.email);
        expect(responseData).to.have.property("status", newStore.status);
        expect(responseData).to.have.property("Address", newStore.Address);
        expect(responseData).to.have.property("storecode", newStore.storecode);
        expect(responseData).to.have.property("storeName", newStore.storeName);
        expect(responseData.products).to.be.an("array").that.has.lengthOf(2);

        done();
      });
  });
});


// GET A store item by email
describe("GET /stores/:email", () => {
  it("should return a store by email", function (done) {
    this.timeout(10000); 
    const email = "info.newsmarket@gmail.com";
    chai.request.execute(server)
      .get(`/stores/${email}`)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body: ===>", res.body);
        
        const products = res.body;
        expect(res).to.have.status(200);
        expect(products).to.be.an("array");

        if (products.length > 0 && products[0].store) {
          const storeInfo = products[0].store;
          expect(storeInfo).to.have.property("_id");
          expect(storeInfo).to.have.property("name");
          expect(storeInfo).to.have.property("email", email);
          expect(storeInfo).to.have.property("status");
          expect(storeInfo).to.have.property("Address");
          expect(storeInfo).to.have.property("storecode");
          expect(storeInfo).to.have.property("storeName");
        }

        done(); 
      });
  });
});


