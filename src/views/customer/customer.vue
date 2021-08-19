<template>
  <div>
    <!--中间主要内容-->

    <!--banner轮播图-->
    <div class="page"
         style="position: relative;width: 100%;min-width: 1280px;background: #f2f2f2;margin-top: 105px;height:299px;overflow-x:unset">
      <div class="banner"
           :style="{background:'url('+images+') center center repeat',
           zIndex:0,backgroundSize:70+'%',width:100+'%',height:299+'px'}">

      </div>
      <!-- Swiper -->
      <!--        <div class="
           swiper-container">-->
      <!--            <div class="swiper-wrapper">-->
      <!--                <div class="swiper-slide swiper-item">-->
      <!--                    <div class="page1_slide__main" style="background-image: url(images/gyhl.png);">-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--                <div class="swiper-slide swiper-item">-->
      <!--                    <div class="page1_slide__main" style="background-image: url(images/banner2_new.png);">-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--                <div class="swiper-slide swiper-item">-->
      <!--                    <div class="page1_slide__main" style="background-image: url(images/banner3_new.png);">-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--            <div class="swiper-slide swiper-item">-->
      <!--                <div class="page1_slide__main" style="background-image: url(images/banner5.jpg);">-->
      <!--                </div>-->
      <!--            </div>-->

      <!--            </div>-->
      <!-- Add Pagination -->
      <!--            <div class="swiper-pagination "></div>-->
      <!-- Add Arrows -->
      <!--        </div>-->

    </div>

    <!-- 切换  -->
    <div class="bannertab">
      <div class="tabs">
        <div class="title active">
          <svg data-v-954bc482=""
               aria-hidden="true"
               class="icon svg-icon">
            <use xlink:href="#iconanliku-xuanzhong"></use>
          </svg>
          <router-link to="/customer"
                       style="color:unset">
            <a href="customer.html"
               class="cust"><span class="font">案例故事</span></a>
          </router-link>
        </div>

        <div class="title">
          <svg data-v-954bc482=""
               aria-hidden="true"
               class="icon svg-icon">
            <use xlink:href="#iconkehuminglu1"></use>
          </svg>
          <router-link to="/customer/customer2"
                       style="color:unset">
            <a href="customer2.html"
               class="cust"><span class="font">客户名录</span></a>
          </router-link>
        </div>
      </div>
    </div>

    <!--banner轮播图-->
    <div class="case-container">

      <div data-v-10e9d1ae=""
           data-v-6c813a88="">
        <div data-v-10e9d1ae=""
             class="labels_content">
          <div data-v-10e9d1ae=""
               class="category_name">
            <p data-v-10e9d1ae="">应用</p>
          </div>
          <div data-v-10e9d1ae=""
               class="labels"
               id="labels1">
            <p :key="item.name"
               @click="chang(1,index)"
               :class="[index==select1?'active label_item':'label_item']"
               v-for="(item,index) in application"
               :data-aid="index"><span class="labelContent"><span class="font">{{item.name}}</span></span></p>
          </div>
        </div>
        <!---->
      </div>
      <div data-v-10e9d1ae=""
           data-v-6c813a88="">
        <div data-v-10e9d1ae=""
             class="labels_content">
          <div data-v-10e9d1ae=""
               class="category_name">
            <p data-v-10e9d1ae="">行业</p>
          </div>
          <div data-v-10e9d1ae=""
               class="labels"
               id="labels2">
            <p v-for="(item,index) in profes"
               @click="chang(2,index)"
               :key="item.name"
               :class="[index==select2?'active label_item':'label_item']"
               :data-pid="index"><span class="labelContent"><span class="font">{{item.name}}</span>
              </span></p>
          </div>
          <!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="case-list-container">
      <div data-v-0f52fa2f=""
           class="section5__content">

        <div data-v-0f52fa2f=""
             class="case__content__main">
          <div data-v-0f52fa2f=""
               v-for="(item,index) in shwonapp"
               class="section5__content__main__item">
            <router-link :to="'/customer/'+item.href"><a href=""
                 style="width:100%;height:auto;display:block;position:relative">
                <div class="titleico">{{item.hy }}</div>
                <img :src="item.img"
                     class="section5__content__main__item--image">
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block1">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left">{{item.hy }}</div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--right"> {{item.aname.join("、") }}
                  </div>
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--line"></div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block2">{{ item.name}}</div>

              </a>
            </router-link>
          </div>
        </div>
      </div>

      <div data-v-492dc475=""
           class="see-space"
           id="16030992342631"
           style="height: 100px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: require('../../assets/images/casebanner.png'),
      caseArray: [{
        "id": "1",
        "name": "浙江双金机械集团有限公司",
        "aid": ["1", "5"],
        "pid": "2",
        "aname": ["一物一码", "售后服务"],
        "info": "使用标识解析售后管理系统后，使我们的工作效率得到很大的提高，同时也降低了售后服务成本。",
        "href": "sjjx",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/sjjx.jpg'),
        "worth": "一机一码、信息展示、内外手册、防伪查询"
      }, {
        "id": "2",
        "name": "景津环保股份有限公司",
        "aid": ["5"],
        "pid": "2",
        "aname": ["标识解析防伪溯源"],
        "info": "我认为标识解析是目前最具实际操作，又最简单的工业互联网落地方案 ，原来也接触过许多互联网解决方案，但都不具备可操作性",
        "href": "jjhb",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/jjhb.jpg'),
        "worth": "动态鉴伪、售后服务、云平台售后大数据分析"
      }, {
        "id": "3",
        "name": "桂林国际电线电缆集团有限责任公司",
        "aid": ["1", "2"],
        "pid": "3",
        "aname": ["标识解析一物一码", "标识解析防伪溯源"],
        "info": "",
        "href": "gjdl",
        "company": "企业规模1000+",
        "hy": "线缆行业",
        "img": require('../../assets/images/gjdl.jpg'),
        "worth": "动态鉴伪、经销商防窜管理、工作量（产量）统计分析"
      }, {
        "id": "4",
        "name": "山推建友机械股份有限公司",
        "aid": ["5"],
        "pid": "2",
        "aname": ["标识解析售后服务"],
        "info": "使用使用标识解析合同档案系统后，系统化工作流程，使我们的工作效率得到很大的提高！",
        "href": "jyjx",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/jyjx.jpg'),
        "worth": "一机一码、信息展示、操作视频、操作说明、配件商城"
      }, {
        "id": "5",
        "name": "浙江日科自动化设备有限公司",
        "aid": ["3", "5"],
        "pid": "4",
        "aname": ["标识解析全生命周期管理", "标识解析售后服务"],
        "info": "使用标识解析售后管理系统后，实时把控外派人员工作，把控售后成本，提高服务质量。",
        "href": "rksb",
        "company": "企业规模1000+",
        "hy": "设备自动化",
        "img": require('../../assets/images/rksb.png'),
        "worth": "服务签到、服务记录、记录统计、工作评估"
      }, {
        "id": "6",
        "name": "江苏国茂减速机股份有限公司",
        "aid": ["1", "2"],
        "pid": "5",
        "aname": ["标识解析一物一码", "标识解析防伪溯源"],
        "info": "二维码售后服务系统本来也是国茂要开发的项目，帮我们做了想做的事情也解决了我们想解决的问题。",
        "href": "jsjc",
        "company": "企业规模1000+",
        "hy": "减速机",
        "img": require('../../assets/images/jsjc.jpg'),
        "worth": "一机一码、信息展示、电子手册、防伪查询"
      }, {
        "id": "7",
        "name": "沪源电机有限公司",
        "aid": ["6", "8"],
        "pid": "6",
        "aname": ["标识解析设备化管理", "供应链管理"],
        "info": "移动互联网的普及，使得扫码获取对应产品操作说明更加的便利，用户无需每次都打电话索取相关产品电子档手册，大大提高了用户对产品的体验度。",
        "href": "hydj",
        "company": "企业规模1000+",
        "hy": "电机行业",
        "img": require('../../assets/images/hydj.png'),
        "worth": "专业工业服务平台，精准的三维模型推广平台"
      }, {
        "id": "8",
        "name": "太平洋泵业集团有限公司",
        "aid": ["4"],
        "pid": "2",
        "aname": ["标识解析市场营销数字化"],
        "info": "大数据时代，需要获取产品的分布图，更好的为将来的市场做规划。",
        "href": "ybjx",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/ybjx.png'),
        "worth": "私有云后台大数据分析、专业工业服务平台、全新品牌推广"
      }, {
        "id": "9",
        "name": "浙江卡麦隆阀门有限公司",
        "aid": ["4", "7"],
        "pid": "2",
        "aname": ["标识解析市场营销数字化", "标识解析办公数字化管理"],
        "info": "企业的推广是不容忽视的，一个好的平台会带来更大、更专业的收益，移动互联网的发展，是我们转型的关键。",
        "href": "kmfm",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/kmfm.jpg'),
        "worth": "一机一码、信息展示、企业宣传"
      }, {
        "id": "10",
        "name": "温州跃中机械科技有限公司",
        "aid": ["4"],
        "pid": "2",
        "aname": ["标识解析市场营销数字化"],
        "info": "追随时代的脚步，让用户知道我们好品质的产品，高质量的服务。",
        "href": "yzjx",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/yzjx.png'),
        "worth": "专业工业服务平台，精准的三维模型推广平台"
      }, {
        "id": "11",
        "name": "华利达集团",
        "aid": ["8", "5", "4"],
        "pid": "7",
        "aname": ["供应链管理", "售后服务", "市场营销数字化"],
        "info": "追随时代的脚步，让用户知道我们好品质的产品，高质量的服务。",
        "href": "hld",
        "company": "企业规模1000+",
        "hy": "纺织行业",
        "img": require('../../assets/images/hld.jpg'),
        "worth": "专业工业服务平台，精准的三维模型推广平台"
      },
      {
        "id": "12",
        "name": "盐城市威氏机械有限公司",
        "aid": ["1", "2", "7"],
        "pid": "2",
        "aname": ["防伪溯源", "一物一码", "办公数字化管理"],
        "info": "使用迈迪物联码，提升了产品形象，解决了令人困扰的产品防伪问题",
        "href": "wsjx",
        "company": "企业规模1000+",
        "hy": "机械行业",
        "img": require('../../assets/images/wsjx.jpg'),
        "worth": "动态鉴伪、售后服务、云平台售后大数据分析"
      }
        , {
        "id": "13",
        "name": "佛山市深谊电主轴制造有限公司",
        "aid": ["1", "2", "7"],
        "pid": "6",
        "aname": ["防伪溯源", "一物一码", "办公数字化管理"],
        "info": "一解决模型问题，二解决推广问题，三解决产品形象问题，一举三得。",
        "href": "syzj",
        "company": "企业规模1000+",
        "hy": "电机行业",
        "img": require('../../assets/images/syzj.jpg'),
        "worth": "动态鉴伪、售后服务、云平台售后大数据分析"
      },
      {
        "id": "14",
        "name": "郑州乐彩科技股份有限公司",
        "aid": ["1", "2", "5", "10", "11"],
        "pid": "4",
        "aname": ["防伪溯源", "一物一码", "售后服务", "设备资产管理", "数字化保修"],
        "info": "一解决模型问题，二解决推广问题，三解决产品形象问题，一举三得。",
        "href": "lckj",
        "company": "企业规模1000+",
        "hy": "设备自动化",
        "img": require('../../assets/images/lckj.jpg'),
        "worth": "动态鉴伪、售后服务、云平台售后大数据分析"
      }
        , {
        "id": "15",
        "name": "郑州奥特科技有限公司",
        "aid": ["8"],
        "pid": "1",
        "aname": ["供应链管理"],
        "info": "一解决模型问题，二解决推广问题，三解决产品形象问题，一举三得。",
        "href": "otkj",
        "company": "企业规模1000+",
        "hy": "汽配行业",
        "img": require('../../assets/images/otkj.jpg'),
        "worth": "动态鉴伪、售后服务、云平台售后大数据分析"
      }
      ],
      application: [{ "id": "0", "name": "全部" }, { "id": "1", "name": "一物一码" }, { "id": "2", "name": "防伪溯源" }, {
        "id": "3",
        "name": "全生命周期管理"
      }, { "id": "4", "name": "市场营销数字化" }, { "id": "5", "name": "售后服务" }, { "id": "6", "name": "设备化管理" }, {
        "id": "7",
        "name": "办公数字化管理"
      }, {
        "id": "8",
        "name": "供应链管理"
      }, {
        "id": "9",
        "name": "客户数字化管理"
      }, {
        "id": "10",
        "name": "设备资产管理"
      }, {
        "id": "11",
        "name": "数字化保修"
      }],
      profes: [{ "id": "0", "name": "全部" }, { "id": "1", "name": "汽配行业" }, { "id": "2", "name": "机械行业" }, { "id": "3", "name": "线缆行业" }, {
        "id": "4",
        "name": "设备自动化"
      }, { "id": "5", "name": "减速机" }, { "id": "6", "name": "电机行业" }, { "id": "6", "name": "纺织行业" }],
      select1: "0",
      select2: "0"
    }
  },
  methods: {

    getData () {
      let filterArray = []
      if (this.select1 == 0 || this.select2 == 0) {
        //如果有个选择全部，则数组内有全部的值，判断另一个刷选条件，如果不存在则去除
        filterArray = this.caseArray.concat();

        filterArray = filterArray.filter((item) => {
          if (this.select2 == "0" && this.select1 != "0") {
            return item.aid.indexOf(this.select1) > -1
          } else if (this.select2 != "0" && this.select1 == "0") {
            return item.pid == this.select2
          } else {
            return filterArray
          }
        });
        return filterArray
      } else {
        let _this = this
        this.caseArray.forEach(function (item, index) {
          if (item.pid == _this.select2 && item.aid.indexOf(_this.select1.toString()) > -1) {
            filterArray.push(item)
          }
        })
        return filterArray
      }
    },
    chang (num, index) {
      if (num == 1) {
        this.select1 = index
      } else {
        this.select2 = index
      }
    }
  },
  computed: {
    shwonapp () {
      return this.getData()
    }
  },

}
</script>


<style scoped  src="../../assets/css/customer.css">
</style>
<style  scoped>
/deep/ .titleico {
  display: block;
  width: 80px;
  height: 22px;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
  border: none;
  background: linear-gradient(90deg, #d1201d 0%, #e13f27 100%);
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
}
</style>