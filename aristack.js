// Auto-generate Mac Address and Time fields
window.addEventListener("DOMContentLoaded", function () {
    // Generate a random Mac Address
    var macAddressInput = document.getElementById("address");
    macAddressInput.value = generateRandomMacAddress();

    // Get the current time and set it as the default value for the Time field
    var timeInput = document.getElementById("Time");
    var currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    timeInput.value = currentTime;
});

// Function to generate a random Mac Address
function generateRandomMacAddress() {
    var characters = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 12; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        macAddress += characters.charAt(randomIndex);
        if (i % 2 === 1 && i < 11) {
            macAddress += ":";
        }
    }
    return macAddress;
}
