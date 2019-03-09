var head = {
    glasses: 1
  };
  table.__proto__ = head; 
  var table = {
    pen: 3
  };
  bed.__proto__ = table;
  var bed = {
    sheet: 1,
    pillow: 2
  };
  pockets.__proto__ = bed;
  
  var pockets = {
    money: 2000
  };
  
  console.log(pockets.pen);