<template>
  <div id="app" >
    <Header class="left_wrap"></Header>
    <div class="container right_wrap">
      <Aboutme class="c_wrap"></Aboutme>
      <Career class="c_wrap"></Career>
      <Skillpage class="c_wrap"></Skillpage>
      <Projectpage class="c_wrap"></Projectpage>
    </div>
  </div>
</template>

<script>
import Header from "./views/common/Header.vue";
import Aboutme from "./views/Aboutme.vue";
import Career from "./views/Career.vue";
import Projectpage from "./views/Projectpage.vue";
import Skillpage from "./views/Skillpage.vue";

export default {
  name: "App",
  components: {
    Header,
    Aboutme,
    Career,
    Projectpage,
    Skillpage,
  },
  methods:{

  }
};
</script>

<style>
@import "./css/main.css";
</style>
