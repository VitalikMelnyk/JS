function show(firstName, secondName, ...rest) {
    console.log(firstName + ' ' + secondName + " " + rest.split(" "));
}

show("london", "is", "a", "capital");
