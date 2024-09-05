 
const promptFunc = require('./prompt').promptFunc;
menuString = (`Smart Room Setup Assistant
    1. Add Room
    2. Toggle Light
    3. Set Temperature
    4. Display Rooms
    5. Turn Off All Lights
    6. Exit
    `)
    
const rooms = []
    
    console.log(menuString);
    while(true){
        promptFunc(rooms);
    }