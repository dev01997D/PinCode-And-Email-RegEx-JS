//regex pattern
const pincodeRegexPattern=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}$');
const prompt=require('prompt-sync')();

//test function
let testFunctionForPinCode=()=>{
    try{
        if(pincodeRegexPattern.test(userPincode))
        {
            console.log("Given pincode is: "+userPincode);
        }
        else throw "Invalid pincode";
    }catch(e){
        console.error(e);
    }
}
//user input
let userPincode = prompt("Enter a six digit pincode: ");

//calling test function
testFunctionForPinCode();