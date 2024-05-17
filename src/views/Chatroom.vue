<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChat></NewChat>
  </div>
</template>

<script>
import ChatWindow from '../components/chatWindow'
import NewChat from '../components/NewChat'
import Navbar from '../components/Navbar'
export default {
  components: {
    ChatWindow,
    NewChat, Navbar },

}
</script>

<style>

</style>