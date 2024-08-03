// Singleton
//   Object.create    //<=  is ko constructor kehty hein

//   Object literals

const mySym =Symbol ("key1")
const JsUser = {
    name: "kinza",
    "full name": "Syeda kinza",
    [mySym]: "mykey1",
    age: 18,
    location: "karachi",
    email:"kinza@goolgle.com",
    isloggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

// JsUser.email = "syedakinza@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "syedakinza@microssift.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());