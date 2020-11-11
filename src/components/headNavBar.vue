<template>
  <div style="background-color: #aaa">
    <div class="header">
      <div>学行天下游学平台</div>
      <!-- 头部右边列表 -->
      <div id="header-contentRight">
        <ul>
          <!-- 遍历 options 中的内容，显示在右边 -->
          <li v-for="item in options" :key="item" style="padding: 0 0.4em">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <el-carousel
      :height="customerHeight"
      :interval="5000"
      v-if="imgList.length > 1"
    >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-image
          :src="item.photo"
          fit="contain"
          :style="'width:' + customerWidth + ';height:' + customerHeight"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-image
      v-if="imgList.length == 1"
      :src="imgList[0].photo"
      fit="contain"
      :style="'width:' + customerWidth + ';height:' + customerHeight +';margin: 0 auto'"
    ></el-image>
  </div>
</template>
<script>
import router from "@/router/index.js";
import { mapState } from "vuex";

export default {
  name: "headNavBar",
  props: {
    // 右边列表数组
    options: Array,
    // 轮播图列表数组
    imgList: Array,
    height: String,
    width: String,
  },
  computed: {
    customerHeight() {
      return this.height ? this.height : "37em";
    },
    customerWidth() {
      return this.width ? this.width : "100%";
    },
  },
  data() {
    return {
      size: "medium",
      isShown: false,
      searchInfo: "",
      placeholder: "",
    };
  },
  methods: {
    showSearchBar() {
      if (!this.isShown) {
        this.isShown = !this.isShown;
        switch (this.title) {
          case "用户":
            alert("满共就没几条信息你隔着搜啥呢");
            this.isShown = !this.isShown;
            break;
          case "主页":
            this.placeholder = "输入完整城市名";
            break;
          case "备忘录":
            alert("满共就没几条信息你隔着搜啥呢");
            this.isShown = false;
            break;
          case "日历":
            this.placeholder = "输入日期";
            break;
        }
      } else {
        if (this.searchInfo) {
          this.$emit("search-clicked", this.searchInfo);
        }
        this.isShown = !this.isShown;
      }
    },
  },
};
</script>
<style>
.header {
  background-color: #4d4d4d93;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  padding-left: 20px;
  font-size: 15px;
  color: #eee;
  font-weight: bold;
  filter: blur(0.3);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 20;
}
#header-contentRight > ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header-contentRight > ul > li {
  list-style-type: none;
  transition: all 0.2s;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: center;
}
#header-contentRight > ul > li:hover {
  background-color: #aaaaaa5d;
}
#header-contentRight > ul > li > i {
  font-weight: 100;
  width: 50px;
}
</style>