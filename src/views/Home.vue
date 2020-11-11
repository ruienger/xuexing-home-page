<template>
  <div class="home">
    <headNavBar
      :options="[
        '首页',
        '关于我们',
        '项目介绍',
        '精彩瞬间',
        '常见问题',
        '学生风采',
        '游学流程',
        '联系我们',
      ]"
      :imgList="imgList"
    ></headNavBar>
    <!-- 关于我们 -->
    <div class="content-wrapper">
      <div class="detail-wrapper">
        <div>
          <img
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u21.jpg"
            alt=""
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-around;
            flex-direction: column;
          "
        >
          <h5 style="color: rgb(187, 70, 70)">关于我们</h5>
          <div><h2 v-html="title" style="font-weight: 500"></h2></div>
          <div><p v-html="desc"></p></div>
          <div class="conetnt-btn">联系我们</div>
        </div>
      </div>
    </div>
    <!-- 项目介绍 -->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>项目介绍</h2>
        <p>
          每一次出游，都是一种体验；每一次体验，都是一种学习；每一次学习，都是一种成长
        </p>
      </div>
      <div class="detail-wrapper">
        <div v-for="item in projectsArr" :key="item.id" class="project-wrapper">
          <el-image
            :src="item.photo.img || '404'"
            style="width: 22em; height: 16em"
          ></el-image>
          <div><h3 v-html="item.name"></h3></div>
          <div><h4>适合 18+ 周岁, 游学行程 3 个月</h4></div>
          <div><p v-html="item.description"></p></div>
          <div>
            <p>
              目的地: <span style="color: #888">{{ item.photo.area }}</span>
            </p>
          </div>
          <div style="display: flex">
            <div
              class="conetnt-btn"
              style="background-color: rgb(33, 126, 163); margin-right: 1em"
              @click="showMore(item)"
            >
              了解更多
            </div>
            <div class="conetnt-btn" style="background-color: rgb(255, 78, 76)" @click="signUp(item)">
              我要预约
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 精彩瞬间 -->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>精彩瞬间</h2>
        <p>幽默、分享、交际、协作、沟通</p>
      </div>
      <div class="detail-wrapper"></div>
    </div>
    <!-- 常见问题 9440 -->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>常见问题</h2>
        <p>Question &amp; Answer</p>
      </div>
      <div class="QA-wrapper" v-for="item in projects9440" :key="item.id">
        <p>Q. {{ item.name }}</p>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <!-- 学生风采 9414-->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>学生风采</h2>
        <p>积极乐观、意志磨练、自我激励、自我认知、情绪管理</p>
      </div>
      <div class="detail-wrapper">
        <div
          class="student-wrapper"
          v-for="item in projects9414"
          :key="item.id"
        >
          <el-image
            :src="item.photo"
            alt=""
            class="circled-img"
            style="margin: 0 auto"
          />
          <div>
            <!-- {{ item }} -->
            <h3>{{ item.name }}</h3>
            <h5 style="color: rgb(255, 78, 76)">就业明星</h5>
            <div style="margin-top: 2em">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 游学流程 -->
    <div
      class="content-wrapper"
      style="
        background-image: url('http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u103.png');
      "
    >
      <div class="content-title" style="color: #fff">
        <h2>游学流程</h2>
        <p style="color: #fff">
          艺术陶冶、人文积累、审美培训、兴趣开发、思维锤炼
        </p>
      </div>
      <div class="detail-wrapper">
        <div class="flow-wrapper">
          <el-image
            style="width: 160px; height: 254px"
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u113.png"
          ></el-image>
        </div>
        <div style="background-color: #fff; padding-left: 1.3em">
          <el-image
            style="width: 160px; height: 254px"
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u114.png"
          ></el-image>
        </div>
        <div style="background-color: #fff; padding-left: 1.3em">
          <el-image
            style="width: 160px; height: 254px"
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u115.png"
          ></el-image>
        </div>
        <div style="background-color: #fff; padding-left: 1.3em">
          <el-image
            style="width: 160px; height: 254px"
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u116.png"
          ></el-image>
        </div>
        <div style="background-color: #fff; padding-left: 1.3em">
          <el-image
            style="width: 160px; height: 254px"
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u117.png"
          ></el-image>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>联系我们</h2>
        <p>如有相关事宜，请按以下方式给我们留言:</p>
      </div>
      <div class="detail-wrapper">
        <div class="form-wrapper">
          <el-form label-position="top" label-width="6em" :model="form">
            <el-form-item>
              <el-input v-model="form.realname" placeholder="您的姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.telephone" placeholder="您的联系方式"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 12}"
                placeholder="您想和我们说些什么"
                v-model="comment">
              </el-input>
            </el-form-item>
          </el-form>
          <div class="conetnt-btn" style="background-color: rgb(255, 78, 76)" @click="submit">
              提交
          </div>
        </div>
        <div>
          <img
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u125.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <cusFooter></cusFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import headNavBar from "@/components/headNavBar.vue";
import cusFooter from "@/components/footer.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "Home",
  data(){
    return {
      form: {
        name: '',telephone: ''
      },
      comment: ''
    }
  },
  computed: {
    ...mapState("projectManage", [
      "projects9441",
      "projects9425",
      "projects9414",
      "projects9440",
      "projects9432",
      "projects9411",
    ]),
    // 头部导航栏的图片列表
    imgList() {
      return this.projects9441.filter((ele) => {
        return ele.status == "已完成";
      });
    },
    // 关于我们的描述信息
    desc() {
      return this.projects9425[0] ? this.projects9425[0].description : "none";
    },
    // 关于我们的标题信息
    title() {
      return this.projects9425[0] ? this.projects9425[0].name : "none";
    },
    // 项目部分的项目数组
    projectsArr() {
      return this.projects9411.filter((ele) => {
        return ele.status == "正常";
      });
    }
  },
  components: {
    headNavBar,cusFooter
  },
  methods: {
    ...mapActions("projectManage", ["queryProject",'updateComment']),
    // 点击了解更多按钮的事件
    showMore(i){
      this.$router.push({ name: 'ShowMore',  params:{ project:i } })
    },
    // 点击我要报名按钮的事件
    signUp(i){
      this.$router.push({ name: 'SignUp',  params:{ project:i } })
    },
    // 处理联系我们按钮事件
    submit(){
      this.updateComment({ cus:this.form, content: this.comment })
    }
  },
  created() {
    this.queryProject(9441);
    this.queryProject(9425);
    this.queryProject(9414);
    this.queryProject(9440);
    this.queryProject(9432);
    this.queryProject(9411);
  },
};
</script>
<style>
.content-wrapper {
  width: 70%;
  min-width: 1200px;
  margin: 0 auto;
  padding: 5em 0;
}
.content-wrapper:nth-child(odd) {
  background-color: #eee;
}
.detail-wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 3em;
}
.content-title {
  text-align: center;
  color: #222;
}
.content-title > p {
  color: #999;
  padding: 1em 0;
}
.conetnt-btn {
  width: 8em;
  height: 2.7em;
  line-height: 2.7em;
  text-align: center;
  background-color: #222;
  color: #fff;
  border-radius: 5px;
}
.conetnt-btn:hover{
  opacity: .9;
  cursor: pointer;
}
.QA-wrapper {
  width: 80%;
  min-width: 700px;
  margin: 0 auto;
  font-size: 0.9em;
}
.QA-wrapper > p {
  padding: 0.5em 0;
}
.QA-wrapper > p:first-child {
  font-weight: bold;
}
.student-wrapper {
  height: 15em;
  width: 10em;
  border-radius: 1em;
  overflow: hidden;
  padding: 1em 1.5em;
  text-align: center;
}
.circled-img {
  width: 8em;
  height: 8em;
  border-radius: 4em;
  overflow: hidden;
}
.flow-wrapper {
  background-color: #fff;
  padding: 0.8em 0 0.8em 1.3em;
}
.project-wrapper > div {
  margin-top: 1em;
}
.form-wrapper{
  width: 37em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-input{
  width: 40em;
}
</style>
