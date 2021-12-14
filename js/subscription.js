function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Subcription to newsletter is success!");
document.form1.email_address.focus();
return true;
}
else
{
alert("Please enter valid email address!");
document.form1.email_address.focus();
return false;
}
}

function Subscribe ()
{
    alert ("You have succesfully subcribed");
}
