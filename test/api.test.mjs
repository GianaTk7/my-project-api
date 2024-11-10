
import { expect, use } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
const server = "http://3.81.33.158:8000";
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

//POST ON Possiblelocation 

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
describe("GET /stores", () => {
    it("should return a list of stores", async function () {
      this.timeout(5000); 
  
      try {
        const res = await chai.request.execute(server).get("/stores");
        console.log("Response:", res);
        console.log("Status Code:", res.status);
        console.log("Response Body: ===>", res.body);
  
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");

        res.body.forEach(store => {
          expect(store).to.have.property("_id");
          expect(store).to.have.property("name");
          expect(store).to.have.property("email");
          expect(store).to.have.property("status");
          expect(store).to.have.property("Address");
          expect(store).to.have.property("storecode");
          expect(store).to.have.property("storeName");
        });
  
      } catch (err) {
        console.error("Error:", err);
        throw err; 
      }
    });
  });
  




//POST ON STORE 
describe("POST /stores", () => {
    it("should add a new store", async function () {
      this.timeout(5000);
      try {
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
        const res = await chai.request.execute(server).post("/stores").send(newStore);
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
      } catch (err) {
        console.error("Error:", err);
        throw err;
      }
    });
  });
  
  

