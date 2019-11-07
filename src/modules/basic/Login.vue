<template>
  <div id="loginPage">
    <form class="col-lg-9 mx-auto text-white" id="formDesign" @submit="onSubmit">
      <br>
      <center>
        <h1>Sign In</h1>
        <div>
          <img src="~assets/logoTrans.png"/>
        </div>
      </center>
      <br>
      <div>
        <label>Email address:</label>
        <br>
        <input type="email" v-model="mine.email" class="form-control" placeholder="Enter email">
      </div>
      <br>
      <div>
        <label>Password:</label>
        <br>
        <input type="password" v-model="mine.password" class="form-control" placeholder="Password">
      </div>
      <br>
      <center>
        <b-button type="submit" id="btnLogin">Login</b-button>
      
      <br>
      <br>
      <p>Forgot Password?</p>
      <p>Don't have account yet? <a href="#">Sing Up</a></p>
      </center>
    </form>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#formDesign {
  margin-top: 90px;
  background-color: white;
  padding: 10px;
  border-radius: 7px;
}
#loginPage {
  margin-left: 50%;
}
h1,label,p {
  color: black;
}
#btnLogin {
  background-color: $motif;
  width: 30%;
}
</style>

<script>
import AUTH from "services/auth";
// import jquery from "jquery";
// import ROUTER from "router";
export default {
  data() {
    return {
      show: true,
      mine: { email: "", password: "" },
      auth: AUTH
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // if (this.mine.email === "" || this.mine.password === "") {
      //alert("All fields are required");
      //} else {
      // let link = 'http://localhost:3000/user'
      // jquery.ajax({
      //   url: link,
      //   method: 'POST',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // })
      //AUTH.login(this.mine.email, this.mine.password);
      //}
      AUTH.login(this.mine.email, this.mine.password);
    }
  }
};
</script>