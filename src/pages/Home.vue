<template>
  <b-col>
    <h2>Welcome to the College Website!</h2>
    <h3>Please log in to access our database</h3>
    <br>
    <div v-if="!loggedIn">
      Email: <input type="email" v-model="form.email"/>
      <br><br>
      Password: <input type="password" v-model="form.password"/>
      <br><br>
      <button @click="login()">Log In</button>
    </div>
    <p v-else>
      You are already logged in!
    </p>
  </b-col>
</template>

<script>
import axios from '@/config';
export default {
  name: 'Home',
  components: {
    //No components here
  },
  props: {
    loggedIn: Boolean
  },
  data() {
    return {
      form: {
        email: "sam@bloggs.com",
        password: "secret"
      }
    }
  },
  methods: {
    login() {
      axios
        .post('/login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          console.log(response.data.token)
          this.$emit('login', response.data.token)
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message)
        })
    }
  }
};
</script>
