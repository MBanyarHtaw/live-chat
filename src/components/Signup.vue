<template>
  <h2>Sign up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="user name" v-model="username">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from "../composible/useSignup"
export default {
setup(props,context){
    let username = ref("");
    let email=ref("");
    let password=ref("");
    let {error,createAccount}=useSignup();
    let signUp=async()=>{
     let res =await createAccount(email.value,password.value,username.value)
     if(res){
      context.emit("enterChat")
     }else{
      console.log(error.value)
     }
    }
    return{username,email,password,signUp,error}
}
}
</script>

<style>

</style>