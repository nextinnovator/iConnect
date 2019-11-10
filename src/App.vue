<template id="body">
  <div id="app">
    <myheader/>
    <myBody/>
  </div>
</template>

<script>
import myheader from "components/Frame/Header.vue";
import myBody from "components/Frame/body.vue";
export default {
  name: "app",
  components: {
    myheader,
    myBody
  }
};
</script>

<style>
body{
  background-image: url("assets/finalBckGnd.png");
  background-size: cover;
}
</style>