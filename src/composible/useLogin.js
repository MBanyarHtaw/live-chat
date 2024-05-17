import { ref } from "vue"
import { auth } from "../firebase/config";
let error =ref(null);
let signIn =async(email,password)=>{
    try{
        let res = await auth.signInWithEmailAndPassword(email,password);
        if(!res){
          throw new Error("Could not Login account")
        }
        return res;
       }catch(err){
        error.value="Login Fail.Incorret Passowrd or Email.";
        console.log(error.value);
     }
}
let useLogin=()=>{
    return {error,signIn}
}
export default useLogin;