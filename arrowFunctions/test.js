// function showMe(title = "Anonim", width = 2200, height = 4555) {
//     console.log(title + " : " + width + " " + height);
// }

// showMe("House");

function hello(who = getName()) {
    console.log("Hello " + who);
}

function getName() {
    return "Vitalik";
}

hello();