<template>
  <h2>Login to my chatroom app</h2>
  <form @submit.prevent="Login">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div class="error" v-if="error">{{error}}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {auth} from "../firebase/config"
import useLogin from "../composible/useLogin"
export default {
setup(props,context){
    let email=ref("");
    let password=ref("");
    let {error,signIn}= useLogin();
    let Login=async()=>{
      let res =await signIn(email.value,password.value);
      if(res){
        context.emit("enterChat")
      }else{
        console.log(error)
      }
    }
    return{email,password,Login,error}
}
}
</script>

<style>

</style>