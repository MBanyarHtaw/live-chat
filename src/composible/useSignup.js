import { ref } from "vue";
import {auth} from "../firebase/config"
let error =ref(null)//email address is alerady in use
let createAccount=async(email,password,username)=>{
    try{
        let res= await auth.createUserWithEmailAndPassword(email,password)
       if(!res){
         throw new Error("Could not create new user")
       }
       res.user.updateProfile({displayName:username})
       return res;
      }catch(err){
       error.value=err.message;
      }
}
let useSignup=()=>{
    return {error,createAccount}
};
export default useSignup;