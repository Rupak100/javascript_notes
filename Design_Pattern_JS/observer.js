// Observer design pattern

class Observer{
    constructor(name){
        this.name = name;
    }
    notify(){
        console.log(`Hi ${this.name} here is your weather report updated`)
    }
}

class weatherStation{
    constructor(){
        this.people =[];
    }
    subscribe(person){
        this.people.push(person);
    }
    unsubscribe(person){
        this.people =this.people.filter((p)=>{
            return p!==person
        })
    }
    notify(){
        this.people.forEach((p)=>{
            p.notify();
        })
    }
}

const station = new weatherStation();
let person1=new Observer("rupak")
let person2=new Observer("nand")
let person3=new Observer("abhoy");
station.subscribe(person1);
station.subscribe(person2);
station.subscribe(person3);
station.notify();





