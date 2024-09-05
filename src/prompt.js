const Room = require("./rooms").Room;

const prompt = require('prompt-sync')();



    function promptFunc(rooms) {
    choice = prompt(`Enter your choice:  `)


switch(choice){
    case('1'):
        roomName = prompt('Enter the room you want to add.  ').toLowerCase();
        rooms.push(new Room(roomName));
        console.log(`${roomName} has now been added.`)
        console.log(`
                
----------------------------------------------------
            
            `)
        break;
    // light toggle
    case('2'):
        roomName = prompt('Enter the room to toggle light.  ').toLowerCase();
        let roomForLight = (rooms.find(room => room.name  === roomName))
        if (roomForLight){
            roomForLight.toggleLight();
            console.log(`${roomForLight.name} light is now ${roomForLight.light_state}.`)
            console.log(`
                
----------------------------------------------------
                
                `)

        break;
        }
        else {
            console.log('Room not found!')
            console.log(`
----------------------------------------------------
                
                `)
        }
    break;
    case('3'):
        roomName = prompt('Enter the room whose temperature you want to change.  ').toLowerCase();
        newTemp = prompt('Enter the new temperature  ');
        let roomToChange = (rooms.find(room => room.name  === roomName))
        if (roomToChange){
            roomToChange.changeTemp(newTemp);
            console.log(`${roomToChange.name} temperature is now ${roomToChange.temp}.`)
            console.log(`
                
----------------------------------------------------
                
                `)
        break;
        }
        else {
            console.log('Room not found!')
            console.log(`
                
----------------------------------------------------
                
                `)
        }
    break;
    case('4'):
        console.log("Rooms:");
        if (rooms.length > 0){
        rooms.forEach((room, index) => {
            console.log(`Room: ${room.getRoom()}`);
        });
        console.log(`
                
----------------------------------------------------
            
            `)
        }
        else {
            console.log(`No rooms found.`)

        }
        console.log(`
                
----------------------------------------------------
            
            `)
        break;
   case('5'):
        rooms.forEach((room, index) => {
            room.turnOff();
        });
        console.log(`
                Room lights all off now.
----------------------------------------------------
            
            `)
        break;
   case('6'):
        process.exit(0);

   default:
    console.log(`Smart Room Setup Assistant
        1. Add Room
        2. Toggle Light
        3. Set Temperature
        4. Display Rooms
        5. Turn Off All Lights
        6. Exit
        `)

}
    }


module.exports = {
    promptFunc : promptFunc
}
