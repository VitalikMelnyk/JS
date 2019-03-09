var arr = [1,2,3,4,5,6,78,90];

for(var i = 0; i < arr.length; i++) {
    setTimeout(function(local) {
      return function() {
        console.log(local);
      } 
    }(i),3000);
}

