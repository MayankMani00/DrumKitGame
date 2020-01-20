var a = document.querySelectorAll(".drum");

for (i = 0; i < a.length; i++)
    a[i] = a[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });

document.addEventListener("keydown", function(event) {
    sound(event.key);
    animation(event.key);
});

function sound(keyPressed) {
    switch (keyPressed) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}

function animation(keyPressed) {
    document.querySelector("." + keyPressed).classList.add("pressed");
    original(keyPressed);
}

function original(keyPressed) {
    setTimeout(function() {
        document.querySelector("." + keyPressed).classList.remove("pressed");
    }, 100);
}
