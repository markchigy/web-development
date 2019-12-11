function disp_alert() 
{ 
alert("Hello! This is how we" + '\n' + "add line breaks to an alert box!") 
} 
function product(a,b) 
{ 
return a*b 
} 
function disp_prompt() 
{ 
var a=prompt("Please enter a number","123") 
var b=prompt("Please enter another number","123") 
alert("Hello! The product of " + a + " and " + b + " is " + '\n' + product(a,b)) 
} 
function myFunction(){
	var userselection=confirm("Have some fun today");
	if (userselection==true) {alert("Thanks");}
	else{alert("Sorry About That");
}

}