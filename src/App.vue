<template>
  <div id="app">
    <transition appear name="slide-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
*,
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slide-in-enter-active, .slide-in-leave-active{
  transition: all .4s;
}
.slide-in-enter, .slide-in-leave{
  transform: translateY(10px);
  opacity: 0;
}
</style>
