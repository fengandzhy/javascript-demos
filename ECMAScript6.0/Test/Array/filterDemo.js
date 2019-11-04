const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Albert1', last: 'Einstein2', year: 1873, passed: 1958 },
    { first: 'Albert2', last: 'Einstein1', year: 1872, passed: 1955 },
    { first: 'Hanna', last: 'Hammarström', year: 1529, passed: 1909 }
];

const people = ['Beck, Glenn','Blake, William'];

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(fifteen);

