{
    var FirstUser_1 = {
        name: "Mike Tucker",
        age: 50,
        isLoggedIn: false,
    };
    var SecondUser_1 = {
        name: "Angelica Stard",
        age: 50,
        isLoggedIn: true
    };
    var newDiv_1 = document.createElement('ul');
    var container = document.getElementById("div1");
    var onClickGreet = function () {
        FirstUser_1.isLoggedIn = true;
        var user1 = document.createElement('li');
        user1.textContent = "User ".concat(FirstUser_1.name, "  is ").concat(FirstUser_1.isLoggedIn ? "" : "not", " logged in");
        var user2 = document.createElement('li');
        user2.textContent = "User ".concat(SecondUser_1.name, "  is ").concat(SecondUser_1.isLoggedIn ? "" : "not", " logged in");
        // add the text node to the newly created div
        newDiv_1.appendChild(user2);
        newDiv_1.appendChild(user1);
        console.log(FirstUser_1);
    };
    var button = document.createElement("button");
    button.textContent = ("Click here to log in user1");
    button.onclick = onClickGreet;
    // and give it some content
    // Append the new div to the container
    if (container) {
        container.appendChild(button);
        container.appendChild(newDiv_1);
    }
}
