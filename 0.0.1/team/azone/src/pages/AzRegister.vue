<template>
<div id="app">
    <az-register-header></az-register-header>
    <az-register-nav></az-register-nav>
</div>
</template>

<script>
import AzRegisterHeader from "../components/AzRegister/AzRegisterHeader";
import AzRegisterNav from "../components/AzRegister/AzRegisterNav";
export default {
    name:"AzRegister",
    components: {AzRegisterHeader,AzRegisterNav}
}
</script>

<style>
#app {
    width: 3.75rem;
    overflow-x: hidden;
  }
</style>
