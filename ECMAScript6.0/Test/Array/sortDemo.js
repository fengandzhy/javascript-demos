const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Albert1', last: 'Einstein2', year: 1873, passed: 1958 },
    { first: 'Albert2', last: 'Einstein1', year: 1872, passed: 1955 },
    { first: 'Hanna', last: 'Hammarström', year: 1529, passed: 1909 }
];

const birthdate = inventors.sort((inventora, inventorb) => (inventora.year - inventorb.year));
console.log(birthdate);


const sortName = inventors.sort((a, b) => {
    return (a.last > b.last) ? 1 : -1;
})
console.log(sortName);



