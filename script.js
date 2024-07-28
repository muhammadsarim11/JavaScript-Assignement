
// Q1///////////////////
let usercity = prompt("Enter Your City Name");

if(usercity.toLowerCase()=="karachi"){document.write("<h1>welcome to the city of lights</h1>")}
else if(usercity.toLowerCase()=="hyderabad"){document.write("<h1>welcome to the city of birds</h1>")}

else{"please enter correct city name"}


// Q2//////////////////////////////////
let usergender = prompt("Enter Your Gender");

if(usergender.toLowerCase()=="male")
    {document.write("<h1>Welcome Sir</h1>")}
else if(usergender.toLowerCase()=="female"){
    document.write("<h1>Welcome ma'am</h1>")
}
    
else{
    alert("please enter your gender!")
}

// Q3/////////////////////////////////////

let usersignal = prompt("Enter Color Name");

if(usersignal.toLowerCase()=="red"){
    document.write("<h1> Must stop!</h1>")
}

else if (usersignal.toLowerCase()=="yellow"){
    document.write("<h1> Ready To Move</h1>")
    
}

else if (usersignal.toLowerCase()=="green"){
    document.write("<h1> Move Now</h1>")
    
}

else{
    alert("please enter correct color")
}

// Q4//////////////////////////////////////

let userfuel = prompt("Enter Your Remaining Fuel")

if(userfuel<0.25){
    document.write("<h1>Please refill the fuel in your car!</h1>")
}
else{
    document.write("<h1>You have Enough Fuel rightnow!</h1>")

}