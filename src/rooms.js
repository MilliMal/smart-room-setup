const { tempSetter } = require("./utilities");

class Room {
    name;
    temp = tempSetter(18, 26);
    light_state = 'Off';
    
    // constructor 
    constructor(name) {
        this.name = name;
    }

    toggleLight(){
        if (this.light_state = 'Off')
        {
            this.light_state = 'On';
        }
        else {
            this.light_state = 'Off';
        }
    }

    changeTemp(temp){
        this.temp = temp;
    }

    getRoom() {
        return `${this.name}: Temperature: ${this.temp} °C, Light State: ${this.light_state}`;
    }

    turnOff(){
        this.light_state = 'Off';
    }
}


module.exports = {
    Room: Room
}
