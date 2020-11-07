<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <headNavBar :options="[1,2,3,4,5]" :imgList="projects9441"></headNavBar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import headNavBar from '@/components/headNavBar.vue'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapState('projectManage',['projects9441'])
  },
  components: {
    HelloWorld,headNavBar
  },
  methods:{
    ...mapActions('projectManage',['queryProject'])
  },
  created(){
    this.queryProject(9441)
  }
}
</script>
