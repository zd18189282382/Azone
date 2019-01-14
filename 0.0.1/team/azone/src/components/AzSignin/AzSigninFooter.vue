<template>
    <footer>
        <div class="login_others">
                <div class="others">
                    <div class="line"></div>
                    <span>其他方式登录</span>
                    <div class="line"></div>
                </div>
                <div class="qq">
                    <a href="#">
                        <i class="qq_ico"></i>
                        <span>QQ</span>
                    </a>
                    <a href="#">
                        <i class="yi_ico"></i>
                        <span>易付宝</span>
                    </a>
                </div>
            </div>
</footer>
</template>

<script>
export default {
    name:"AzSigninFooter"
}
</script>

<style>
footer{
    width: 3.75rem;
    height: .835rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.login_others{
  margin-bottom: .1rem;
  width: 100%;
  padding: 0 .14rem;
}
.others{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: .375rem;
}
.line{
  -webkit-box-flex: 1;
  flex: 1;
  height: 1px;
  background: #ddd;
}
.others span{
  display: block;
  height: .18rem;
  color: #999;
  padding: 0 .15rem;
  font-size: .12rem;
}
.qq{
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}
.qq a{
  display: block;
  width: 25%;
}
.qq a .qq_ico{
  display: block;
  width: .25rem;
  height: .25rem;
  margin: 0 auto;
  background: url(../../../static/img/qq.png) no-repeat;
  background-size: contain;
}
.qq a .yi_ico{
  display: block;
  width: .25rem;
  height: .25rem;
  margin: 0 auto;
  background: url(../../../static/img/yi.png) no-repeat;
  background-size: contain;
}
.qq a span{
  display: block;
  width: 100%;
  text-align: center;
  margin-top: .05rem;
  font-size: .12rem;
}
</style>