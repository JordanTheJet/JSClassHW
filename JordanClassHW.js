// Create a class called Monster - yup, we're creating a monster
// This class must have three properties (and three parameters in the constructor)
// typeOfMonster, strength, name
// Create two getters for this class
// Create two functions (the getters don't count):
// One function that changes the monster's name
// Another function that "makes the monster attack"
// NEXT, create a subclass of Monster (see Athlete from tonight's class) called EvolvedMonster
// As you already know, this new class will take on the properties (i.e. this._name) of the Monster class
// Add two new properties to this class: speed and weapon
// Create a function that changes your EvolvedMonster's weapon
// Create two instances of each class, and call at least three functions for each one


class Monster {
    constructor(x, y, z){
        this._typeOfMonster= x,
        this._strength=y,
        this._name=z
    }
    get strength (){
        return this._strength
    }
    get name(){
        return this._name
    }
    changeName(newName){
        this._name=newName
    }
    attack(target){
        if(this.strength>=target.strength){
        console.log(`${this._name} has killed ${target._name}`)
    }else{
        console.log(`${this._name} barely scratched ${target._name}`)
    }
    }
}
let jordan = new Monster("human",9001,"jordan")
let cesar = new Monster ("human", 9000, "El rey")

jordan.changeName("The Greatest")
jordan.attack(cesar)

class EvolvedMonster extends Monster{
    constructor(typeOfMonster, strength, name, speed, weapon){
        super(typeOfMonster, strength, name);
        this._speed= speed;
        this._weapon= weapon;
    }
    changeWeapon(newWeapon){
        this._weapon=newWeapon
    }
    powerUp(){
        this._strength+=this._strength+100
    }
}

let kazi = new EvolvedMonster("human", 15000, "kaZOOa")
let tamar = new EvolvedMonster("hooman", 1000, "Tamara")

jordan.attack(tamar)
tamar.powerUp()
tamar.changeName("Super Tamar")
tamar.attack(jordan)
