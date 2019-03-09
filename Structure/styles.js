var styles = ["Jazz", "Bluze"];

styles.push("Rock-n-Roll");
styles[styles.length-2] = "Classic";
styles.shift();
styles.unshift("Rep", "Reggi");
console.log(styles);