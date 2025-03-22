//abstract class
//   ex:- 1
// abstract class Animal{
//     constructor(public sound:string){

//     }
//     getSound():string{
//         return this.sound;
//     }
// };

// class Dog extends Animal{
//       constructor(public name:string,public sound:string){
//         super(sound);
//       }
//       bark(): string {
//           return `${this.name} barks like ${this.sound}`;
//       }
    
// }

// const dog =new Dog('labrador','woof woof !');
// console.log(dog.bark());
// console.log(dog.name);

// ex: -2
// Define an abstract class Animal
// abstract class Animal {
//     constructor(public sound: string) { }

//     // Abstract method to be implemented by subclasses
//     abstract makeSound(): string;

//     // Concrete method to get the sound of the animal
//     getSound(): string {
//         return this.sound;
//     }
// }

// // Define a subclass Dog that extends Animal
// class Dog extends Animal {
//     constructor(public name: string, sound: string) {
//         super(sound); // Pass the sound to the parent constructor
//     }

//     // Implement the abstract method
//     makeSound(): string {
//         return `${this.name} says: ${this.getSound()}`; // Use getSound() method
//     }
// }

// // Usage example
// const dog = new Dog('Rex', 'Woof');
// console.log(dog.makeSound()); // Outputs: Rex says: Woof
// console.log(dog.getSound()); // Outputs: Woof

// You can add more subclasses like Cat, Bird, etc., implementing the same pattern.


//abstract classes --------------

// abstract class privateAccout{
//     constructor(private balance:number){

//     }

//     //abstract method ---
//      depositeamount(amount:number){
//       this.balance+=amount;
//     };
//      withdrawamount(amount:number){
//     this.balance-=amount;
//     };
//     getBalancenow():number{
//     return this.balance;
//     }
// }


// class Account1 extends privateAccout{
//     constructor(public accountNo:string,balance:number){
//         super(balance);
//     }
//     deposite(amount: number): void {
//         this.depositeamount(amount);
//     }
//     withdraw(amount: number): void {
       
//         this.withdrawamount(amount);
//     }
//     getBalance(): number {
//         return this.getBalancenow();
//     }
// }

// const publicaccount1 =new Account1('ab12',500);
// const publicaccount2 =new Account1('ab13',500);
// publicaccount1.deposite(700);
// publicaccount1.deposite(700);
// publicaccount1.withdraw(200);
// console.log(publicaccount1.getBalance(),publicaccount2.getBalance());


//employee class name and salary in abstract and departname in subclass  and both class have getdetails method:----
// abstract class Employee{
//     //constructor
//     constructor(public name:string,public salary:number){};
    
// //    abstract
//   abstract getDetails():string;

// }

// class Emp1 extends Employee{
//    constructor(name:string,salary:number,public department:string){
//      super(name,salary);
//    }
//    getDetails(): string {
//        return `Employee name : ${this.name}  Salary : ${this.salary} Department : ${this.department} `
//    }
// }

// const emp1 =new Emp1("Rupak" ,25000,"Javascript");
// console.log(emp1.getDetails());
