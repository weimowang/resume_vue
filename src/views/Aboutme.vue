<template>
  <div id="Aboutme" class="Aboutme">
    <div class="zoom wrap_left">
      <div class="img_me"></div>
    </div>
    <div class="wrap_right">
      <div class="about-header">
        <h1>王維摩</h1>
        <p>Frontend developer</p>
      </div>
      <div class="about-content">
        <p>
          畢業於大同大學資訊經營系，興趣是看電影看書和到處走走吃吃，偶爾喜歡逛逛展覽。大學特地選修許多程式語言相關的課程包含手機程式設計、網頁設計、ios等等課程。
          之前擔任過兩年半的APP開發工程師，主要是javascript + html +
          angularjs來完成跨平台的開發，也是這樣的契機開始讓我對前端相關的開發有興趣，
          之後擔任過一年的前端網頁工程師，目前住在文山區，自己有在寫Blog在下方或左邊有連結，歡迎大家能一起討論也能透過旁邊信箱聯絡我。
        </p>
      </div>

      <div class="wei-sns">
        <div v-for="(item, key, index) in icon_datas" :key="index">
          <div class="icon_o_r">
            <a target="_blank" :href="item.link"></a>
          </div>
        </div>
        <div class="wei-icon-outer-right">
          <a target="_blank" href="http://weiupward.com/" style="color: white"
            ><i class="fas fa-blog sns-icon"></i>
          </a>
        </div>
        <div class="wei-icon-outer-right">
          <a
            target="_blank"
            href="https://github.com/weimowang/resume"
            style="color: white"
            ><i class="fab fa-github sns-icon"></i
          ></a>
        </div>
        <div class="wei-icon-outer-right">
          <a
            target="_blank"
            href="https://codepen.io/weiupward/pens/public"
            style="color: white"
            ><i class="fab fa-codepen sns-icon"></i
          ></a>
        </div>
        <div class="wei-icon-outer-right">
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
  data: function () {
    return {
      icon_datas: [
        { name: "", link: "" },
        { name: "", link: "" },
        { name: "", link: "" },
      ],
    };
  },
};
</script>
<style scoped>
@import "../css/aboutme.css";
</style>