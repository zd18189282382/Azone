<template>
  <div class="box">
    <az-index-header></az-index-header>
    <az-index-banner :AzIndex="AzIndex"></az-index-banner>
    <az-index-classify :AzIndex="AzIndex"></az-index-classify>
    <az-index-headline></az-index-headline>
    <az-index-newbie :AzIndex="AzIndex"></az-index-newbie>
    <azone-index-sale :AzIndex="AzIndex"></azone-index-sale>
    <az-index-everyday :AzIndex="AzIndex"></az-index-everyday>
    <az-index-banner-small :AzIndex="AzIndex"></az-index-banner-small>
    <az-index-brand :AzIndex="AzIndex"></az-index-brand>
    <az-index-furniture :AzIndex="AzIndex"></az-index-furniture>
    <az-index-banner-small2 :AzIndex="AzIndex"></az-index-banner-small2>
    <az-index-life :AzIndex="AzIndex"></az-index-life>
    <az-index-market :AzIndex="AzIndex"></az-index-market>
    <az-index-goodshop :AzIndex="AzIndex"></az-index-goodshop>
    <az-index-youlike :AzIndex="AzIndex"></az-index-youlike>
    <az-index-versions></az-index-versions>
    <az-index-footer></az-index-footer>
    <az-index-return></az-index-return>
  </div>
</template>

<script>
  import AzIndexHeader from "../components/AzIndex/AzIndexHeader";
  import AzIndexBanner from "../components/AzIndex/AzIndexBanner";
  import AzIndexClassify from "../components/AzIndex/AzIndexClassify";
  import AzIndexHeadline from "../components/AzIndex/AzIndexHeadline";
  import AzIndexNewbie from "../components/AzIndex/AzIndexNewbie";
  import AzoneIndexSale from "../components/AzIndex/AzoneIndexSale";
  import AzIndexEveryday from "../components/AzIndex/AzIndexEveryday";
  import AzIndexBannerSmall from "../components/AzIndex/AzIndexBannerSmall";
  import AzIndexMarket from "../components/AzIndex/AzIndexMarket";
  import AzIndexGoodshop from "../components/AzIndex/AzIndexGoodshop";
  import AzIndexYoulike from "../components/AzIndex/AzIndexYoulike";
  import AzIndexFooter from "../components/AzIndex/AzIndexFooter";
  import AzIndexVersions from "../components/AzIndex/AzIndexVersions";
  import AzIndexReturn from "../components/AzIndex/AzIndxReturn";
  import AzIndexBrand from "../components/AzIndex/AzIndexBrand";
  import AzIndexFurniture from "../components/AzIndex/AzIndexFurniture";
  import AzIndexLife from "../components/AzIndex/AzIndexLife";
  import AzIndexFinancial from "../components/AzIndex/AzIndexFinancial";
  import AzIndexBannerSmall2 from "../components/AzIndex/AzIndexBannerSmall2";

  export default {
    name: "AzIndex",
    components: {
      AzIndexBannerSmall2,
      AzIndexLife,
      AzIndexFurniture,
      AzIndexBrand,
      AzIndexReturn,
      AzIndexVersions,
      AzIndexFooter,
      AzIndexYoulike,
      AzIndexGoodshop,
      AzIndexMarket,
      AzIndexBannerSmall,
      AzIndexEveryday,
      AzoneIndexSale, AzIndexNewbie, AzIndexHeadline, AzIndexClassify, AzIndexBanner, AzIndexHeader
    },
    data(){
      return{
        AzIndex:[
          {
            banner:[
              {
                "bannerImg":"../../static/img/index_banner1.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner2.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner3.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner4.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner5.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner6.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner7.jpg"
              },
              {
                "bannerImg":"../../static/img/index_banner8.jpg"
              }
            ],
            classify:[
              {
                "active":"../../static/img/index_tit.gif",
                "feilei":[
                  {
                    "img":"../../static/img/index_classify1.png",
                    "name":"手机"
                  },
                  {
                    "img":"../../static/img/index_classify2.png",
                    "name":"苏宁超市"
                  },
                  {
                    "img":"../../static/img/index_classify3.png",
                    "name":"生活家电"
                  },
                  {
                    "img":"../../static/img/index_classify4.png",
                    "name":"苏宁拼购"
                  },
                  {
                    "img":"../../static/img/index_classify5.gif",
                    "name":"母婴玩具"
                  },
                  {
                    "img":"../../static/img/index_classify6.png",
                    "name":"大聚惠"
                  },
                  {
                    "img":"../../static/img/index_classify7.png",
                    "name":"赚钱"
                  },
                  {
                    "img":"../../static/img/index_classify8.png",
                    "name":"领云钻"
                  },
                  {
                    "img":"../../static/img/index_classify9.png",
                    "name":"苏宁家电"
                  },
                  {
                    "img":"../../static/img/index_classify10.png",
                    "name":"分类"
                  }
                ]
              }
            ],
            newbie:[
              {
                "tit":"新会员专享",
                "pie":"注册即领新人礼包",
                "img":[
                  {
                    "img":"../../static/img/index_newbie1.jpg",
                  },
                  {
                    "img":"../../static/img/index_newbie2.png"
                  }
                ]
              },
              {
                "tit":"大牌助力",
                "pie":"好货任性抢",
                "img":[
                  {
                    "img":"../../static/img/index_newbie3.jpg"
                  }
                ]
              },
              {
                "tit":"今日爆款",
                "pie":"特价包邮",
                "img":[
                  {
                    "img":"../../static/img/index_newbie4.jpg"
                  }
                ]
              },
            ],
            AzIndexData:[
              {
                sale:[
                  {
                    "tit":"掌上抢",
                    "time":"10点场 距离下场：",
                    "pro":[
                      {
                        "img":"../../../static/img/index_sale1.jpg",
                        "p1":"40",
                        "p2":"98"
                      },
                      {
                        "img":"../../../static/img/index_sale2.jpg",
                        "p1":"599",
                        "p2":"1000"
                      },
                      {
                        "img":"../../../static/img/index_sale3.jpg",
                        "p1":"13.80",
                        "p2":"25"
                      }
                    ]
                  },
                  // {
                  //   "title":"苏宁Outlets",
                  //   "sapoint":"大牌特卖",
                  //   "des":"施华洛世奇全场2.6折起",
                  //   "pro":[
                  //     {
                  //       "img":"../../static/img/index_sale4.jpg",
                  //       "p1":"PANDORA",
                  //       "p2":"8.0"
                  //     },
                  //     {
                  //       "img":"../../static/img/index_sale5.jpg",
                  //       "p1":"施华洛世奇",
                  //       "p2":"5.0"
                  //     },
                  //   ]
                  // },
                  // {
                  //   "products":[
                  //     {
                  //       "paihang":"排行榜",
                  //       "type":"今日畅销爆款",
                  //       "img":"../../static/img/index_sale6.png"
                  //     },
                  //     {
                  //       "paihang":"好货",
                  //       "type":"有品质好物",
                  //       "img":"../../static/img/index_sale7.jpg"
                  //     },
                  //   ]
                  // },
                  // {
                  //   "type":"苏宁拼购",
                  //   "info":"玩具车9.9 牛排7.5",
                  //   "img":[
                  //     {
                  //       "proimg":"../../static/img/index_sale8.jpg"
                  //     },
                  //     {
                  //       "proimg":"../../static/img/index_sale9.jpg"
                  //     }
                  //   ]
                  // },
                  // {
                  //   "phone":"../../static/img/index_salePhone.jpg"
                  // }
                ],
                outlets:[
                  {
                    "p1":"苏宁Outlets",
                    "p2":"大牌特卖",
                    "p3":"施华洛世奇全场2.6折起",
                    "dd":[
                      {
                        "img":"../../static/img/index_sale4.jpg",
                        "name":"PANDORA",
                        "discount":"8.0"
                      },
                      {
                        "img":"../../static/img/index_sale5.jpg",
                        "name":"施华洛世奇",
                        "discount":"5.0"
                      }
                    ]
                  }
                ],
                horview:[
                  {
                    "p1":"排行榜",
                    "p2":"今日畅销爆款",
                    "img":[
                      {
                        "proimg":"../../static/img/index_sale6.png"
                      }
                    ]
                  },
                  {
                    "p1":"好货",
                    "p2":"有品质好物",
                    "img":[
                      {
                        "proimg":"../../static/img/index_sale7.jpg"
                      }
                    ]
                  },
                  {
                    "p1":"苏宁拼购",
                    "p2":"玩具车9.9 牛排7.5",
                    "img":[
                      {
                        "proimg":"../../static/img/index_sale8.jpg"
                      },
                      {
                        "proimg":"../../static/img/index_sale9.jpg"
                      }
                    ]
                  }
                ],
                "iPhone":"../../static/img/index_salePhone.jpg",
              }
            ],
            everyday: [
              {
                "imgTit": "../../../static/img/index_everydayTit.png",
                "products": [
                  {
                    "p1": "城市专享",
                    "p2": "必抢好物 低至9.9元包邮",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaythree1.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_everydaythree1.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "大聚惠",
                    "p2": "狂欢不落幕 优惠继续在",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydayfour1.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_everydayfour2.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "领券中心",
                    "p2": "先领券 后购物",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everyday1.png"
                      },
                      {
                        "proimg": "../../../static/img/index_everyday2.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "苏宁国际",
                    "p2": "全球进口日 洋货199减100",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everyday3.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_everyday4.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "新品首发",
                    "p2": "小度智能车载支架 新品首发",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix4.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_everydaysix5.png"
                      }
                    ]
                  },
                  {
                    "p1": "0元试用",
                    "p2": "送OPPO K1",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix1.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "苏宁生鲜",
                    "p2": "每满99减30",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix2.png"
                      }
                    ]
                  },
                ]
              }
            ],
            bannersmall:[
              {
                "smallimg":"../../static/img/index_bannersmall1.jpg"
              },
              {
                "smallimg":"../../static/img/index_bannersmall2.jpg"
              },
              {
                "smallimg":"../../static/img/index_bannersmall3.jpg"
              }
            ],
            brand: [
              {
                "imgTit": "../../../static/img/index_brandTit.png",
                "lazyimg":"../../../static/img/index_everydayone1.jpg",
                "lazyimginfo":"内存条都用上了水冷散热，你却还是只能拼命吹风",
                "products": [
                  {
                    "title": "手机馆",
                    "sapoint": "抢1000元手机券",
                    "des":"iPhone8全网通4338秒",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydayPhone1.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_everydayPhone2.jpg"
                      }
                    ]
                  },
                  {
                    "title": "电脑办公",
                    "des":"品类日 抢5000减600神券",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_brand1.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_brand2.jpg"
                      }
                    ]
                  },
                  {
                    "title": "苏宁极物",
                    "des":"苏宁官方自营品牌",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_brand3.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_brand4.jpg"
                      }
                    ]
                  },
                  {
                    "title": "易回收",
                    "des":"购新更省钱",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix3.jpg"
                      }
                    ]
                  },
                  {
                    "title": "苏宁数码",
                    "des":"小度新品首发",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix4.jpg"
                      }
                    ]
                  },
                  {
                    "title": "Biu+优品",
                    "des":"尖货低至5折",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix5.png"
                      }
                    ]
                  },
                  {
                    "title": "二手优品",
                    "des":"苹果X低价抢",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix6.png"
                      }
                    ]
                  },
                ]
              }
            ],
            furniture: [
              {
                "imgTit": "../../../static/img/index_furnitureTit.png",
                "lazyimg": "../../../static/img/index_furniture1.jpg",
                "lazyimginfo": "日常消毒护理，为宝宝健康添屏障",
                "products": [
                  {
                    "p1": "苏宁家电",
                    "p2": "30天包退 365天包换",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_furniture2.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_furniture3.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "新品首发",
                    "p2": "小度智能车载支架 新品首发",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_furniture4.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_furniture5.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "0元试用",
                    "p2": "送OPPO K1",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix1.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "苏宁生鲜",
                    "p2": "每满99减30",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_everydaysix2.png"
                      }
                    ]
                  },
                ]
              }
            ],
            bannersmall2:[
              {
                "smallimg":"../../static/img/index_bannersmall4.jpg"
              },
              {
                "smallimg":"../../static/img/index_bannersmall5.png"
              },
              {
                "smallimg":"../../static/img/index_bannersmall6.jpg"
              }
            ],
            life: [
              {
                "imgTit": "../../../static/img/index_lifeTit.png",
                "lazyimg": "../../../static/img/index_life1.jpg",
                "lazyimginfo": "享受流畅“吃鸡”体验，骁龙845旗舰机型推荐",
                "products": [
                  {
                    "p1": "家纺床品",
                    "p2": "领券满399减200",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life2.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_life3.png"
                      }
                    ]
                  },
                  {
                    "p1": "家有萌宝",
                    "p2": "母婴用品 爆款直降",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life4.jpg"
                      },
                      {
                        "proimg": "../../../static/img/index_life5.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "男装馆",
                    "p2": "时尚型男",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life6.png"
                      }
                    ]
                  },
                  {
                    "p1": "女装馆",
                    "p2": "潮流女装",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life7.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "运动户外",
                    "p2": "满198减100",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life8.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "苏宁图书",
                    "p2": "99元5件",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life9.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "苏宁众筹",
                    "p2": "《知否》对杯",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life10.jpg"
                      }
                    ]
                  },
                  {
                    "p1": "助农扶贫",
                    "p2": "奶豆10.5元",
                    "img": [
                      {
                        "proimg": "../../../static/img/index_life11.jpg"
                      }
                    ]
                  },
                ]
              }
            ],
            market:[
              {
                "tit":"../../static/img/index_marketTit.png",
                "products":[
                  {
                    "p1":"共筑爱巢",
                    "p2":"家具建材市场",
                    "img":"../../static/img/index_market1.jpg"
                  },
                  {
                    "p1":"爪机党",
                    "p2":"承包你的爱机",
                    "img":"../../static/img/index_market2.jpg"
                  },
                  {
                    "p1":"怕冷星人",
                    "p2":"冷热生活随心",
                    "img":"../../static/img/index_market3.jpg"
                  },
                  {
                    "p1":"纸之恋人",
                    "p2":"亲密接触陪伴",
                    "img":"../../static/img/index_market4.jpg"
                  },
                  {
                    "p1":"极物控",
                    "p2":"定义好生活",
                    "img":"../../static/img/index_market5.jpg"
                  },
                  {
                    "p1":"爱干净",
                    "p2":"过我要的生活",
                    "img":"../../static/img/index_market6.jpg"
                  },
                  {
                    "p1":"智慧生活",
                    "p2":"装修看这里",
                    "img":"../../static/img/index_market7.jpg"
                  },
                  {
                    "p1":"粉刷匠",
                    "p2":"有家有滋味",
                    "img":"../../static/img/index_market8.jpg"
                  },
                  {
                    "p1":"小零嘴",
                    "p2":"唯有美食不可辜负",
                    "img":"../../static/img/index_market9.jpg"
                  }
                ]
              }

            ],
            goodsshop:[
              {
                "tit":"../../static/img/index_goodshop.png",
                "product":[
                  {
                    "p1":"居家党",
                    "p2":"繁杂家务轻松搞定",
                    "img1":"../../static/img/index_goodsshop1.jpg",
                    "img2":[
                      {
                        "smallimg":"../../static/img/index_goodsshop2.jpg"
                      },
                      {
                        "smallimg":"../../static/img/index_goodsshop3.jpg"
                      },
                    ]
                  },
                  {
                    "p1":"苏宁家电",
                    "p2":"30天包退",
                    "img1":"../../static/img/index_goodshop1.jpg",
                    "img2":[
                      {
                        "smallimg":"../../static/img/index_goodshop2.jpg"
                      },
                      {
                        "smallimg":"../../static/img/index_goodshop3.jpg"
                      },
                    ]
                  },
                  {
                    "p1":"家有萌宝",
                    "p2":"母婴用品爆款直降",
                    "img1":"../../static/img/index_goodshop6.jpg",
                    "img2":[
                      {
                        "smallimg":"../../static/img/index_goodshop4.jpg"
                      },
                      {
                        "smallimg":"../../static/img/index_goodshop5.jpg"
                      },
                    ]
                  },
                  {
                    "p1":"家居家纺",
                    "p2":"家纺年货节",
                    "img1":"../../static/img/index_goodshop9.jpg",
                    "img2":[
                      {
                        "smallimg":"../../static/img/index_goodshop7.jpg"
                      },
                      {
                        "smallimg":"../../static/img/index_goodshop8.png"
                      },
                    ]
                  },
                ],
                "active":"../../static/img/index_goodshopbig.png"
              }
            ],
            youlike:[
              {
                "tit":"../../static/img/index_youlikeTit.png",
                "products":[
                  {
                    "img":"../../static/img/index_youlikepro1.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "sn":"",
                    "p1":" 欧莱雅(LOREAL) 青春密码酵素精华肌底液 50ml 修护;滋润营养 任何肤质 女士适用 乳液质地",
                    "span1":"",
                    "span2":"",
                    "price":"349"
                  },
                  {
                    "img":"../../static/img/index_youlike1.jpg",
                    "zy":"",
                    "sn":"../../static/img/index_youlikeXN.png",
                    "p1":" 【限量领券】Apple iPhone X 64GB 银色 移动联通电信4G手机",
                    "span1":"大聚惠",
                    "span2":"领券200元",
                    "price":"6288"
                  },
                  {
                    "img":"../../static/img/index_youlike2.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "sn":"",
                    "p1":" 美的（Midea）大1匹 智弧 3级能效 变频家用 智能操控 挂壁式挂机空调 KFR-26GW/WDBN8A3@",
                    "span1":"",
                    "span2":"",
                    "price":"2399"
                  },
                  {
                    "img":"../../static/img/index_youlike3.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "sn":"",
                    "p1":"维达（Vinda） 抽纸 苏宁定制超韧三层132抽*18包纸巾 小规格(短幅)（整箱销售）",
                    "span1":"大聚惠",
                    "span2":"领券300元",
                    "price":"39.9"
                  },
                  {
                    "img":"../../static/img/index_youlike4.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "sn":"",
                    "p1":"阳光杰尼（YGJN)全铜冷热厨房龙头 水槽水龙头 洗菜盆水龙头 厨盆龙头 带进水管",
                    "span1":"",
                    "span2":"",
                    "price":"89"
                  },
                  {
                    "img":"../../static/img/index_youlike5.jpg",
                    "zy":"../../static/img/index_youlikeXN.png",
                    "p1":" 佰草集新玉润保湿洁面泡(150ml)",
                    "span1":"拼团",
                    "span2":"",
                    "price":"95"
                  },
                  {
                    "img":"../../static/img/index_youlike6.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "p1":" 狮王 细齿洁 专业牙龈护理 怡香薄荷牙膏 140g（单位：支）",
                    "span1":"",
                    "span2":"",
                    "price":"20.1"
                  },
                  {
                    "img":"../../static/img/index_youlike7.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "p1":" 蓝月亮衣物柔顺剂3kg瓶*4 薰衣草香 整箱装",
                    "span1":"",
                    "span2":"",
                    "price":"104"
                  },
                  {
                    "img":"../../static/img/index_youlike8.jpg",
                    "zy":"../../static/img/index_youlikeXN.png",
                    "p1":" 奥克斯/AUX 立式茶吧机 YCB-0.75J 金色 冷热型 黑金色 家用养生茶吧机 饮水机 加热 制冷 保温",
                    "span1":"大聚惠",
                    "span2":"",
                    "price":"499"
                  },
                  {
                    "img":"../../static/img/index_youlike9.jpg",
                    "zy":"../../static/img/index_youlikeZY.png",
                    "sn":"../../static/img/index_youlikeXN.png",
                    "p1":"俏侬原味手抓饼1kg(10片装)",
                    "span1":"拼团",
                    "span2":"",
                    "price":"9.9"
                  },

                ]
              }
            ]
          }
        ]

      }
    },
  }
</script>

<style>
  @import "../assets/css/AzIndex.css";

  .box {
    width: 3.75rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
