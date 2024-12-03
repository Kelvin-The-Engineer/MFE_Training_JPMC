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
    isLoggedIn:false
}
console.log(FirstUser, SecondUser)
console.log(`${SecondUser.name} ${SecondUser.age}`);
const users =  [FirstUser, SecondUser];
console.log(users[0]);
console.log(`${users[1].name}`);

const user3 = {...FirstUser, age:30};
const { name, isLoggedIn} = user3;
console.log('-->', name, isLoggedIn);


    
    

}