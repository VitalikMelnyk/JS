var vasya = {
    age: 21,
    name: 'Вася',
    surname: 'Петров'
  };
  
  var user = {
    isAdmin: false,
    isEmailConfirmed: true
  };
  
  var student = {
    university: 'My university'
  };

  
  
  // добавить к vasya свойства из user и student
  copy(vasya, user, student);
  
  alert( vasya.isAdmin ); // false
  alert( vasya.university ); // My university