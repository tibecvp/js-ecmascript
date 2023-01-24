const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        // If - Conditional terniary operator
        (false)
            ? resolve('Hey!!')
            : reject('Whooooops!');
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));