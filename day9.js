

//creating the class
class car {

    constructor() {

    }
    //creating a static method which can be called on the class itself
    static tyreCount() {
        //creating a property in the method for the number of tyres
        this.numberofTyres = 4;
        //returning the property value
        return this.numberofTyres;
    }
}


//testing the method
car.tyreCount()
