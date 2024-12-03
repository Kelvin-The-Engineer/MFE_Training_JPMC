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
    //Create  & find containers
    var newDiv = document.createElement('ul');
    var container = document.getElementById("div1");
    //Create Transaction list
    var transactionList_1 = [];
    //Create add function
    var addNewTransaction = function () {
        FirstUser_1.isLoggedIn = true;
        var user1 = document.createElement('li');
        user1.textContent = "User ".concat(FirstUser_1.name, "  is ").concat(FirstUser_1.isLoggedIn ? "" : "not", " logged in");
        var des = document.getElementById("desId");
        var amt = document.getElementById("amountId");
        transactionList_1.push({
            description: des.value,
            amount: amt.value,
            date: new Date()
        });
        // add the text node to the newly created div
    };
    var descriptionContainer = document.createElement('div');
    descriptionContainer.textContent = "Description: ";
    var descriptionInput = document.createElement('input');
    descriptionInput.id = "desId";
    descriptionContainer.appendChild(descriptionInput);
    var amountContainer = document.createElement('div');
    amountContainer.textContent = "Amount: ";
    var amountInput = document.createElement('input');
    amountInput.id = "amountId";
    amountContainer.appendChild(amountInput);
    //Create Transaction Dialog
    var button = document.createElement("button");
    button.textContent = ("Add new");
    button.onclick = addNewTransaction;
    // button.onclick = addNewTransaction();
    // and give it some content
    // Append the new div to the container
    if (container) {
        for (var item in transactionList_1) {
            console.log(item);
            var curr = document.createElement('li');
            curr.textContent = "".concat(item);
            container.appendChild(curr);
        }
        container.appendChild(descriptionContainer);
        container.appendChild(amountContainer);
        container.appendChild(button);
        container.appendChild(newDiv);
    }
}
