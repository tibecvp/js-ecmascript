function newUser(name, age, country) {
    var name = name || 'Tibe';
    var age = age || 33;
    var country = country || 'Col';
    console.log(name, age, country);
}

newUser();
newUser('Pao', 34, 'Col');

// New way ES6
function newAdmin(name = 'Tibe', age = 33, country = 'Col') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Thiago', 35, 'Br');