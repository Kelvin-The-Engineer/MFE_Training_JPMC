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
console.log("Hello?");
  const newDiv = document.createElement('div');
  newDiv.textContent=(SecondUser.isLoggedIn? SecondUser.name : "User is not logged in");
 const container = document.getElementById("div1");
// Append the new div to the container
container && container.appendChild(newDiv);


}