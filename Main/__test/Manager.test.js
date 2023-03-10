const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("see if this can create office number", () => {
        it("should create an object with a name and employee id, and email provided", () => {
            const testNumber = 3;
            const testEmployee = new Manager("ben", 1, "ben@gamil.com", testNumber);
            expect(testEmployee.officenum).toEqual(testNumber);
        });
        
        it("see if created office number will return as office number", () => {
            const testNumber = 3;
            const testEmployee = new Manager("ben", 1, "ben@gamil.com", testNumber);
            expect(testEmployee.getOfficenum()).toEqual(testNumber);
        
        });

        it("see if 'create role' works", () => {
            const testRole = "Manager";
            const testEmployee = new Manager("ben", 1, "ben@gamil.com", 3);
            expect(testEmployee.getRole()).toEqual(testRole);
        })
    })});