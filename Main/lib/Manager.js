const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officenum) {
        super (id, name, email);
        this.officenum = officenum
    }
    
    getOfficenum() {
        return this.officenum
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;