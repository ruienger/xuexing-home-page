<template>
  <div>
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
    <div class="content-wrapper">
      <el-page-header
        @back="$router.push({ name: 'Home' })"
        content="项目报名"
      >
      </el-page-header>
      <div
        class="project-wrapper"
        style="display: flex;"
      >
        <el-image
          :src="project.photo.img || ''"
          style="width: 22em; height: 16em"
        ></el-image>
        <div style="padding: 0 2em;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <h2 v-html="project.name"></h2>
          </div>
          <div>
            <h3>适合 18+ 周岁, 游学行程 3 个月</h3>
          </div>
          <div>
            <p v-html="project.description"></p>
          </div>
          <div>
            <p>
              目的地: <span style="color: #888">{{ project.photo.area[0] + " " + project.photo.area[1] }}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 表单内容包括： 用户信息（姓名、联系方式、地区），报名信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :model="customer"
        label-width="80px"
        style="padding: 2em 0"
      >
        <el-form-item
          label="您的姓名"
          prop="name"
        >
          <el-input v-model="customer.realname"></el-input>
        </el-form-item>
        <el-form-item
          label="联系方式"
          prop="telephone"
        >
          <el-input v-model="customer.telephone"></el-input>
        </el-form-item>
        <el-form-item label="现住址">
          <el-col :span="6">
            <el-input v-model="customer.province"></el-input>
          </el-col>
          <el-col
            :span="2"
            style="text-align: center"
          > 省</el-col>
          <el-col :span="6">
            <el-input v-model="customer.city"></el-input>
          </el-col>
          <el-col
            :span="2"
            style="text-align: center"
          > 市</el-col>
          <el-col :span="6">
            <el-input v-model="customer.area"></el-input>
          </el-col>
          <el-col
            :span="2"
            style="text-align: center"
          > 区/县</el-col>
        </el-form-item>
        <el-form-item
          label="详细地址"
          prop="address"
        >
          <el-input v-model="customer.address"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
          >立即报名</el-button>
          <el-button @click="$router.push({ name: 'Home' })">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <cusFooter></cusFooter>
  </div>
</template>

<script>
import cusFooter from "@/components/footer.vue";
import headNavBar from "@/components/headNavBar.vue";
import { mapActions } from "vuex";
// 我要报名
export default {
  components: {
    headNavBar,
    cusFooter,
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
  data() {
    let validateTel = (rule, value, callback) => {
      if (value.match(/[1][3|4|5|6|8|9]\d{8}\d$/)) {
        callback();
      } else {
        callback(new Error("手机号输入不正确"));
      }
    };
    return {
      customer: {
        realname: "茄子",
        telephone: "13455667788",
        province: "江苏",
        city: "苏州",
        area: "昆山",
        address: "祖冲之中路",
      },
      content: "",
      address: {},
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "change" },
          {
            min: 2,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        telephone: [
          { required: true, validator: validateTel, trigger: "change" },
        ],
      },
    };
  },
  methods: {
    ...mapActions("projectManage", ["updateProject"]),
    async onSubmit() {
      this.address.province = this.customer.province;
      this.address.city = this.customer.city;
      this.address.area = this.customer.area;
      this.address.address = this.customer.address;
      this.address.telephone = this.customer.telephone;
      await this.updateProject({
        customer: this.customer,
        project: this.project,
        address: this.address,
        content: this.content,
      });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.sign-up-wrapper {
  width: 72%;
  padding: 1.5em 0.7em;
  box-shadow: 1px solid orchid;
}
.content-wrapper {
  height: auto;
}
</style>