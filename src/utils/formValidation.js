export const validate = (importedName,importedEmail,importedPassword)=>{
    const email =   /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(importedEmail);
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(importedPassword);

    if(!email) return "Email is not valid!";
    if(!password) return "Password is not valid!";
    if(importedName !==null){
        if(importedName=="") return "Name is not valid!"
    }

    return null;
}