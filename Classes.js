class UserList {

  constructor(users) {
    this._users = users;
  }

  showNames() {
    this._users.forEach (user => {
      console.log(user.firstName);
    })
    return this;
  }
  

  showById(id) {
    const index = this._users.findIndex(user => user.id === id)
    if (index === -1) {
      console.log(`Unable to find user with id: ${id}`)
    } else {
      console.log (this._users[index])
    }
    return this;
  }

  add(user) {
    if(!user.firstName) {
      console.log('Field firstName is required');
      return
    }  
    if(!user.id) {
      user.id = Math.floor(Math.random() * Math.pow(10, 13))
      this._users.push(user)
      console.log( `Hi everyone, I am ${user.firstName}`);
    }
    return this;
  }

  removeById(id) {
    const index = this._users.findIndex(user => user.id === id)
    if (index === -1) {
      console.log(`Unable to find user with id: ${id}`)
    } else {
      this._users.splice(this._users[index], 1);
      console.log (`bye bye ${id}`)
    }
    return this;
  }

  logUsersCould() {
    console.log(this._users.length);
    return this;
  }
}

const userList = new UserList([
  {
    'id': '1485249082126',
    'firstName': 'Veronika',
    'lastName': 'Snow',
    'age': 30
  },
  {
    'id': '1485249082127',
    'firstName': 'Alex',
    'lastName': 'Hnow',
    'age': 20
  }
])

userList
  .add({firstName: 'Bob'})
  .showNames()
  .showById('1485249082126')
  .removeById('1485249082126')
  .logUsersCould();
