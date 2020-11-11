//regex pattern to trst multiple sample of emails given, starting with abc
const emailcodeRegexPattern=RegExp('^(abc)+(((\\.[0-9])|(\\-[0-9])|(\\+[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z0-9]{2,}(.))|([a-z0-9]{2,}(,)))[a-z0-9]{0,}$');
const prompt=require('prompt-sync')();

//test function
let testFunctionForEmailId=(userEmail)=>{
    try{
        if(emailcodeRegexPattern.test(userEmail))
        {
            console.log("Given email Id is: "+userEmail);
        }
        else throw "Invalid email Id";
    }catch(e){
        console.error(e);
    }
}
//user input
let userEmail = prompt("Enter your email Id: ");

//calling test function
testFunctionForEmailId(userEmail);