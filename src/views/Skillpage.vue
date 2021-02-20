<template>
  <div id="Skillpage">
    <div class="wei_header">
      <h1>技術能力</h1>
    </div>
    <div class="p_wrap" v-for="n in datas.length" :key="n">
      <div v-for="(item, index) in getListdata(n)" :key="index" class="p_box">
        <div class="p_header">{{ item.name }}</div>
        <div class="p_outer">
          <div
            class="p_bar"
            role="progressbar"
            :aria-valuenow="item.value"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="'width:' + item.value + '%'"
          >
            <span style="color: white"> {{ item.value }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      datas: [
        {
          obj: [
            { name: "html", value: 86 },
            { name: "css", value: 82 },
          ],
          id: 1,
        },
        {
          obj: [
            { name: "javascript", value: 88 },
            { name: "jquery", value: 88 },
          ],
          id: 2,
        },
        {
          obj: [
            { name: "angularjs", value: 80 },
            { name: "vue", value: 70 },
          ],
          id: 3,
        },
        {
          obj: [
            { name: "cordova", value: 80 },
            { name: "wordpress", value: 80 },
          ],
          id: 4,
        },
        {
          obj: [
            { name: "php", value: 75 },
            { name: "git", value: 80 },
          ],
          id: 5,
        },
        {
          obj: [
            { name: "android(java)", value: 60 },
            { name: "ios(objectC)", value: 70 },
          ],
          id: 6,
        },
      ],
    };
  },
  methods: {
    getListdata(n) {
      return this.datas[n - 1]["obj"];
    },
  },
};
</script>
<style scoped>
@import "../css/skillpage.css";
</style>