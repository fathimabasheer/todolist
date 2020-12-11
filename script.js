// usernam=document.getElementById("id1")
// password=document.getElementById("id2")
// error=document.getElementById("error")
// a=usernam.value
// b=password.value
function validate(){
// if(a == ""){
//     error.innerHTML="false";
//     return false;
   
// }
// else{
//     return true;
// }

// }
// var x = "";
    if (document.getElementById('id1').value !="admin" ||document.getElementById('id2').value !="12345" )
   {
   document.getElementById('error').innerHTML = "username or password incorrect OR both are incorrect";
   document.getElementById("error").style.color="red"
   return false;
   }
//    else if(document.getElementById('id1').value !="admin" && document.getElementById('id2').value !="1234" )
//    {document.getElementById('error').innerHTML = "username and password incorrect";
//    document.getElementById("error").style.color="red"
//    return false;

//    }
   else
   {
   return true;
   }
   }
