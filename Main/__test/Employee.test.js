const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("see if we are able to create new employee", () => {
        it("should create an employee object", () => {
            const testEmployee = new Employee()
            expect(typeof(testEmployee)).toEqual("object");
        });
    })
})
