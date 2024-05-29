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

    // Calculate Annual Salary
    AnnualCalc()
    {
        let Annual = this.salery * 12;
        return Annual
    }
}