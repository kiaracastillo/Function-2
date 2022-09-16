//Kiara Iran Castillo Magallanes 
//09/15/2022
//Class 24603 

// Create canvas 
function setup() {
    createCanvas(600, 600);    
    background(195, 216, 250);   //background blue
}

function draw() {
    

    // Assign initial color value to variable
    let myColor = color(170, 200, 150);
    // Draw a circle with the initial color
    fill(myColor);
    circle(100, 200, 50);   
    

}

function removeRed (myColor) { // removeRed function
    let noRed = myColor(170, 200, 150); //variable noRed 
    noRed.setRed(0); 
    fill(noRed); //fill circle with noRed

}