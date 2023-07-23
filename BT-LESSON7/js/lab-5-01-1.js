// function check1(){
//     if(myForm.pass.value < 8){
//         alert("The Password must be more than 8 words");
//     }
// }
// function losefocus(){
//     if(myForm.userName.value == ""){
//         alert("You can not leave the name field blank");
//         myForm.userName.focus();
//         return false;
//     }
// }

// function Login(){
//     var userName = document.getElementById("userName").value;
//     var pass = document.getElementById("pass").value;
//     if(userName > 8 && userName < 20 && pass > 8 && pass < 20){
//         alert("Invalid UserName or Password");
//     }else{
//         alert("Welcome to world of Javascrip");
//     }
// }

function check() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("pass").value;
    if (username < 8 || username > 20 || password < 8 || password > 20) {
        alert("Invalid username or password");
    } else {
        alert("Welcome to the world of JavaScript");
    }
}

