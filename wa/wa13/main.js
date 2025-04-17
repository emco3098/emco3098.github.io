const employeeSam = {
    firstName: 'Sam',
    department: 'Tech',
    designation: 'Manager',
    salary: 40000,
    raiseEligible: true
};

const employeeMary = {
    firstName: 'Mary',
    department: 'Finance',
    designation: 'Trainee',
    salary: 18500,
    raiseEligible: true
};

const employeeBill = {
    firstName: 'Bill',
    department: 'HR',
    designation: 'Executive',
    salary: 21200,
    raiseEligible: false
};

console.log(employeeSam)
console.log(employeeMary)
console.log(employeeBill)

const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: [employeeSam, employeeMary, employeeBill]
};

console.log(company)

let newEmployeeAnna = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
};

company.employees.push(newEmployeeAnna);

newEmployeeAnna.newKey = 'newValue';

console.log(newEmployeeAnna);


const totalSalary = {
    amount: newEmployeeAnna.salary + employeeBill.salary + employeeMary.salary + employeeSam.salary
}

console.log(totalSalary)


function addEmployeeRaises() {
    company.employees.forEach(employee => {
        if (employee.raiseEligible){
            employee.salary *= 1.10;
            employee.raiseEligible = false;
        }
    });
}

addEmployeeRaises();

const workingFromHome = {
    employees: ['Anna', 'Sam']
}



function wfh() {
    company.employees.forEach(employee => {
        if (workingFromHome.employees.includes(employee.firstName)) {
            employee.wfh = true;
        }
        else {
            employee.wfh = false
        }
    });
}

wfh();