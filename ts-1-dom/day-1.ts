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
 const newDiv = document.createElement('div');
 const container = document.getElementById("div1");

  const onClickGreet = ()=>{
    FirstUser.isLoggedIn=true;
    console.log(FirstUser)
  }
  const button =  document.createElement("button");
    button.onclick = onClickGreet;
  // and give it some content
  const user1 = document.createTextNode(FirstUser.isLoggedIn? FirstUser.name : "User is not logged in \n");
  const user2 = document.createTextNode(SecondUser.isLoggedIn? SecondUser.name : "User is not logged in");

  // add the text node to the newly created div
  newDiv.appendChild(user1);
  newDiv.appendChild(user2);
    // Append the new div to the container
    if(container){
    container.appendChild(newDiv);
   container.appendChild(button);
     }




}