// import chai from "chai";
import { expect, use} from "chai";
import chaiHttp from "chai-http";
const chai = use(chaiHttp);

describe("GET /user", () => {
    it("should return user data", (done) => {
        chai.request("http://54.87.144.101:8000")
            .get("/Availableproducts")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                expect(res.body[0]).to.have.property("id", 1);
                done();
          });
    });
});
