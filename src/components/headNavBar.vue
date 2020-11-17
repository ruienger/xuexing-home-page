<template>
  <div style="background-color: #aaa">
    <div class="header">
      <div>学行天下游学平台</div>
      <!-- 头部右边列表 -->
      <div id="header-contentRight">
        <ul>
          <!-- 遍历 options 中的内容，显示在右边 -->
          <li v-for="item in options" :key="item" style="padding: 0 0.4em" @click="handleClick(item)">
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
          fit="cover"
          :style="'width:' + customerWidth + ';height:' + customerHeight"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-image
      v-if="imgList.length == 1"
      :src="imgList[0].photo"
      fit="cover"
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
      return this.height ? this.height : "580px";
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
    handleClick(item){
      this.$emit('headerClicked',this.options.indexOf(item))
    }
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