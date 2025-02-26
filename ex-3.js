//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let lightBulbStatusMsg = 'On' === lightBulbStatus ?
    'Light bulb is On.' : 'Off' === lightBulbStatus ?
        'Light bulb is Off.' : 'Please choose the correct input (On/Off)'

console.log(lightBulbStatusMsg)