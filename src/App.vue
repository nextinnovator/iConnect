<template id="body">
  <div id="app">
    <myheader/>
    <header2/>
    <myBody/>
  </div>
</template>

<script>
import myheader from "components/Frame/Header.vue";
import header2 from "components/Frame/Header2.vue";
import myBody from "components/Frame/body.vue";
export default {
  name: "app",
  components: {
    myheader,
    myBody,
    header2
  }
};
</script>

<style>
/* body{
  background-image: url("~assets/home.jpg");
  background-size: cover;
} */
</style>