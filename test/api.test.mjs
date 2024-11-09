
import { expect, use } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
const server = "http://54.81.214.246:8000";
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

//POST Request For AvailableProducts

describe("Availableproducts", () => {
    it("should create a new product and return product data", async function () {
        try {
            const userData = {
                name: "Orange shirt",
                Price: "160",
                Size: "XL",
                Quality: "Cotton wood"
            };
            const res = await chai.request.execute(server).post("/Availableproducts").send(userData);
            expect(res).to.have.status(201);
            expect(res.text).to.equal("Product added successfully");

            const responseData = res.body.data;
            expect(responseData).to.be.an("object");
            expect(responseData).to.have.property("name", userData.name);
            expect(responseData).to.have.property("Price", userData.Price);
            expect(responseData).to.have.property("Size", userData.Size);
            expect(responseData).to.have.property("Quality", userData.Quality);

        } catch (err) {
            console.error("Test Error:", err);
            throw err;
        }
    });
});
