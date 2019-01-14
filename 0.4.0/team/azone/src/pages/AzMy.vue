<template>
<div id="app">
    <div class="box">
    <az-my-header></az-my-header>
    <az-my-nav :datas="datas"></az-my-nav>
    </div>
    <az-my-footer></az-my-footer>
</div>
</template>

<script>
import AzMyHeader from "../components/AzMy/AzMyHeader";
import AzMyNav from "../components/AzMy/AzMyNav";
import AzMyFooter from "../components/AzMy/AzMyFooter";
export default {
name:"AzRegister",
components: {AzMyHeader,AzMyNav,AzMyFooter},
data(){
    return {
        num:0,
        datas:[
            {
                "box":[
                    {
                    "img":"../../../static/img/my2.jpg",
                    "imgs":"../../../static/img/my7.png",
                    "aimg":"../../../static/img/my1.jpg",
                    "real":"去实名认证",
                    "phone":"153******03",
                    "code":"../../../static/img/code.png",
                    "equity":"升级权益",
                    "arrow":"../../../static/img/my8.png",
                    "admission":"../../../static/img/my9.png",
                    "spani":"免费试用"
                    }
                ],
                "content":[
                    {
                        "contents":[
                            {
                                "b":"0",
                                "spans":"优惠券",
                                "ps":""
                            },
                            {
                                "b":"0",
                                "spans":"领云钻",
                                "ps":""
                            },
                            {
                                "b":"0",
                                "spans":"任性付",
                                "ps":"未开通"
                            },
                            {
                                "b":"+0.00",
                                "spans":"零钱宝",
                                "ps":"立即转入"
                            }
                                
                        ],
                        "imgf":"../../../static/img/border.png",
                        "imga":"../../../static/img/my10.png",
                        "spana":"我的钱包",
                        "pa":""
                        }
                    ],
                "boxs":[
                    {
                        "orders":"我的订单",
                        "sees":"查看全部订单 >",
                        
                    }
                ]
            }
        ]
    }
}
}
</script>

<style>
body{
    position: relative;
}
.box{
  width:100%;
  flex:1;
  overflow-y:auto;
  overflow-x: hidden;
}
#app {
    width: 3.75rem;
    overflow-x: hidden;
  }
</style>
