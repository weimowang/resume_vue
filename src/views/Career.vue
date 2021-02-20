<template>
  <div id="Career">
    <div class="wei_header">
      <h1>職涯經歷</h1>
    </div>
    <div class="works_wrap" v-for="(item, index) in carreers" :key="index">
      <div class="work_box">
        <span class="date"> {{ item.date }} </span>
        <span class="title">{{ item.name }}</span>
        <span> 公司：{{ item.compony }} </span>
        <span> 工作內容： {{ item.content }}</span>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      carreers: [
        {
          name: "sap工程師",
          compony: "仁寶電腦",
          date: "2015/12 - 2016/8",
          content:
            "主要負責sap開發包含ERP的一些系統，提供組織表單查詢和bom表等的相關處理。",
        },
        {
          name: "App/前端研發工程師",
          compony: "詮力科技",
          date: "2016/12 - 2019/3",
          content:
            "主要為App開發，包含IOS和Android還有UWPwindows平台的開發，主要透過javascript+angularjs+cordova來達成跨平台的開發，包含簽到選課系統和公司主要的NAS管理開發。",
        },
        {
          name: "前端工程師",
          compony: "英福達",
          date: "2019/4 - 2019/9",
          content:
            "主要負責前端網頁開發，內容為線上的公文系統開發包含簽章簽核、郵務、公文流程，負責像是政府機關和學校與公司行號。",
        },
        {
          name: "網頁開發工程師",
          compony: "富利餐飲集團",
          date: "2020/2 - Now",
          content:
            "主要負責前端網頁與後端開發，前端部分為js+jquery+css而後端則是採用PHP做為開發，其中串接過Apple sigin、Line pay 、google serveice API(GA,map)等等，並與API做介接處理後端資料等等，只要為購物官方網站",
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../css/carreer.css";
</style>