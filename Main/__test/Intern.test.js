const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("see if this can create school name", () => {
        it("should create an object with a name and employee id, and email provided", () => {
            const testSchool = "UCI";
            const testEmployee = new Intern("ben", 1, "ben@gamil.com", testSchool);
            expect(testEmployee.school).toEqual(testSchool);
        });
        
        it("see if created school name will be equal to school name", () => {
            const testSchool = "UCI";
            const testEmployee = new Intern("ben", 1, "ben@gamil.com", testSchool);
            expect(testEmployee.getSchool()).toEqual(testSchool);
        
        });

        it("see if 'create role' works", () => {
            const testRole = "Intern";
            const testEmployee = new Intern("ben", 1, "ben@gamil.com", 3);
            expect(testEmployee.getRole()).toEqual(testRole);
        })
    })});