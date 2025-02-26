//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here

const checkLightBulbStatus = (
    lightBulbStatus === "On"
    ? "Light bulb is On." 
    : lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : "Please choose the correct input (On/Off)"
)


console.log(checkLightBulbStatus);