var uname = prompt("Register your Username: "); //declare a var that will hold the uname, use a user input method
var pword = prompt("Register your passcode");//declare a var that will hold the pword, use a user input method
var repword = prompt("Re-enter your passcode");//declare a variable that will hold the re-pword, use a user input method

if(pword === repword){//compare the Registered Password and Re-entered Password
   alert("Congratulations! You have;//window Pop-up to Congratulate the user for registering. successfully registered.");
   var uname_login = prompt("Username: ");//declare a variable that will hold the uname on LogIn
   if(uname_login === uname){
       var pword_login = prompt("Password: "); //if correct uname, declare a var that will hold the  encoded password on LogIn
      
      (pword_login === pword)
      ? alert("Welcome to DSA, " + uname)//window Pop-up to Congratulate the 
 user for successful LogIn.
       : alert("Incorrect Password, Re-run the code!");//window Pop-up to Inform the 
 user of the incorrect passcode
  }else {
       alert("Incorrect Username, Re-run the code!");//window Pop-up to Inform the 
 user of the incorrect username
  }
} else {

   alert("Password does not Match, Re-run the code!");//window Pop-up to Inform the regpCode and re-entered pCode does not match
}
