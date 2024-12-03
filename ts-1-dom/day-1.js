{
    var FirstUser_1 = {
        name: "Mike Tucker",
        age: 50,
        isLoggedIn: false,
    };
    var SecondUser = {
        name: "Angelica Stard",
        age: 50,
        isLoggedIn: true
    };
    var newDiv = document.createElement('div');
    var container = document.getElementById("div1");
    var onClickGreet = function () {
        FirstUser_1.isLoggedIn = true;
        console.log(FirstUser_1);
    };
    var button = document.createElement("button");
    button.onclick = onClickGreet;
    // and give it some content
    var user1 = document.createTextNode(FirstUser_1.isLoggedIn ? FirstUser_1.name : "User is not logged in \n");
    var user2 = document.createTextNode(SecondUser.isLoggedIn ? SecondUser.name : "User is not logged in");
    // add the text node to the newly created div
    newDiv.appendChild(user1);
    newDiv.appendChild(user2);
    // Append the new div to the container
    container && container.appendChild(newDiv);
}
