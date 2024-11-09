
import { expect, use } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
const server = "http://52.90.48.96:8000";
// describe("GET /users", () => {
//     it("should return user data", async function () {

//         try {
//             const res = await chai.request.execute(server).get("/users");
//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body.message);
//             const users = res.body.message
//             expect(res).to.have.status(200);
//             expect(users).to.be.an("array");
//             console.log("First Element:", res.body[0]);
//             expect(users[0]).to.have.property("_id");


//         } catch (err) {
//             console.error("Error:", err);
//             throw err; 
//         }
//     });
// });

// GET ONE USER BY email

// describe("GET /users/:email", () => {
//     it("should return a single user by email", async function () {
//         this.timeout(5000);
//         try {
//             const sampleEmail = "kesiamukile@gmail.com"; 
//             const res = await chai.request.execute(server).get(`/users/${sampleEmail}`);

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ========>", res.body);
//             expect(res).to.have.status(200);           
//             expect(res.body).to.be.an("object");  
//             expect(res.body).to.have.property("_id");    
//             expect(res.body).to.have.property("name"); 
//             expect(res.body).to.have.property("email"); 
//             expect(res.body.email).to.equal(sampleEmail);

//         } catch (err) {
//             console.error("Error:", err);
//             throw err; 
//         } 
//     });
// });



//TESTING POST REQUEST for users
// describe("/api/data", () => {
//     it("should create a new user and return user data", async function () {
//         try {
//             const userData = {
//                 name: "Tracia",
//                 email: "traciamutobe@gmaill.com",
//                 Age: "20",
//                 password: "traciaMk"
//             };
//             const res = await chai.request.execute(server).post("/api/data").send(userData);
//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body.message);
//             const responseMessage = res.body.message;
//             const responseData = res.body.data;
//             expect(res).to.have.status(201);
//             expect(responseMessage).to.equal("Data received successfully");
//             expect(responseData).to.be.an("object");
//             expect(responseData).to.have.property("name", userData.name);
//             expect(responseData).to.have.property("email", userData.email);
//             expect(responseData).to.have.property("Age", userData.Age);
//             expect(responseData).to.have.property("password", userData.password);

//         } catch (err) {
//             console.error("Error:", err);
//             throw err;
//         }
//     });
// });

//GET all Request For AvailableProducts

// describe("GET /Availableproducts", () => {
//     it("should return Availableproducts data", async function () {
//         this.timeout(5000)
//         try {
//             const res = await chai.request.execute(server).get("/Availableproducts");
//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);
//             const users = res.body
//             expect(res).to.have.status(200);
//             expect(users).to.be.an("array");
//             console.log("First Element:", res.body[0]);
//             expect(users[0]).to.have.property("_id");


//         } catch (err) {
//             console.error("Error:", err);
//             throw err;
//         }
//     });
// });


//GET Request For  one  AvailableProducts by id
// describe("GET /Availableproducts/:id", () => {
//     it("should return a single product by ID", async function () {
//         this.timeout(5000);
//         try {
          
//             const ObjectId = "665363a73867fb5467bd2e33";
//             const res = await chai.request.execute(server).get(`/Availableproducts/${ObjectId}`);
//             console.log("Status Code:", res.status);
//             console.log("Response Body:", res.body);

//             expect(res).to.have.status(200);                      
//             expect(res.body).to.be.an("object");                 
//             expect(res.body).to.have.property("_id");             
//             expect(res.body._id).to.equal(ObjectId);            
//             expect(res.body).to.have.property("Name");           
//             expect(res.body).to.have.property("Price");          
//         } catch (err) {
//             console.error("Error:", err.message);
//             throw err;
//         }
//     });
// });



//POST Request For AvailableProducts

// describe("Availableproducts", () => {
//     it("should create a new product and return product data", async function () {
//         try {
//             const userData = {
//                 name: "Orange shirt",
//                 Price: "160",
//                 Size: "XL, S",
//                 Quality: "Cotton wood"
//             };

//             const res = await chai.request.execute(server).post("/Availableproducts").send(userData);
//             console.log("Response Body: ===>", res.body);

//             expect(res).to.have.status(201);
//             expect(res.text).to.equal("Product added successfully");

//             const newproduct = res.body.data; 
//             expect(newproduct).to.be.an("object");
//             expect(newproduct).to.have.property("name", userData.name);
//             expect(newproduct).to.have.property("Price", userData.Price);
//             expect(newproduct).to.have.property("Size", userData.Size);
//             expect(newproduct).to.have.property("Quality", userData.Quality);
//         } catch (err) {
//             console.error("Test Error:", err);
//             throw err;
//         }
//     });
// });

//GET  ALL Request For Possiblelocations
// describe("GET /possiblelocation", () => {
//     it("should return Possiblelocations data", async function () {
//         this.timeout(5000); 
//         try {
//             const res = await chai.request.execute(server).get("/Possiblelocation");  

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);  
//             const locations = res.body.data; 

//             expect(res).to.have.status(200);  
//             expect(locations).to.be.an("array");  

//             if (locations.length > 0) {
//                 console.log("First Element:", locations[0]);  
//                 expect(locations[0]).to.have.property("_id"); 
//             }

//         } catch (err) {
//             console.error("Error:", err);
//             throw err;  
//         }
//     });
// });

//GET one  Possiblelocation by id
// describe("GET /possiblelocation/:id", () => {
//     it("should return a single possible location by id", async function () {
//         this.timeout(5000); 
//         try {
//             const locationId = "66530200bc48c59ab504fe26"; 
//             const res = await chai.request.execute(server).get(`/Possiblelocation/${locationId}`);  

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);  

//             const location = res.body.data; 
//             expect(res).to.have.status(200);  
//             expect(location).to.be.an("object"); 
//             expect(location).to.have.property("_id");
//             expect(location).to.have.property("Country");  

//         } catch (err) {
//             console.error("Error:", err);
//             throw err;  
//         }
//     });
// });

//POST ONE Possiblelocation 

// describe("POST /possiblelocation", () => {
//     it("should create a new possible location", async function () {
//         this.timeout(5000);  
//         try {
//             const locationData = {
//                 Country: "Nigeria",
//                 Province: "Kano State",
//                 City: "Kano",
//                 Userid: "('8722449ect48c59ab504fdes')" 
//             };
//             const res = await chai.request.execute(server).post("/Possiblelocation").send(locationData);  

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);  
//             const newloaction = res.body.data;  
//             expect(res).to.have.status(201);  
//             expect(newloaction).to.be.an("object"); 
//             expect(newloaction).to.have.property("_id");  
//             expect(newloaction).to.have.property("Country", locationData.Country); 
//             expect(newloaction).to.have.property("Province", locationData.Province); 
//             expect(newloaction).to.have.property("City", locationData.City);  
//             expect(newloaction).to.have.property("Userid", locationData.Userid);  

//         } catch (err) {
//             console.error("Error:", err);
//             throw err;  
//         }
//     });
// });


//GET ALL Request For User'scart
// describe("GET /userscart", () => {
//     it("should return the user's cart data", async function () {
//         this.timeout(5000); 
//         try {
//             const res = await chai.request.execute(server).get("/Userscart");

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);
//             const cartItems = res.body.data;
//             expect(res).to.have.status(200);  
//             expect(cartItems).to.be.an("array");  
//             if (cartItems.length > 0) {
//                 console.log("First Cart Item:", cartItems[0]);  
//                 expect(cartItems[0]).to.have.property("Order");
//                 expect(cartItems[0]).to.have.property("Size");
//                 expect(cartItems[0]).to.have.property("Color");
//             }
//         } catch (err) {
//             console.error("Error:", err);
//             throw err;  
//         }
//     });
// });


//GET a singleusercart  Request by email did not work yet

// describe("GET /singleusercart/:email", () => {
//     it("should return the user's cart data by email", async function () {
//         this.timeout(5000); 
//         try {
//             const Useremail = "thandoanele@icloud.com";  
//             const res = await chai.request.execute(server).get(`/Userscart/${Useremail}`);

//             console.log("Response:", res);
//             console.log("Status Code:", res.status);
//             console.log("Response Body: ===>", res.body);
//             expect(res).to.have.status(200);

//             const userCart = res.body;
//             expect(userCart).to.be.an("array");
//             expect(userCart).to.have.property("_id");
//             expect(userCart).to.have.property("Order");
//             expect(userCart).to.have.property("Size");
//             expect(userCart).to.have.property("Color");
//         } catch (err) {
//             console.error("Error:", err);
//             throw err;  
//         }
//     });
// });


//POST ON USER"S CARD
// describe("POST /userscart", () => {
//     it("should add a new cart item for the user", async function () {
//       this.timeout(5000);
//       try {
//         const newCartItem = {
//           email: "CraceMKt@gmail.com",
//           Order: "T-shirt",
//           Size: "M",
//           Color: "Red"
//         };
  
//         const res = await chai.request.execute(server).post("/Userscart").send(newCartItem);
  
//         console.log("Response:", res);
//         console.log("Status Code:", res.status);
//         console.log("Response Body:", res.body.data);

//         expect(res).to.have.status(201);
//         const responseData = res.body.data;
//         expect(responseData).to.be.an("object");
//         expect(responseData).to.have.property("email", newCartItem.email);
//         expect(responseData).to.have.property("Order", newCartItem.Order);
//         expect(responseData).to.have.property("Size", newCartItem.Size);
//         expect(responseData).to.have.property("Color", newCartItem.Color);
//       } catch (err) {
//         console.error("Error:", err);
//         throw err;
//       }
//     });
//   });
  
// GET ALL  STORES  REQUEST 

// describe("GET /stores", () => {
//     it("should return all store data", async function () {
//       this.timeout(5000);
//       try {
//         const res = await chai.request.execute(server).get("/Stores");
  
//         console.log("Response:", res);
//         console.log("Status Code:", res.status);
//         console.log("Response Body:", res.body);
  
  
//         expect(res).to.have.status(200);
  
//         expect(res.body).to.be.an("array");
//         expect(res.body).to.have.property("message", "Stores retrieved successfully");
        // expect(res.body).to.have.property("data");
  
        // const storesData = res.body.data;
        // expect(storesData).to.be.an("array");

        // const firstStore = storesData;
        // expect(firstStore).to.be.an("object");
        // expect(firstStore).to.have.property("_id");
        //  expect(firstStore).to.have.property("status");
        // expect(firstStore).to.have.property("Address");
        // expect(firstStore).to.have.property("storecode");
        // expect(firstStore).to.have.property("Email");
        // expect(firstStore).to.have.property("storeName");
//       } catch (err) {
//         console.error("Error:", err);
//         throw err;
//       }
//     });
//   });

//POST ON STORE 

describe("POST /stores", () => {
    it("should add a new store", async function () {
      this.timeout(5000);
      try {
        const newStore = {
          status: "active",
          Address: "New Shopping Mall",
          storecode: "4592",
          Email: "info.newsmall@gmail.com",
          storeName: "Newset"
        };
  
        const res = await chai.request.execute(server).post("/stores").send(newStore);
  
        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body:", res.body);
  
        expect(res).to.have.status(201); 
  
        const responseData = res.body.data;
        expect(responseData).to.be.an("object");
        expect(responseData).to.have.property("status", newStore.status);
        expect(responseData).to.have.property("Address", newStore.Address);
        expect(responseData).to.have.property("storecode", newStore.storecode);
        expect(responseData).to.have.property("Email", newStore.Email);
        expect(responseData).to.have.property("storeName", newStore.storeName);
      } catch (err) {
        console.error("Error:", err);
        throw err;
      }
    });
  });
  
  
  

