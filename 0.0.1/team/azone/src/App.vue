<template>
  <transition>
      <keep-alive>
          <div id="app">
            <router-view/>
          </div>
      </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'App'
  // created() {
  //   /**
  //    * 确保组件重新渲染之后登录状态置为0
  //    */
  //   localStorage.setItem("islogin", 0)
  //   // this.$store.dispatch({type: 'userlogin', data: ''})
  //   localStorage.setItem("username", "")
  // },
}
</script>

<style lang="stylus" scoped>
  .v-enter
    transform: translateX(-3.75rem);


  .v-enter-to
    transform: translateX(0);


  .v-enter-active
    transition: .5s;

</style>
