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
      @headerClicked="scroll2Loc($event)"
    ></headNavBar>
    <!-- 关于我们 9425-->
    <div class="content-wrapper">
      <div class="detail-wrapper">
        <div>
          <img
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u21.jpg"
            alt=""
          />
        </div>
        <div style="
            display: flex;
            justify-content: space-around;
            flex-direction: column;
          ">
          <h4 style="color: rgb(187, 70, 70)">关于我们</h4>
          <div>
            <h2
              v-html="title"
              style="font-weight: 500"
            ></h2>
          </div>
          <div>
            <p v-html="desc"></p>
          </div>
          <div
            class="conetnt-btn"
            @click="scroll2Loc(7)"
          >联系我们</div>
        </div>
      </div>
    </div>
    <!-- 项目介绍 9441-->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>项目介绍</h2>
        <p>
          每一次出游，都是一种体验；每一次体验，都是一种学习；每一次学习，都是一种成长
        </p>
      </div>
      <div class="detail-wrapper">
        <div
          v-for="item in projectsArr.slice(0, 3)"
          :key="item.id"
          class="project-wrapper"
        >
          <el-image
            :src="item.photo.img || '404'"
            style="width: 22em; height: 16em"
          ></el-image>
          <div>
            <h3 v-html="item.name"></h3>
          </div>
          <div>
            <h4>适合 18+ 周岁, 游学行程 3 个月</h4>
          </div>
          <div>
            <p v-html="item.description"></p>
          </div>
          <div>
            <p>
              目的地: <span style="color: #888">{{ item.photo.area[0]+' '+item.photo.area[1] }}</span>
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
            <div
              class="conetnt-btn"
              style="background-color: rgb(255, 78, 76)"
              @click="signUp(item)"
            >
              我要预约
            </div>
          </div>
        </div>
      </div>
      <h4
        style="text-align:center;padding:15px 0"
        @click="dialogVisible = true"
      >查看更多</h4>
    </div>
    <!-- 精彩瞬间 9432-->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>精彩瞬间</h2>
        <p>幽默、分享、交际、协作、沟通</p>
      </div>
      <div class="detail-wrapper">
        <!-- <el-row :gutter="1">
          <el-col
            :span="5"
            v-for="item in projects9432.filter(e=>{return e.status='正常'})"
            :key="item.id"
          >
            <el-image
              :src="item.photo"
              alt="加载失败"
              style="width:100%;height:100%"
            ></el-image>
            {{ item }}
          </el-col>
        </el-row> -->
        <div
          v-for="item in projects9432"
          :key="item.id"
          class="detail-pic-wall"
        >
          <el-image
            :src="item.photo"
            alt="加载失败"
            style="width:100%;height:100%"
          ></el-image>
        </div>
        <div>

        </div>
      </div>
    </div>
    <!-- 常见问题 9440 -->
    <div class="content-wrapper">
      <div class="content-title">
        <h2>常见问题</h2>
        <p>Question &amp; Answer</p>
      </div>
      <div
        class="QA-wrapper"
        v-for="item in projects9440.filter((e) => {
          return e.status == '正常'
        })"
        :key="item.id"
      >
        <p>Q. {{ item.name }}</p>
        <p>{{ item.description }}</p>
        <br>
        <br>
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
      <div
        class="content-title"
        style="color: #fff"
      >
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
          <el-form
            label-position="top"
            label-width="6em"
            :model="form"
          >
            <el-form-item>
              <el-input
                v-model="form.realname"
                placeholder="您的姓名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="form.telephone"
                placeholder="您的联系方式"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 12 }"
                placeholder="您想和我们说些什么"
                v-model="comment"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <div
            class="conetnt-btn"
            style="background-color: rgb(255, 78, 76)"
            @click="submit"
          >
            提交
          </div>
        </div>
        <div id="container">
          <!-- <img
            src="http://39.106.16.56/huangyy/youxue/images/%E9%A6%96%E9%A1%B5/u125.png"
            alt=""
          /> -->
        </div>
      </div>
    </div>
    <cusFooter @linkClickded="scroll2Loc($event)"></cusFooter>
    <!-- 项目详情对应的 模态框 -->

    <el-dialog
      :visible.sync="dialogVisible"
      width="90%"
      title="所有可报名项目"
    >
      <el-row :gutter="1">
        <el-col
          :span="7"
          v-for="item in projectsArr"
          :key="item.id"
          class="project-wrapper"
        >
          <el-image
            :src="item.photo.img || '404'"
            style="width: 22em; height: 16em"
          ></el-image>
          <div>
            <h3 v-html="item.name"></h3>
          </div>
          <div>
            <h4>适合 18+ 周岁, 游学行程 3 个月</h4>
          </div>
          <div>
            <p v-html="item.description"></p>
          </div>
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
            <div
              class="conetnt-btn"
              style="background-color: rgb(255, 78, 76)"
              @click="signUp(item)"
            >
              我要预约
            </div>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
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
  data() {
    return {
      form: {
        name: "",
        telephone: "",
      },
      comment: "",
      isMoving: false,
      backPosition: 0,
      interval: null,
      dialogVisible: false,
      map: {},
    };
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
    },
  },
  // watch: {
  //   map: {
  //     deep: true,
  //     handler() {
  //       let point = new BMapGL.Point(120.89476588440564, 31.44573203521327); // 创建点坐标
  //       this.map.centerAndZoom(point, 18);
  //     },
  //   },
  // },
  components: {
    headNavBar,
    cusFooter,
  },
  methods: {
    ...mapActions("projectManage", ["queryProject", "updateComment"]),
    // 点击了解更多按钮的事件
    showMore(i) {
      this.$router.push({ name: "ShowMore", params: { project: i } });
    },
    // 点击我要报名按钮的事件
    signUp(i) {
      this.$router.push({ name: "SignUp", params: { project: i } });
    },
    // 处理联系我们按钮事件
    submit() {
      this.updateComment({ cus: this.form, content: this.comment });
    },
    // 处理滚动到哪里的事件
    scroll2Loc(loc) {
      // 判断loc的名称
      this.backPosition = loc * 750 - 210;
      if (this.isMoving) return;
      // 获取页面距离顶部的距离
      const start = window.pageYOffset;
      let i = 0;
      this.isMoving = true;
      // 开始移动 每 16.4 ms 执行一次滚动
      this.interval = setInterval(() => {
        // 二次缓入函数，参数分别是 当前时间，开始位置，总移动距离，动画时长
        // 这里开始位置 从当前位置开始，在 2 秒 内移动到 顶部 时对应的 y 轴坐标
        const next = Math.floor(
          this.easeInOutQuad(10 * i, start, this.backPosition - start, 200)
        );
        // 如果当前 y 轴 小于 要返回到的位置
        if (next == this.backPosition) {
          // 直接返回到目的地 并 停止计时
          window.scrollTo(0, this.backPosition);
          clearInterval(this.interval);
          this.isMoving = false;
        } else {
          // 否则还没有到 目的地，向下一步滚动
          window.scrollTo(0, next);
        }
        i++;
      }, 16.4);
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    // 随机定位、旋转精彩瞬间照片墙里的内容
    putPic2Wall(picArr) {
      picArr.forEach((element) => {
        element.style.top = 10 + (Math.random() * 100) / 2.5 + "%";
        element.style.left = 30 + (Math.random() * 100) / 2.5 + "%";
        element.style.boxShadow = "0 0 10px 0";
      });
    },
  },
  created() {
    this.queryProject(9441);
    this.queryProject(9425);
    this.queryProject(9414);
    this.queryProject(9440);
    this.queryProject(9432);
    this.queryProject(9411);
  },
  mounted() {
    this.map = new BMapGL.Map("container"); // 创建地图实例120.894277, 31.446341
    let point = new BMapGL.Point(120.89476588440564, 31.44573203521327); // 创建点坐标
    this.map.centerAndZoom(point, 18);
    //定义一个控件类
    function backController() {
      this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
      this.defaultOffset = new BMapGL.Size(20, 20);
    }
    //通过JavaScript的prototype属性继承于BMap.Control
    backController.prototype = new BMapGL.Control();

    //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
    //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    backController.prototype.initialize = function (map) {
      //创建一个dom元素
      var div = document.createElement("div");
      //添加文字说明
      div.appendChild(document.createTextNode("回到初始位置"));
      // 设置样式
      div.style.cursor = "pointer";
      div.style.padding = "7px 10px";
      div.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
      div.style.borderRadius = "5px";
      div.style.backgroundColor = "white";
      // 绑定事件,点击一次放大两级
      div.onclick = function (e) {
        map.centerAndZoom(point, 18);
      };
      // 添加DOM元素到地图中
      map.getContainer().appendChild(div);
      // 将DOM元素返回
      return div;
    };
    //创建控件元素
    var myZoomCtrl = new backController();
    //添加到地图中
    this.map.addControl(myZoomCtrl);
    this.map.enableScrollWheelZoom(true);
    let picArr = [...document.getElementsByClassName("detail-pic-wall")];
    this.putPic2Wall(picArr);
  },
};
</script>
<style>
.content-wrapper {
  width: 70%;
  height: 750px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 5em 0;
  box-sizing: border-box;
}
.content-wrapper:nth-child(odd) {
  background-color: #eee;
}
.detail-wrapper {
  display: flex;
  justify-content: space-around;
  margin-top: 3em;
  position: relative;
  width: 100%;
  height: calc(100% - 6rem);
}
.detail-pic-wall {
  position: absolute;
  display: inline-block;
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
.conetnt-btn:hover {
  opacity: 0.9;
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
  height: 21em;
  width: 10em;
  border-radius: 1em;
  overflow: hidden;
  padding: 1em 1.5em;
  text-align: center;
  background-color: #eee;
  transition: all 0.4s;
}
.student-wrapper:hover {
  box-shadow: #ccc 0px 7px 15px 5px;
  transform: translateY(-5px);
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
.form-wrapper {
  width: 37em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.el-input {
  width: 40em;
}
#container {
  width: 46%;
}
</style>
