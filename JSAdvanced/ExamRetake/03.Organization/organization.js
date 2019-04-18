class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.departmentsBudget = {
            marketing: Math.floor(+this.budget * 0.40),
            finance: Math.floor(+this.budget * 0.25),
            production: Math.floor(+this.budget * 0.35),
        }
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            let employee = {
                employeeName: employeeName,
                department: department,
                salary: salary
            }
            this.employees.push(employee);
            this.departmentsBudget[department] -= salary;

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`
        }
    }

    employeeExists(employeeName) {
        let employee = this.employees.find(x => x.employeeName == employeeName);
        if (employee) {
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    leaveOrganization(employeeName) {
        let employee = this.employees.find(x => x.employeeName == employeeName);

        if (employee) {

            let employeeIndex = this.employees.findIndex(x => x.employeeName == employeeName);

            this.departmentsBudget[employee["department"]] += employee["salary"];

            this.employees.splice(employeeIndex, 1);

            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    status() {
        let msg = `${this.name.toUpperCase()} DEPARTMENTS:`;
        debugger;
        let marketingEmployees = this.employees.filter(x => {
            return x.department === "marketing";
        }).sort((a,b)=>{return b.salary - a.salary});
        let financeEmployees = this.employees.filter(x => {
            return x.department === "finance";
        }).sort((a,b)=>{return b.salary - a.salary})
        let productionEmployees = this.employees.filter(x => {
            return x.department === "production";
        }).sort((a,b)=>{return b.salary - a.salary})

        msg += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget["marketing"]}`
        msg += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget["finance"]}`;
        msg += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.map(x => x.employeeName).join(', ')} | Remaining Budget: ${this.departmentsBudget["production"]}`
        return msg;

    }

}
let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'marketing', 2000));
console.log(organization.employeeExists('Peter'))

console.log(organization.status());
console.log(organization.departmentsBudget)
