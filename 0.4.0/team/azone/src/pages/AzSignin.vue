<template>
<div id="app">
    <az-signin-header></az-signin-header>
    <az-signin-nav></az-signin-nav>
    <az-signin-footer></az-signin-footer>
</div>
</template>

<script>
import AzSigninHeader from "../components/AzSignin/AzSigninHeader";
import AzSigninNav from "../components/AzSignin/AzSigninNav";
import AzSigninFooter from "../components/AzSignin/AzSigninFooter";
export default {
    name:"AzSignin",
    components: {AzSigninHeader,AzSigninNav,AzSigninFooter}
}
</script>

<style>
#app {
    width: 3.75rem;
    height:6.67rem;
    overflow-x: hidden;
    background-color: #fff;
    position: relative;
  }
</style>
