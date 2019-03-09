function User(userData) {
    if (userData) { // если указаны данные -- одна ветка if
      this.name = userData.name;
      this.age = userData.age;
    } else { // если не указаны -- другая
      this.name = 'Аноним';
    }
  
    this.sayHi = function() {
      alert(this.name)
    };
    // ...
  }
  
  // Использование
  
  var guest = new User();
  guest.sayHi(); // Аноним
  
  var knownUser = new User({
    name: 'Вася',
    age: 25
  });
  knownUser.sayHi(); // Вася