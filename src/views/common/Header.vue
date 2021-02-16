<template>
  <div>
    <div class="contentwrap">
      <div class="wei-img"></div>

      <div class="wei-content">
        <div class="c-name">王維摩</div>
        <div class="e-name">Wei Mo Wang</div>
      </div>
      <ul id="menuUl" class="menuUl">
        <li
          v-for="(item, key, index) in menuData"
          :key="index"
          :class="[{ current_active: item.name == $route.name }]"
          @click="toggle()"
        >
          <router-link tag="a" :to="{ name: item.name, hash: item.anchor }">{{
            item.txt
          }}</router-link>
        </li>
      </ul>
      <div class="wei-sns">
        <div class="wei-icon-outer">
          <a target="_blank" href="http://weiupward.com/" style="color: white"
            ><i class="fas fa-blog sns-icon"></i>
          </a>
        </div>
        <div class="wei-icon-outer">
          <a
            target="_blank"
            href="https://github.com/weimowang/resume"
            style="color: white"
            ><i class="fab fa-github sns-icon"></i
          ></a>
        </div>
        <div class="wei-icon-outer">
          <a
            target="_blank"
            href="https://codepen.io/weiupward/pens/public"
            style="color: white"
            ><i class="fab fa-codepen sns-icon"></i
          ></a>
        </div>
        <div class="wei-icon-outer">
          <a href="mailto:wamowang@hotail.com" style="color: white"
            ><i class="far fa-envelope sns-icon"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function () {
    return {
      menuData: [
        {
          id: 0,
          name: "Aboutme",
          anchor: "#Aboutme",
          txt: "關於我",
        },
        {
          id: 1,
          name: "Skillpage",
          anchor: "#Skillpage",
          txt: "技術能力",
        },
        {
          id: 2,
          name: "Career",
          anchor: "#Career",
          txt: "職涯經歷",
        },
        {
          id: 3,
          name: "Projectpage",
          anchor: "#Projectpage",
          txt: "作品",
        },
      ],
    };
  },
  methods: {
    //click yhe hambuger menu
    toggle: function () {
      return;
    },
  },
};
</script>
<style scoped>
@import "../../css/menu.css";
</style>