
var getid=(id)=>{
    return document.getElementById(id);
}

var getClasses=(classes)=>{
     return document.getElementsByClassName(classes);
}

var fname= getid('firstname'),
 lname= getid('lastname'),
 email= getid('email'),
 password =getid('password'),
 form = getid('myform'),
 submit = getid('submit'),
 sts = getid('sts');
 data = getid('data');


var errorMsg= getClasses('error');
         

var obj= JSON.parse(localStorage.getItem('userinfo'));

sts.textContent=`The First Name is: 
${obj.firstname} ,and Last Name is: 
${obj.lastname}, and Email is: 
${obj.email},and Password is: 
${obj.password}`;



form.addEventListener('submit',(event)=>{
  event.preventDefault();

  /* 
    if(fname.value.trim() == '')
    {
        fname.style.border='2px solid red';
        return;
    }
    else
    {
        fname.style.border='2px solid green';
    }

    if(lname.value.trim() == ''){
        lname.style.border='2px solid red';
        return; 
    }
    else{
        lname.style.border='2px solid green'; 
    }

    if(email.value.trim() == ''){
        email.style.border='2px solid red';
        return;
    }
    else{
        email.style.border='2px solid green';    
    }

    if(password.value.trim() =='')
    {
        password.style.border='2px solid red';
        return;
    }
    else
    {
        password.style.border='2px solid green'; 
    }

    
 
    if(fname.value !='' && lname.value !='' && email.value !='' && password.value !='')
    {
        
       dhee.textContent='plzz wait. form is submitting....'; 
       
       setTimeout(()=>{
        dhee.textContent="Thank You for response !";
        alert('Sucessfully Submitted !');
        
       },3000) 

    }  */

   
    var fnameValid= customValidator(fname,0,'First Name is Mandatory !');
    var lnameValid= customValidator(lname,1,'Last Name is Mandatory !');
    var emailValid = customValidator(email,2,'E-Mail is Mandatory !');
    var passwordValid =customValidator(password,3,'Password is Mandatory !');

    console.log(fnameValid+" "+lnameValid+" "+emailValid+" "+passwordValid);

    if(fnameValid == true && lnameValid == true && emailValid == true && passwordValid == true){
        
       var finalobj={};
       finalobj['firstname']=fname.value;
       finalobj['lastname']=lname.value;
       finalobj['email']=email.value;
       finalobj['password']=password.value;
       
       localStorage.setItem('userinfo',JSON.stringify(finalobj));

       data.textContent='Submitting the form. please wait !!';

       setTimeout(()=>{
        data.textContent="Hurray!! Form submitted successfully";
       },3000)


    }
})


function customValidator(documentref,classId,errormessage){

    if(documentref.value.trim() ==''){
    
        documentref.style.border='2px solid red';
        errorMsg[classId].textContent=errormessage;
        return false;
    } 
    else{
        documentref.style.border='2px solid green'; 
        errorMsg[classId].textContent='';
        return true;
    }


}
