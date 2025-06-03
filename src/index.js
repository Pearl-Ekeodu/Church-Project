function findUs() {
    let name = prompt("What is your name?");
    let city = prompt("What city do you live in?");

    if (name.length && city.length) {
        alert("👋 Hi " + name + ", Welcome to Saints Community Church, click 'OK' to find us in " + city + "."
        );
    }

    if (name.length && city.length) {
        window.open("https://saintscommunity.net/location.html", "_blank");
    }

    else {
        alert("👎Input invalid, Please try again!");
    }
}

let locationButton = document.querySelector("button");
locationButton.addEventListener("click", findUs);