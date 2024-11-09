
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
describe("GET /users/:email", () => {
    it("should return a single user by email", async function () {
        this.timeout(5000);
        try {
            const sampleEmail = "kesiamukile@gmail.com"; 
            const res = await chai.request.execute(server).get(`/users/${sampleEmail}`);

            console.log("Response:", res);
            console.log("Status Code:", res.status);
            console.log("Response Body: ========>", res.body);

            expect(res).to.have.status(200);           
            expect(res.body).to.be.an("object");  
            expect(res.body).to.have.property("_id");    
            expect(res.body).to.have.property("name"); 
            expect(res.body).to.have.property("email"); 
            expect(res.body.email).to.equal(sampleEmail);

        } catch (err) {
            console.error("Error:", err);
            throw err; 
        } 
    });
});



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

//GET Request For AvailableProducts

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
//                 Size: "XL",
//                 Quality: "Cotton wood"
//             };
//             const res = await chai.request.execute(server).post("/Availableproducts").send(userData);
//             expect(res).to.have.status(201);
//             expect(res.text).to.equal("Product added successfully");

//             const responseData = res.body.data;
//             expect(responseData).to.be.an("object");
//             expect(responseData).to.have.property("name", userData.name);
//             expect(responseData).to.have.property("Price", userData.Price);
//             expect(responseData).to.have.property("Size", userData.Size);
//             expect(responseData).to.have.property("Quality", userData.Quality);

//         } catch (err) {
//             console.error("Test Error:", err);
//             throw err;
//         }
//     });
// });
