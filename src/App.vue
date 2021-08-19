<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import test from "@/api/test.js"
export default {
  data () {
    return {
      msg: ""
    }
  },
  mounted () {
    // this.$api.test.test().then(res => {
    //   console.log(res);
    // })
    // this.$api.test.base().then(res => {
    //   console.log(res);
    // })
    // console.log();
    // test.test().then(res => {
    //   console.log(res);
    // });

  }

}
</script>


<style >
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/ui-reset.css";
@import "./assets/css/swiper.min.css";
@import "./assets/css/common.css";
@import "./assets/css/main.css";
</style>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
