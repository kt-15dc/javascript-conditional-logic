//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let msg

switch (lightBulbStatus) {
    case 'On':
        msg = 'Light bulb is On.'
        break
    case 'Off':
        msg = 'Light bulb is Off.'
        break
    case 'Broken':
        msg = 'Light bulb is Broken.'
        break
    default:
        msg = 'Please choose the correct input (On/Off/Broken)'
}

console.log(msg)