//Click Functionality

var numberOfDrumButtons =document.querySelectorAll("button").length; //getting the length of the button so as to loop over them

for (let i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll("button")[i].addEventListener("click", handleClick); //adding an eventListener over each button with the event to listen for being a "click" and the response being the content of the functon handleClick

function handleClick(){

    var innerHTML = this.innerHTML;

    makeSound(innerHTML); //makeSound is a function I created below which has one parameter x. Calling the function here, x becomes the innerHTML of the buttons.

    clickAnimation(innerHTML); //clickAnimation is a function I created below which has one parameter Y. Calling the function here, Y becomes the innerHTML of the buttons.
    
};
};

// Keyboard Press Functionality

document.addEventListener("keydown", handlePress); //adding an eventListener on the entire webpage with the event to listen for being a keyboard press and the response being the content of the function handlePress.

function handlePress(event){

    var eventKey = event.key;

    makeSound(eventKey); //makeSound is a function I created below which has one parameter x. Calling the function here, x becomes the event.key which is simply any key pressed on the keyboard.

    clickAnimation(eventKey) //clickAnimation is a function I created below which has one parameter Y. Calling the function here, Y becomes the event.key which is simply any key pressed on the keyboard.

} // End of Keyboard Functionality

function makeSound(x){ // A function I created separately to hold the "switch statement" so that it can be called in two different eventLIsteners.

    switch (x) {
        case "w": new Audio ("sounds/snare.mp3").play();
            break;

        case "a": new Audio ("sounds/crash.mp3").play();
            break;

        case "s": new Audio ("sounds/kick-bass.mp3").play();
            break;

        case "d": new Audio ("sounds/tom-1.mp3").play();
            break;

        case "j": new Audio ("sounds/tom-2.mp3").play();
            break;

        case "k": new Audio ("sounds/tom-3.mp3").play();
            break;

        case "l": new Audio ("sounds/tom-4.mp3").play();
            break;
            
        default: console.log(innerHTML);
            break;
    };
};

function clickAnimation(Y){ //A function created to add animation to clicks on the button. This function will be called on both eventListeners

    var activeButton = document.querySelector("." + Y); //Recall Y has been called in the eventListeners, and now represent the innerHTML of the buttons. The "." in front makes the querySelector target the respective classes as added in index.html

    activeButton.classList.add("pressed"); // This line of code uses JavaScript to apply the css style "pressed" which has been created in styles.css to the buttons.

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100,); //The setTimeout statement sets a time(in milliseconds) for a particular function to be carried out. In this case, I created an anonymous function to remove the previously added "pressed" class after 100milliseconds of being pressed, thereby creating the perfect animation.

};






