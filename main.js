/*

    Your job is to create the following functions. 
    Each function should add a property to the chassis. 
    Please use the function names and property names listed.

    1. The addWheels() function should have a parameter for the incoming chassis object. 
    It should add a new property to that object named wheels with a value of 4. 
    The function should return the chassis object.

    2. The addEngine() function should have a parameter for the incoming chassis object. 
    It should add a new property to that object named engine with a value of "4.8L". 
    The function should return the chassis object.

    3. The addSteeringWheel() function should have a parameter for the incoming chassis object. 
    It should add a new property to that object named steeringWheel with a value of "Tilting". 
    The function should return the chassis object.

    4. The addDriveTrain() function should have a parameter for the incoming chassis object. 
    It should add a new property to that object named driveTrain with a value of "Two wheel drive". 
    The function should return the chassis object.

    Make sure you invoke each function, 
    store the returned object in a variable, 
    and then use console.log() to ensure that each of your little minions is doing its job correctly.

*/ 

/* 

    Code for making new chassis. 
    Note: createChassis does not need a parameter to its job. 
    Note: creates a new object in the function body. No properties yet.


*/ 

/* 

    The object that gets returned from the createChassis() function is stored in the chassis variable. 

*/ 


const createChassis = () => {
	
	const newChassisObject = {	}

	return newChassisObject
}

let chassis = createChassis()
console.log(chassis) 


/* 

    Each new "add" function should have a parameter for the incoming chassis object. 
    It should add a new property to that object. 
    The function should return the chassis object.

*/ 


// I'm making the "add" functions (for wheels, engine, steering wheel, and drive train). 
// This puts a property on the chassis object. 
// The chassis object with the property is then returned to us
// This is stored in the chassis variable, which I'll see later when I call the function. 

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject 
    
} 

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject 
}

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject 
}

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject 
}

/* 

    The value held by the chassis variable, 
    which is the property contained in the chassis object, 
    can now be sent to the "add" functions 
    as each function's input. 

*/ 

/* 

    Make sure you invoke each function, 
    store the returned object in a variable, 
    and then use console.log()

*/ 

// I'm calling my function, which should now store the chassis object property in the chassis variable. 
// The more I call the function, the more properties I add on to the chassis. 

let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels) // logs {wheels: 4} in the console 

let chassisWithEngine = addEngine(chassis)
console.log(chassisWithEngine) // logs {wheels: 4, engine: '4.8L'}

let chassisWithSteeringWheel = addSteeringWheel(chassis) 
console.log(chassisWithSteeringWheel) // logs {wheels: 4, engine: '4.8L', steeringWheel: 'Tilting'}

let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassisWithDriveTrain) 

/*  

    logs 

    {
      wheels: 4, 
      engine: '4.8L', 
      steeringWheel: 'Tilting', 
      driveTrain: 'Two wheel drive'
    } 

*/ 