 var users = [
    {
    username: "user1", password: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    }
   ];
   function check()
{
var username = document.getElementById("username").value; 
var phonenumber = document.getElementById("phonenumber").value; 
var password = document.getElementById("password").value;
var mgender = document.getElementById("mgender").value;
var fgender = document.getElementById("fgender").value;
var age = document.getElementById("age").value;
//var regexPattern = /^(?=.*[-\!\@\#\$\%\^\&\(\)\*])(?=.*[a-zA-Z])(?=.*[/d]).{8,}$/
var regexPattern = /^(?=.*[-\#\$\%\&\@\!\+\=\\])(?=.*[a-zA-Z])(?=.*\d).{5,15}$/;

if(username == "" || phonenumber == "" || password == "" || age == "" || mgender == "" && fgender == "")
{
   alert("Please fill all fields!");
}

else if(username.length > 10 || username.length < 5)
{
    alert("Username must be from 5 to 10 characters!");
}
else if (!password.match(regexPattern))
{
    alert("Password must contain characters upper Case, lower Case and numbers and special characters");
}
else if(phonenumber.length != 11)
{
    alert("Phone number must be 11 number");
}
else if(age<18 || age>60)
{
    alert("Age must be between 18 and 60 years");
}
else
{
    var userr ={username: username, password: password}
    users.push(userr);
    console.log(users);
}
}

function validlog()
{
    var usernamelog = document.getElementById("usernamelog").value;
    var passwordlog = document.getElementById("passwordlog").value;
    if(usernamelog==""||passwordlog=="")
    {
        alert("Please fill empty fields!");
    }
else
{
    for(let i=0;i<users.length;i++)
    {
        if(usernamelog==users[i].username && passwordlog==users[i].password)
        {
            alert("Login successfuly welcome " + usernamelog);
            usernamelog = users[i].username;
            passwordlog = users[i].password;
            
        }
        
    }
    alert("Login failed");
}
}
function forget()
{
    var usernamefor = document.getElementById("usernamefor").value;
    var passwordfor = document.getElementById("newpasswordfor").value;
    for(i=0;i<users.length;i++)
    {
    if(usernamefor == users[i].username)
    {
        users[i].password = passwordfor;
        alert("Password has been updated successfuly!");
    }
    else if(usernamefor != users[i].username)
    {
        alert("Username not found");
    }
}
}