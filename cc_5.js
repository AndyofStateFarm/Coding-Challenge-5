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
        let Bonus = this.salery * .15;
        let Annual = super.AnnualCalc();
        let Total = Annual + Bonus;
        console.log(`${this.name} works in the ${this.department} department.` /n `Annual Salary: $${Annual}` /n `Bonus: $${bonus}` /n `Total Annual Salary: $${Total}`);
    }
}