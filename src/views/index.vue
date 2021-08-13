<template>
  <div>
    <!--banner轮播图-->
    <div class="banner"
         id="header"
         name="header">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper"
             style="height: 100%">
          <div class="swiper-slide swiper-item">
            <!-- style="background: url(require(../assets/images/banner1_new.png)) center center" -->

            <div class="page1_slide__main"
                 :style="{background:'url('+swiper1+')center center ',}">
              <span class="bannertext"></span>
            </div>
          </div>
          <div class="swiper-slide swiper-item">
            <!-- style="background-image: url(.../../assets/images/banner2_new.png)"> -->

            <div class="page1_slide__main"
                 :style="{background:'url('+swiper2+')',}">
              <span class="bannertext"></span>
            </div>
          </div>
          <div class="swiper-slide swiper-item">
            <!-- style="background-image: url(../assets/images/banner3_new.png)"> -->

            <div class="page1_slide__main"
                 :style="{background:'url('+swiper3+')',}">
              <span class="bannertext"></span>
            </div>
          </div>
          <div class="swiper-slide swiper-item">
            <!-- style="background-image: url(images/banner4_new.jpg)"> -->

            <div class="page1_slide__main"
                 :style="{background:'url('+swiper4+')',}">
              <span class="bannertext"></span>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
      </div>
    </div>
    <!--banner轮播图-->
    <div class="section-container">
      <div class="section-header">新闻资讯</div>
      <div class="section-subTitle">把握行业动态，专注打造优质平台</div>
      <div class="section2__content__main">
        <div data-v-e7e4ea0e=""
             class="section2__content__main__left">
          <div class="left-top">
            <router-link to="/new/new2">
              <a><img src="../assets/images/newsindex.jpg"
                     class="left-top-img" /></a>
            </router-link>
          </div>
          <div class="left-bottom">
            <div class="left-bottom-date">
              <p class="left-bottom-date-day">24</p>
              <p class="left-bottom-date-month">2021-03</p>
            </div>
            <div class="left-bottom-title">
              <router-link to="/new/new2">
                <a>
                  <h2>工业互联网新三年计划解读</h2>
                </a>
              </router-link>
            </div>
          </div>
        </div>
        <div data-v-e7e4ea0e=""
             id=""
             class="section2__content__main__right">
          <div data-v="2"
               class="section2__content__main__left--item">
            <div class="left-bottom-date">
              <p class="left-bottom-date-day">28</p>
              <p class="left-bottom-date-month">2020-12</p>
            </div>
            <div class="left-bottom-title">
              <router-link to="/new/new1">
                <a href="">
                  <h2>
                    《工业互联网标识管理办法》系列解读 |
                    高新民：《工业互联网标识管理办法》引领我国工业互联网持续纵深发展
                  </h2>
                </a>
              </router-link>
            </div>
          </div>
          <div data-v="3"
               class="section2__content__main__left--item">
            <div class="left-bottom-date">
              <p class="left-bottom-date-day">17</p>
              <p class="left-bottom-date-month">2021-03</p>
            </div>
            <div class="left-bottom-title">
              <router-link to="/new/new3">
                <a href="">
                  <h2>
                    今年工业和信息化标准工作要点发布 推进标识解析标准制定写入要点
                  </h2>
                </a>
              </router-link>
            </div>
          </div>
          <!--                <div data-v="4" class="section2__content__main__left&#45;&#45;item">-->
          <!--                    <div class="left-bottom-date">-->
          <!--                        <p class="left-bottom-date-day">24</p>-->
          <!--                        <p class="left-bottom-date-month">2021-03</p>-->
          <!--                    </div>-->
          <!--                    <div class="left-bottom-title"><a href="news2.html"><h2>工业互联网新三年计划解读</h2></a></div>-->
          <!--                </div>-->
        </div>
      </div>
    </div>

    <div class="section5-container">
      <div data-v-0f52fa2f=""
           class="section5__content">
        <div data-v-0f52fa2f=""
             class="section5__content__title">
          <router-link to="/customer/customer">
            <a href="customer.html"
               style="color: #000">经典案例</a>
          </router-link>
        </div>
        <div data-v-0f52fa2f=""
             class="section5__content__desc">
          聆听客户的声音，助力客户成长
        </div>
        <div data-v-0f52fa2f=""
             class="section5__content__main">
          <div data-v-0f52fa2f=""
               class="section5__content__main__item">
            <router-link to="/customer/hld">
              <a style="width: 100%; height: auto; display: block"><img src="../assets/images/hld.jpg"
                     class="section5__content__main__item--image" />
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block1">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left">
                    纺织行业
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--right">
                    供应链管理、售后服务、市场营销数字化
                  </div>
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block2">
                  华利达集团
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block3">
                  协调纺织行业企业供应链上下游之间的需求资源；指导纺织业企业内部生产，提升供应链整体作业效率；实现降低企业成本，提升生产效率，增强企业的竞争力；突破组织界限，建立跨组织多赢的业务流程结构。
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--line"></div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block4">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--left">
                    1000+
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--right">
                    降本增销、降低打假成本、增加品牌影响力
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div data-v-0f52fa2f=""
               class="section5__content__main__item">
            <router-link to="/customer/jjhb">
              <a style="width: 100%; height: auto; display: block"><img src="../assets/images/jjhb.jpg"
                     class="section5__content__main__item--image" />
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block1">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left">
                    机械行业
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--right">
                    标识解析防伪溯源、标识解析售后服务
                  </div>
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block2">
                  景津环保股份有限公司
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block3">
                  我认为标识解析是目前最具实际操作，又最简单的工业互联网落地方案
                  ，原来也接触过许多互联网解决方案，但都不具备可操作性
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--line"></div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block4">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--left">
                    1000+
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--right">
                    动态鉴定、伪售后服务体系、云平台售后大数据分析
                  </div>
                </div>
              </a>
            </router-link>
          </div>
          <div data-v-0f52fa2f=""
               class="section5__content__main__item">
            <router-link to="/customer/gjdl">
              <a style="width: 100%; height: auto; display: block"><img src="../assets/images/gjdl.jpg"
                     class="section5__content__main__item--image" />
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block1">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left">
                    线缆行业
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--right">
                    标识解析一物一码、标识解析防伪溯源
                  </div>
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block2">
                  桂林国际电线电缆集团有限责任公司
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block3">
                  降低哈药集团项目成本，实现数据共享，全面提升集团事务处理效率。
                </div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--line"></div>
                <div data-v-0f52fa2f=""
                     class="section5__content__main__item--block4">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--left">
                    1000+
                  </div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block4--right">
                    经销商防窜管理、工作量（产量）统计分析
                  </div>
                </div>
              </a>
            </router-link>
          </div>
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__title">
          <router-link to="/customer/customer2">
            <a style="color: #000">合作客户</a>
          </router-link>
        </div>
        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/fh.png"
               class="section5__content__logos__logo" />
          <img data-v-0f52fa2f=""
               src="../assets/images/ltjt.png"
               class="section5__content__logos__logo" />
          <img data-v-0f52fa2f=""
               src="../assets/images/ydtx.png"
               class="section5__content__logos__logo" />
          <img data-v-0f52fa2f=""
               src="../assets/images/yzjt.png"
               class="section5__content__logos__logo" />
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/hyjt.gif"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/hfzy.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/jxxl.gif"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/jssp.gif"
               class="section5__content__logos__logo" />

          <!--                <img data-v-0f52fa2f=""-->
          <!--                    src="images/section5-logo5.png" class="section5__content__logos__logo"><img data-v-0f52fa2f=""-->
          <!--                    src="images/section5-logo6.png" class="section5__content__logos__logo">-->
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/sjjx_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/jjhb_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/gjdl_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/jyjx_m.png"
               class="section5__content__logos__logo" />
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/rksb_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/jsjc_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/hydj_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/ybjx_m.png"
               class="section5__content__logos__logo" />
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/kmfm_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/yzjx_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/hld_m.png"
               class="section5__content__logos__logo" /><img data-v-0f52fa2f=""
               src="../assets/images/lckj_m.png"
               class="section5__content__logos__logo" />
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__logos">
          <img data-v-0f52fa2f=""
               src="../assets/images/otkj_m.png"
               class="section5__content__logos__logo" />
        </div>

        <div data-v-0f52fa2f=""
             class="section5__content__link">
          <router-link to="/customer/customer">
            <a class="more">了解更多 &gt;</a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="section8-container">
      <div data-v-5ef67879=""
           class="section8__content">
        <div data-v-5ef67879=""
             class="section8__content__title">
          了解我们的生态伙伴
        </div>
        <div data-v-5ef67879=""
             class="section8__content__desc">
          伙伴助力打造行业生态圈
        </div>
        <div data-v-5ef67879=""
             class="section8__content__main">
          <div data-v-5ef67879=""
               class="section8__content__main__left">
            <img data-v-5ef67879=""
                 src="../assets/images/yzjt.png"
                 class="section8__content__main__left--logo" />
            <div data-v-5ef67879=""
                 class="section8__content__main__left__info">
              <div data-v-5ef67879=""
                   class="section8__content__main__left__info--title">
                中国一重集团有限公司
              </div>
              <div data-v-5ef67879=""
                   class="section8__content__main__left__info--desc">
                中国一重前身为第一重型机器厂，是“一五”期间建设156项重点工程项目之一，始建于1954年，是中央管理的涉及国家安全和国民经济命脉的国有重要骨干企业之一，是国家创新型试点企业、国家高新技术企业，拥有国家级企业技术中心、重型技术装备国家工程研究中心、国家能源重大装备材料研发中心。
              </div>
            </div>
          </div>
          <div data-v-5ef67879=""
               class="section8__content__main__right">
            <div data-v-5ef67879=""
                 class="section8__content__main__right__item">
              <img data-v-5ef67879=""
                   src="../assets/images/ydtx.png"
                   class="section8__content__main__right__item--logo" />
              <div data-v-5ef67879=""
                   class="section8__content__main__right__item--title">
                中国移动通信集团黑龙江有限公司
              </div>
            </div>
            <div data-v-5ef67879=""
                 class="section8__content__main__right__item">
              <img data-v-5ef67879=""
                   src="../assets/images/ltjt.png"
                   class="section8__content__main__right__item--logo" />
              <div data-v-5ef67879=""
                   class="section8__content__main__right__item--title">
                中国联合网络通信有限公司黑龙江省分公司
              </div>
            </div>
            <div data-v-5ef67879=""
                 class="section8__content__main__right__button">
              <a href="joinus.html"
                 class="joinusan"><span style="display: block">加入我们</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'

import Swiper from 'swiper'
export default {
  data () {
    return {
      swiper1: require('../assets/images/banner1_new.png'),
      swiper2: require('../assets/images/banner2_new.png'),
      swiper3: require('../assets/images/banner3_new.png'),
      swiper4: require('../assets/images/banner4_new.jpg')
    }
  },

  mounted () {

    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      //nextButton: '.swiper-button-next',
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      //prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      autoplay: 3000,
      /*   pagination: {
    el: '.swiper-pagination',
    bulletClass: 'my-bullet',//需设置.my-bullet样式
            }, */
    })

    /*  $('.carousel').carousel({
    interval: 2000
       }); */

    $('#section2Menu').on(
      'click',
      '.section2__content__main__left--item',
      function (event) {
        tabSwitch(
          'section2__content__main__left--item--active',
          'section2__content__main',
          'section2__content__main__right'
        )
      }
    )
    $('#section3Menu').on(
      'click',
      '.section3__content__main__left--item',
      function (event) {
        tabSwitch(
          'section3__content__main__left--item--active',
          'section3__content__main',
          'section3__content__main__right'
        )
      }
    )
    $('#section4Menu').on(
      'click',
      '.section4__content__main__left--item',
      function (event) {
        tabSwitch(
          'section4__content__main__left--item--active',
          'section4__content__main',
          'section4__content__main__right'
        )
      }
    )
    function tabSwitch (selectActive, containerClass, classItem) {
      var thisObj = event.target // 绑定事件到父节点
      var index = Number(event.target.dataset.v) - 1
      console.log(index)
      //debugger;
      $(thisObj).addClass(selectActive)
      $(thisObj).siblings().removeClass(selectActive)
      var subObj = document
        .getElementsByClassName(containerClass)[0]
        .getElementsByClassName(classItem)[index]
      $(subObj).css('display', 'block')
      $(subObj)
        .siblings('.' + classItem)
        .css('display', 'none')
    }
    $('.return_top').click(function () {
      $('html ,body').animate({ scrollTop: 0 }, 1500)
    })



  }
}
</script>

<style >
@import "../assets/css/index.css";
</style>