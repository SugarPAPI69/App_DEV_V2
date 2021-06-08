<template>
  <div class="container">
    <h1>Register to Weirdoocity</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        
          <div class="form-group">
            <input type="text"
              class="form-control"
              id="fullName"
              required
              aria-describedby="emailHelp"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
              aria-describedby="emailHelp"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
              placeholder="Password"
            />
        <div v-if="password.lenght >1 && password.lenght < 6" class="text-danger">Passwords lenght should be greater than 6</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reenterPassword"
              v-model="reenterPassword"
              required
              placeholder="Re-enter Password"
            />
            <div v-if="password != reenterPassword " class="text-danger">Passwords dont match</div>
          </div>
          <br />
          <button type="submit" class="btn-lg btn-primary">Register</button>
        
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterPassword: "",
    };
  },
  methods: {
    register: function () {
      console.log("Email: " + this.email);
    },
  },
};
</script>

<style scoped>
</style>