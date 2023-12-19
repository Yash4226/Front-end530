// function test(){
//     if(document.frm.email.value==""){
//         alert('please enter your email')
//         document.frm.email.focus();
//         return false;
//     }
     
//     //   regular  expresssions
//     var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        
//     if(!em.test(document.frm.email.value))
//     {
//         alert('Please enter your valid email address')
//         document.frm.email.focus();
//         return false;
//     }   


//     if(document.frm.pass.value==""){
//         alert('please enter your password')
//         document.frm.pass.focus();
//         return false;
//     }

//     // regular expression
//     var pwd=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
//     if(!pwd.test(document.frm.pass.value))
//     {
//         alert('Please enter your password with upper,lower and special character and not more than 16 character or mininum 6 charcter')
//         document.frm.pass.focus();
//         return false;
//     }   



//     if(document.frm.Fname.value==""){
//         alert('please enter your First name')
//         document.frm.Fname.value.focus();
//         return false;
//     }

//     if(document.frm.Lname.value==""){
//         alert('please enter your Last name')
//         document.frm.Lname.value.focus();
//         return false;
//     }


//     if(document.gender.Lname.value==""){
//         alert('please enter your gender')
//         document.frm.gender.value.focus();
//         return false;
//     }

//     if(document.country.Lname.value==""){
//         alert('please select your country')
//         document.frm.country.value.focus();
//         return false;
//     }

//     if(document.check.Lname.value==""){
//         alert('please check it')
//         document.frm.check.value.focus();
//         return false;
//     }    
// }

function validateForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var repassword = document.getElementById("repass").value;
    var firstname = document.getElementById("Fname").value;
    var lastname = document.getElementById("Lname").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById("country").value;
    var term = document.getElementById("checkbox").checked;
    var submit = document.getElementById("register").checked;

    if (!email || !password || !repassword || !firstname || !lastname || !gender || !country || !term){
        alert("please fill in all field");
        window.location="index.html";
        return false;
    }
    else
    {
        alert('You are logged in successfully')
        window.location='welcome.html'; 
    }

    if (password !== repassword){
        alert("Password do not match");
        return false;
    }

    if (!term) {
        alert("Please agree and ckecked it");
        return false;
    }

}