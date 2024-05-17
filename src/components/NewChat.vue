<template>
<form>
    <textarea placeholder="text message and hit enter to send"
     v-model="message" @keypress.enter="handleSubmit"
     ></textarea>
</form>
</template>

<script>
import { ref } from 'vue'
import getUser from "../composible/getUser"
import { timestamp } from '@/firebase/config'
import useCollections from "../composible/useCollections"
export default {
setup(){
    let message =ref("");
    let {user} =getUser();
    let {error,addDoc} = useCollections("messages");
    let handleSubmit=async()=>{
        let chat ={
            message:message.value,
            name:user.value.displayName,
            created_at:timestamp()
            
        }
        await addDoc(chat)
        message.value="";
    }
    return {message,handleSubmit,error}
}
}
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border:0;
}
</style>