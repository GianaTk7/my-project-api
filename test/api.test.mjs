// import chai from "chai";
import { expect, use } from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);
const server = "http://54.87.144.101:8000";
describe("GET /users", () => {
    it("should return user data", async function () {
        this.timeout(5000); 

        try {
            const res = await chai.request.execute(server).get("/users");
            console.log("Response:", res);
            console.log("Status Code:", res.status);
            console.log("Response Body:", res.body);

            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
          
            console.log("First Element:", res.body[0]);
            expect(res.body[0]).to.have.property("id");
            // expect(res.body[0].id).to.be.an("number");
          

        } catch (err) {
            console.error("Error:", err);
            throw err; // Throw error to fail the test if there's an issue
        }
    });
});

