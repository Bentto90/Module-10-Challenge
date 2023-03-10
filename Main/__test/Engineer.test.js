const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("see if this can create gitHub", () => {
        it("should create an object with a name and employee id, and email provided", () => {
            const testGithub = "Bentto";
            const testEmployee = new Engineer("ben", 1, "ben@gamil.com", testGithub);
            expect(testEmployee.github).toEqual(testGithub);
        });
        
        it("see if created GitHub will return as office Github", () => {
            const testGithub = "Bentto";
            const testEmployee = new Engineer("ben", 1, "ben@gamil.com", testGithub);
            expect(testEmployee.getGithub()).toEqual(testGithub);
        
        });

        it("see if 'create role' works", () => {
            const testRole = "Engineer";
            const testEmployee = new Engineer("ben", 1, "ben@gamil.com", "Bentto");
            expect(testEmployee.getRole()).toEqual(testRole);
        })
    })});