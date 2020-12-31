<template>
  <!-- 页脚 -->
    <div class="footer">
      <ul>
        <li>研学天下</li>
        <li>
          <ul>
            <li>LINKS</li>
            <li class="subLi" @click="handleClick(1)">关于我们</li>
            <li class="subLi" @click="handleClick(2)">项目介绍</li>
            <li class="subLi" @click="handleClick(5)">学生风采</li>
            <li class="subLi" @click="handleClick(6)">游学流程</li>
            <li class="subLi" @click="handleClick(7)">联系我们</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>COURSE</li>
            <li class="subLi">青少年英语拓展课程（适合10-13岁）</li>
            <li class="subLi">青少年英语领先课程（适合14-18岁）</li>
            <li class="subLi">成人英语培训</li>
            <li class="subLi">出国留学</li>
            <li class="subLi">企业英语培训</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>CONTACT-INFO</li>
            <li class="subLi" style="color:#eee">手机</li>
            <li class="subLi">178-3571-3022</li>
            <li class="subLi" style="color:#eee">邮箱</li>
            <li class="subLi">1464852103@qq.com</li>
            <li class="subLi" style="color:#eee">地址</li>
            <li class="subLi">苏州市昆山市祖冲之路杰普软件园</li>
          </ul>
        </li>
      </ul>
      <p style="color:#eee;text-align:center;font-size:.2em">Copyright © 2020.Company name All rights reserved - Collect from 候泽空</p>
    </div>
</template>

<script>
export default {
  methods:{
    handleClick(loc){
      this.$emit('linkClickded',loc)
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #222;
  padding: 2em 3em;
}
.footer>ul{
  width: 80%;
  min-width: 1225px;
  margin: 0 auto;
  padding: 5em 0;
  display: flex;
  justify-content: space-around;
}
.footer>ul>li{
  font-size: 1.2em;
  color: #eee;
  font-weight: bold;
}
.footer li{
  list-style-type: none;
  margin-bottom: .5em 0;
}
.subLi{
  font-size: .3em;
  font-weight: 400;
  color: #666;
  padding-top: 3em;
}
.subLi:hover{
  color: #ddd;
}
</style>