function processMessage() {
    // testing getting the input from user
    let message = document.getElementById("message").value;
    let name = document.getElementById("username").value;
    console.log("Their name is " + name + ", and they wnat to tell you: \"" + message + "\"");

    alert("Message sent!");
    
    return false;
}
