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
 const newDiv = document.createElement('ul');
 const container = document.getElementById("div1");

    const onClickGreet = ()=>{
    FirstUser.isLoggedIn=true;
      const user1 =  document.createElement('li');
      user1.textContent= `User ${FirstUser.name}  is ${FirstUser.isLoggedIn? "": "not" } logged in`;
    const user2 = document.createElement('li');
      user2.textContent= `User ${SecondUser.name}  is ${SecondUser.isLoggedIn? "": "not" } logged in`;
  // add the text node to the newly created div
     newDiv.appendChild(user2);
    newDiv.appendChild(user1);
    console.log(FirstUser)
    
  }
  const button =  document.createElement("button");
  button.textContent =("Click here to log in user1");
    button.onclick = onClickGreet;
  // and give it some content
  
    // Append the new div to the container
    if(container){
    
   container.appendChild(button);
       container.appendChild(newDiv);

     }
   




}