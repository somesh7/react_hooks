const Validation = (userRegistration) => {
    let errors= {};
    if(!userRegistration.fullname) {
        errors.fullname = "Fullname is required*";
    } 
    else if(userRegistration.fullname.length < 6  || userRegistration.fullname.length >= 20){
        errors.fullname = "Full name must be 6-20 characters*";
    }
    if(!userRegistration.email){
        errors.email = "Email is required*";
    } 
    if(!userRegistration.mobile) {
        errors.mobile = "Mobile number required*";
    } else if(userRegistration.mobile.length < 10 || userRegistration.mobile.length > 10){
        errors.mobile = " Number should be 10 digits*"
    }
    if(!userRegistration.password) {
        errors.password = "Password is required*";
    } 
    else if(userRegistration.password.length < 6) {
        errors.password = "Password must be more than 5 characters*"
}
    if(userRegistration.cnfpassword!== userRegistration.password) {
        errors.cnfpassword = "Passwords are not matching*.Please type your password correctly**"
    }
    return errors;

};
export default Validation;