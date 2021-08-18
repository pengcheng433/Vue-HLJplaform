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
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987257"
                     title="市场营销数字化"
                     target="_self"
                     class="ant-anchor-link-title">市场营销数字化</a>
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
               id="1603164375987257"
               style="height: 50px;"></div>
          <div class="see-title"
               id="160316180399146">
            <div class="title">
              <!---->
              <div title="五、市场营销数字化"
                   class="text">
                市场营销数字化
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="16031618292425146"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16031618360065346">
            <div class="title">
              <!---->
              <div title="功能介绍"
                   class="text1">
                功能介绍
              </div>
              <div title="功能介绍"
                   class="text1-link"
                   id="link-text1"
                   style="cursor: pointer;">
                立即体验
              </div>
            </div>
            <div class="sub-title">
              用户通过扫描产品二维码可以查看该产品的型号参数、文字图片、视频等资料，企业内部人员通过登录APP账号扫描产品物联码可以参看图纸、维修资料等非对外展示信息。
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
  </div>
</template>
<script>
import Pop from "./Pop.vue"
export default {
  components: {
    Pop,
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

<style>
</style>