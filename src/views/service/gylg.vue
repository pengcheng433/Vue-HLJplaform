<template>
  <div class="page">
    <!---->
    <div class="banner"
         :style="{
        backgroundImage:'url('+images+')','margin':0+'px'} ">
    </div>
    <div class="page-box">
      <div class="page-tree">
        <div class="page-menu">
          <p class="title">产品概述</p>
          <div data-v-3df8f478=""
               class="see-anchor detail">
            <div data-v-3df8f478=""
                 class="ant-anchor-wrapper"
                 style="max-height: calc(100vh - 220px);">
              <div class="ant-anchor fixed">
                <div class="ant-anchor-ink"><span class="ant-anchor-ink-ball"
                        style="top: 15.5px;"></span>
                </div>

                <div data-v-3df8f478=""
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987256"
                     title="供应链管理"
                     target="_self"
                     class="ant-anchor-link-title">供应链管理</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-box1">
        <div class="header-top">

        </div>
        <div>

          <div data-v-492dc475=""
               class="see-space"
               id="1603164375987256"
               style="height: 50px;"></div>
          <div class="see-title"
               id="160316180399141">
            <div class="title">
              <!---->
              <div title="四、供应链管理"
                   class="text">
                供应链管理
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="16031618292425141"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16031618360065341">
            <div class="title">
              <!---->
              <div title="功能介绍"
                   class="text1">
                功能介绍
              </div>
              <div title="功能介绍"
                   class="text1-link trynow"
                   style="cursor: pointer;">
                <div id="link-text2">立即体验1</div>
                <div id="link-text1">立即体验2</div>
              </div>
            </div>
            <div class="sub-title">
              基于标识解析体系以企业间的信息资源集成共享为基础，使供应链运作从采购开始，以最少的成本，达到最优的运作，最终满足客户的需求。通过原料进厂、产品生产、仓储物流、终端销售、市场消费的全产业链可追溯管理，实现信息资源共享、生产效率提升、服务质量提高、客户需求扩大，使供应链相关企业利益最大化。
            </div>
            <div class="sub-title">
              <a href="http://203.195.202.167:9095/hssrm/sys/index"
                 target="_blank"
                 style="font-size: 20px">点击试用>></a> <span style="margin-left: 50px">账号hlj 密码123456</span>
            </div>

            <div data-v-492dc475=""
                 class="see-space"
                 style="height: 30px;"></div>
            <div data-tips=""
                 class="see-image-normal"
                 id=""
                 style="height: auto;">
              <!----><img src="../../assets/images/service3.png"
                   class="see-image-normal__image">
              <!---->
            </div>
          </div>

          <div data-v-492dc475=""
               class="see-space"
               id="160316467834034821"
               style="height: 120px;"></div>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-6ea93a13=""
         class="backTop homePage__back"
         style="display: none;">
      <svg data-v-6ea93a13=""
           aria-hidden="true"
           class="svg-icon">
        <use xlink:href="#iconzhiding"></use>
      </svg>
    </div>

    <Pop />
    <Pop2 />

  </div>
</template>
<script>
import Pop from "./Pop.vue"
import Pop2 from "./Pop2.vue"

export default {
  components: {
    Pop, Pop2
  },
  data () {
    return {
      images: require('../../assets/images/service1.jpg'),
    }
  },
}
</script>
<style  src="../../assets/css/customer_case.css"  scoped>
</style>

<style scoped>
.trynow {
  justify-content: space-between;
  display: flex;
  line-height: 24px;
  width: 30%;
}
</style>