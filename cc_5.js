// U08282838

// Create Employee Class
class Employee
{
    constructor(name, salery)
    {
        this.name = name;
        this.salery = salery;
        console.log(`${this.name} has a montly salary of $${this.salery}`);
    }

    // Calculate Employee Annual Salary
    AnnualCalc()
    {
        let Annual = this.salery * 12;
        return Annual;
    }
}

// Creat Manager Class extended off of Employee Class
class Manager extends Employee
{
    constructor(name, salery, department)
    {
       super(name, salery);
       this.department = department;
    }
    
    // Calculate Manager Annual Salary
    AnnualCalc()
    {
        let Bonus = super.AnnualCalc() * .15;
        let Annual = super.AnnualCalc();
        let Total = Annual + Bonus;
        console.log(`\n${this.name} works in the ${this.department} department.\nAnnual Salary: $${Annual}\nBonus: $${Bonus}\nTotal Annual Salary: $${Total}`);
    }
}

// Test Data
let manager1 = new Manager(`Bob Ross`, 6600, `Digital Marketing`);
let manager2 = new Manager(`Debbie Little`, 7205, `Finance`);

manager1.AnnualCalc();
manager2.AnnualCalc();