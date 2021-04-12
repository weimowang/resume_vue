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
        <ul class="noteul">
          <li v-for="(_item, index) in item.detail" :key="index">
            <span v-if="_item.title" class="subtitle">-{{ _item.text }}-</span>

            <span v-else class="subli">&#8901;{{ _item.text }}</span>
          </li>
        </ul>
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
          detail: [
            { text: "程式開發協助公司產生BOM表清單功能" },
            { text: "透過EXCEL BI與POWER BI產生公司KPI報表" },
          ],
        },
        {
          name: "App/前端研發工程師",
          compony: "詮力科技",
          date: "2016/12 - 2019/3",
          content:
            "主要為App開發，包含IOS和Android還有UWPwindows平台的開發，主要透過javascript+angularjs+cordova來達成跨平台的開發，包含簽到選課系統和公司主要的NAS管理開發。",
          detail: [
            { text: "NAS管理-APP雙平台-angularjs(ios / android)", title: true },
            { text: "介接FB / GOOGLE sing in API，讓使用者能多種方式登入APP" },
            { text: "開發上傳功能，讓使用者能夠background備份檔案" },
            {
              text: "補習班管理APP-APP雙平台-angularjs(ios / android)",
              title: true,
            },
            {
              text:
                "結合QRCODE掃描上下課，讓學生直接透過APP上下課，省略發行學生卡片",
            },
            { text: "開發線上預約課程與查詢功能，省去原來的紙本動作" },
            {
              text: "電子帳單管理APP-APP雙平台-angularjs(ios / android)",
              title: true,
            },
            { text: "開發掃描功能，讓使用者能夠掃描紙本帳單，電子化的功能" },
            { text: "每月帳單金額分析，與定時提供能" },
          ],
        },
        {
          name: "前端工程師",
          compony: "英福達",
          date: "2019/4 - 2019/9",
          content:
            "主要負責前端網頁開發，內容為線上的公文系統開發包含簽章簽核、郵務、公文流程，負責像是政府機關和學校與公司行號。",
          detail: [
            { text: "WEB-線上電子簽核", title: true },
            { text: "boostrap切版，並開發電子化簽核介面" },
          ],
        },
        {
          name: "網頁開發工程師",
          compony: "富利餐飲集團",
          date: "2020/2 - Now",
          content:
            "主要負責前端網頁與後端開發，前端部分為js+jquery+css而後端則是採用PHP做為開發，其中串接過Apple sigin、Line pay 、google serveice API(GA,map)等等，並與API做介接處理後端資料等等，只要為購物官方網站",
          detail: [
            { text: "WEB-電子商務平台(PHP / js)", title: true },
            { text: "LINEPAY 金流ＡＰＩ介接，提升公司的付款多元性，與行銷部門合作提高公司業績" },
            { text: "APPLE sigin in 提供使用者更多元的登入" },
            {
              text:
                "GOOGLE MAP API 導航的功能，讓使用者透過網站設定GOOGLE MAP路徑",
            },
            {
              text:
                "手機載具ＡＰＩ與歸戶功能，讓客人能夠綁定手機載具，協助公司Ｅ化",
            },
            { text: "WEB-內部系統開發", title: true },
            { text: "與外部廠商協商內部系統開發，擔任ＰＭ的角色執行專案管理" },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
@import "../css/carreer.css";
</style>