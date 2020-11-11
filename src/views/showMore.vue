<template>
  <div class="show-page-wrapper">
    <headNavBar
      :options="[]"
      :imgList="[
        {
          photo:
            'http://39.106.16.56/huangyy/youxue/images/%E9%A1%B9%E7%9B%AE%E8%AF%A6%E6%83%85/u179.jpg',
        },
      ]"
      height="21em"
    ></headNavBar>
    <div class="content-wrapper" style="background-color: #fff">
      <el-page-header @back="$router.go(-1)" content="详情页面">
      </el-page-header>
      <div class="detail-wrapper">
        <div>
          <el-image
            :src="project.photo.img"
            style="width: 32em; height: 24em"
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-around;
            flex-direction: column;
          "
        >
          <h2>{{ project.name }}</h2>
          <h3 style="color: rgb(187, 70, 70)">
            {{ project.photo ? project.photo.area : "暂无信息" }}
          </h3>
          <div><h3 style="font-weight: 200">详情请参考下方项目介绍</h3></div>
          <div>
            <p>
              项目起止时间: {{ formatTime(project.price) }} 至
              {{ formatTime(project.price + 1000 * 60 * 60 * 24 * 90) }}. 持续约
              3 个月
            </p>
            <br />
            <p>项目状态: {{ project.status }}</p>
          </div>
          <div
            class="conetnt-btn"
            style="width: 17em; border-radius: 5em"
            @click="signUp"
          >
            我要报名
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-title">
        <h2>项目介绍</h2>
        <p>
          每一次出游，都是一种体验；每一次体验，都是一种学习；每一次学习，都是一种成长
        </p>
      </div>
      <div>
        <p v-html="project.description" style="padding:1em 4em"></p>
      </div>
    </div>
    <cusFooter></cusFooter>
  </div>
</template>

<script>
// 了解更多
import headNavBar from "@/components/headNavBar.vue";
import cusFooter from "@/components/footer.vue";
import moment from "moment";
export default {
  components: {
    headNavBar,cusFooter
  },
  computed: {
    project() {
      return (
        this.$route.params.project || {
          photo: {},
          name: "loaading",
          description: "loading",
        }
      );
    },
  },
  methods: {
    formatTime(time) {
      return moment(time).format("YYYY-MM-DD");
    },
    signUp() {
      this.$router.push({ name: "SignUp", params: { project: this.project } });
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to, from);
    next();
  },
};
</script>

<style scoped>
.show-page-wrapper {
  min-width: 1024px;
}
</style>