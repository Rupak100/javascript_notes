class Clients{
    constructor(name){
        this.name = name;
    }
    Notify(training,msg){
        console.log(`The workout ${training} has been assigned to ${this.name} for the message ${msg}`)
    }
};

class PubSub{
    constructor(){
        this.Trainings = {};
    }
    
    AddToTrainings(training,client){
        if(!this.Trainings[training]){
            this.Trainings[training] =[];
        }
        this.Trainings[training].push(client);
    }
    Notify(training,msg){
        this.Trainings[training].forEach((s)=>{
            s.Notify(training,msg);
        })
    }
}

const c1=  new Clients("nand");
const c2=  new Clients("venu");
const c3=  new Clients("pervez");

const pubsub = new PubSub();

pubsub.AddToTrainings("sex",c1)
pubsub.AddToTrainings("gand marna",c2);
pubsub.AddToTrainings("gand marna",c3);

pubsub.Notify('gand marna',"sab ki gand mara jaye")