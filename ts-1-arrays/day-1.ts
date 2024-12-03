{
type user = {
    name: string,
    age: number,
    isLoggedIn: boolean
}
const FirstUser:user={
    name: "Mike Tucker",
    age: 50,
    isLoggedIn:false,
}
const SecondUser:user={
    name:"Angelica Stard",
    age: 50,
    isLoggedIn:true
}
type transactionType = {
  description : string,
  amount: string,
  date: Date
}
//Create  & find containers
 const newDiv = document.createElement('ul');
 const container = document.getElementById("div1");
 //Create Transaction list
 const transactionList:transactionType[] = [];
//Create add function
    const addNewTransaction = ()=>{
    FirstUser.isLoggedIn=true;
      const user1 =  document.createElement('li');
      user1.textContent= `User ${FirstUser.name}  is ${FirstUser.isLoggedIn? "": "not" } logged in`;
      const des = document.getElementById("desId") as HTMLInputElement;
      const amt = document.getElementById("amountId") as HTMLInputElement;
transactionList.push({
    description : des.value ,
    amount:  amt.value ,
    date: new Date()
});
  // add the text node to the newly created div
    
  }
  const descriptionContainer = document.createElement('div');
descriptionContainer.textContent="Description: ";
 const descriptionInput =  document.createElement('input');
  descriptionInput.id="desId";
descriptionContainer.appendChild(descriptionInput);
    
const amountContainer = document.createElement('div');
amountContainer.textContent="Amount: ";
const amountInput =  document.createElement('input');
amountInput.id="amountId";
amountContainer.appendChild(amountInput);
  
 
  //Create Transaction Dialog

  const button =  document.createElement("button");
  button.textContent =("Add new");
  button.onclick = addNewTransaction;
  // button.onclick = addNewTransaction();
  // and give it some content
  
    // Append the new div to the container
    if(container){
          for(const item in transactionList){
          console.log(item);
          const curr =  document.createElement('li');
      curr.textContent= `${item}`;
          container.appendChild(curr);
        }
      container.appendChild(descriptionContainer);
      container.appendChild(amountContainer);

      container.appendChild(button);
      container.appendChild(newDiv);

     }
   




}