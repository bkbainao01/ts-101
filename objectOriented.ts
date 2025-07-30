class Human {
    firstname: string = ''
    lastname: string = ''
    age: number= 0

    sayHello() {
        return `Hello ! I'm ${this.firstname} and ${this.age} years old.`
    }
}

const user1 : any = new Human();
user1.firstname = 'Sirimanee Pimkaew';
user1.age = 65
console.log(user1.sayHello())