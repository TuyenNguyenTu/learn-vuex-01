<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Tutorial></Tutorial>
    <hr />
    <TutorialTwo></TutorialTwo>
    <hr />
    <Test></Test>
    <input type="text" />-->
    <br />
    <hr />
    <router-link to="/">Home</router-link>||
    <!-- <router-link to="/hello-world">Hello World</router-link> -->
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
// import Tutorial from "./components/Tutorial";
// import TutorialTwo from "./components/TutorialTwo";
// import Test from "./components/Test";
export default {
  name: "App",
  components: {
    // Tutorial,
    // TutorialTwo,
    // Test,
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
