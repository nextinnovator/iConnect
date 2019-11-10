<template>
  <div id="regForm">
    <form class="col-lg-9 mx-auto text-white" id="formDesign" @submit="onSubmit">
      <br />
      <center>
        <h1>Create Account</h1>
        <p><b>Get started with you free account</b></p>
      </center>
      <!-- fullname -->
      <div>
        <label>User Name:</label>
        <br />
        <input
          type="text"
          v-model="mine.fname"
          id="fname"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.mine.fname.$error }" placeholder="fullname"
        />
        <div v-if="submitted && !$v.mine.fname.required" class="invalid-feedback" >User Name is required</div>
      </div>
      <br />
     
<!-- Email -->
      <div>
        <label>Email address:</label>
        <br />
        <input
          type="email"
          v-model="mine.email"
          id="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.mine.email.$error }" placeholder="email"
        />
        <div v-if="submitted && $v.mine.email.$error" class="invalid-feedback">
          <span v-if="!$v.mine.email.required">Email is required</span>
          <span v-if="!$v.mine.email.email">Email is invalid</span>
        </div>
      </div>
      <br />
      <!-- Password -->
      <div>
        <label>Password:</label>
        <br />
        <input
          v-model="mine.password" placeholder="password"
          id="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.mine.password.$error }" :type="passwordVisible ? 'text' : 'password'"
        />

        <span class="visibility" tabindex='-1' @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
        <i class="material-icons">{{ passwordVisible ? "hide" : "show" }}</i>
      </span>

        <div v-if="submitted && $v.mine.password.$error" class="invalid-feedback">
          <span v-if="!$v.mine.password.required">Password is required</span>
          <span v-if="!$v.mine.password.minLength">Weak Password</span>
        </div>
      </div>
      <br />
      <!-- Confirmation -->
      <div>
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          v-model="mine.conpassword"
          id="confirmPassword"
          name="confirmPassword"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.mine.conpassword.$error }" placeholder="confirm password"
        />
        <div v-if="submitted && $v.mine.conpassword.$error" class="invalid-feedback">
          <span v-if="!$v.mine.conpassword.required">Confirm Password is required</span>
          <span v-else-if="!$v.mine.conpassword.sameAsPassword">Passwords must match</span>
        </div>
      </div>
      <br />
      <center>
        <b-button type="submit" id="btnReg">Register</b-button>
      </center>
      <br />
    </form>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#formDesign {
  margin-top: 90px;
  margin-bottom: 40px;
  background-color: white;
  padding: 10px;
  border-radius: 7px;  
}
#fname,#email,#password,#confirmPassword{
  border-color: $motif;
}
#regForm{
  margin-left: 50%;
}
h1,label,p{
  color: black;
}
#btnReg{
  background-color: $motif;
  width: 30%;
}
.visibility {
  all: unset;
  padding: 2px 0.4em 0;
  vertical-align: center;
  cursor: pointer; 
  float:right; 
  margin-top:-33px;
  margin-right: 5px;
  color: gray;
  border: solid gray;
}
.material-icons {
  font-size: 1em;
}
</style>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
import AUTH from "services/auth";
// import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      mine: {
        email: "",
        fname: "",
        cNum: "",
        address: "",
        password: "",
        conpassword: ""
      },
      passwordVisible: false,
      submitted: false
    };
  },
  validations: {
    mine: {
      fname: { required },
      cNum: { required },
      address: { required },
      email: { required, email },
      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        }
      },
      conpassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    togglePasswordVisibility () {
			this.passwordVisible = !this.passwordVisible
    },
    
    onSubmit(evt) {
      evt.preventDefault();
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
         AUTH.register(this.mine.email,this.mine.password)
        return;
      }
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.mine));
      // if (
      //   this.mine.email == "" ||
      //   this.mine.password == "" ||
      //   this.mine.fname == "" ||
      //   this.mine.lname == "" ||
      //   this.mine.conpassword == ""
      // ) {
      //   alert("All fields are required!!!");
      // } else if (this.mine.password != this.mine.conpassword) {
      //   alert("Mismatch password!!!");
      // } else {
      //   sessionStorage.setItem("Pass", this.mine.password);
      //   sessionStorage.setItem("fname", this.mine.fname);
      //   sessionStorage.setItem("lname", this.mine.lname);
      //   AUTH.register(this.mine.email, this.mine.password);
      // }
    }
    // register() {
    //   let link = `http://localhost:3000/db/create/${this.mine.fname}/${this.mine.email}/${this.mine.password}`;
    //   jquery
    //     .ajax({
    //       url: link,
    //       method: "GET",
    //       headers: {
    //         "Access-Control-Allow-Origin": "*"
    //       }
    //     })
    //     .then(response => {
    //       alert(response.username);
    //     });
    // }
  }
};
</script>