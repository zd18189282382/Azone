<template>
    <div>
      <div class="marquee">
        <img src="../../../static/img/index_headerline.png" alt="">     
        <div class="marquee_box">               
          <ul class="marquee_list" :class="{marquee_top:animate}">                       
            <li v-for="(item,index) in marqueeList">
                <span class="hot">{{item.type}}</span>
                <span class="inCon">{{item.name}}</span>
            </li>       
          </ul>
                 
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AzIndexHeadline",
      data() {
        return {
          animate: false,
          marqueeList: [
            {
              type:'热议',
              name: 'OPPO K1惊喜来袭，将2018进行到底'
            },
            {
              type:'热议',
              name: '选葡萄酒有诀窍，“3个P”原则是关键'
            },
            {
              type:'热议',
              name: '不同材质的笔袋、笔盒，你知道多少？'
            },
            {
              type:'热议',
              name: '诱人黑科技华为Mate20，世界顶级拍照'
            },
          ],
        }
      },
      created() {
        setInterval(this.showMarquee, 3000)
      },
      methods: {
        showMarquee: function () {
          this.animate = true;
          setTimeout(() => {
            this.marqueeList.push(this.marqueeList[0]);
            this.marqueeList.shift();
            this.animate = false;
          }, 1500)
        },
      }
    }
</script>

<style scoped>
  .marquee {
    color: #3A3A3A;
    display: flex;
    width: 100%;
    height: .55rem;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    font-size: .14rem;
    position:relative;
  }
  .marquee img{
    width:.35rem;
    height:.35rem;
    position:relative;
    top: 7px;
    left: 14px;
  }
  .marquee_box {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    height: .55rem;
    padding-left:.1rem;
  }

  .marquee_list {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding-left:.2rem;
  }

  .marquee_top {
    transition: all 2s;
    margin-top: -.55rem;
  }

  .marquee_list li {
    width:100%;
    height: .55rem;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
  }

  .marquee_list li span {
    display: block;
  }

  .marquee_list li .inCon {
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:.13rem;
    color:#000;
    line-height: .55rem;
  }
  .marquee_list li .hot {
    border: 1px solid #f60;
    border-radius: 4px;
    font-size: .13rem;
    color: #F60;
    width:.4rem;
    height: .22rem;
    padding:.05rem;
    text-align: center;
    line-height: .1rem;
    margin-top:.15rem;
  }

</style>
