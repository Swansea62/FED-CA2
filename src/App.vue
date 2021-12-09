<template>
  <div>
    <Navbar/>
    <br>
    <Home/>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Home from "@/pages/Home.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  },
  data() {
    return {
      loggedIn: false
    }
  },created(){
    if(localStorage.getItem('token')){
      this.loggedIn = true
    }
    else {
      this.loggedIn = false
    }
  },
  methods:{
    setLoggedIn(token){
      this.loggedIn = true
      localStorage.setItem('token', token)

    },
    setLoggedOut(){
      this.loggedIn= false
      localStorage.removeItem('token')
      this.$router.push({name: 'home'})
    }
  }
};
</script>

<style>

</style>
