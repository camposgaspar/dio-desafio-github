function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }   
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Gabriel', 'Admin');
usuarios.set('Natalia', 'User');
usuarios.set('José', 'Admin');

console.log(getAdmins(usuarios));

// 

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const mySet = new Set(array);

    return [...mySet]
}

console.log(valoresUnicos(meuArray))
