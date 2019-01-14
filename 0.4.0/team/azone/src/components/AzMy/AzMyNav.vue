<template>
<nav>
    <az-banner :datas="datas" :num="num"></az-banner>
    <az-money :datas="datas" :num="num"></az-money>
    <az-order :datas="datas" :num="num"></az-order>
    <az-server></az-server>
    <az-like></az-like>
</nav>
</template>

<script>
import $ from "jquery"
import AzBanner from "./AzBanner";
import AzMoney from "./AzMoney";
import AzOrder from "./AzOrder";
import AzServer from "./AzServer";
import AzLike from "./AzLike";
export default {
    name:"AzMyNav",
    components:{AzBanner,AzMoney,AzOrder,AzServer,AzLike},
    props:["datas"],
     data(){
        return{
            num:0
        }
    }
}
</script>

<style>
@import "../../assets/css/iconfont.css";
nav{
    width: 100%;
    padding-bottom: .6rem;
}
</style>
