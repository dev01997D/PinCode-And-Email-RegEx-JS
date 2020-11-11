//regex pattern
const pincodeRegexPattern=RegExp('^[1-9]{6}$');
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