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
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987255"
                     title="全生命周期管理"
                     target="_self"
                     class="ant-anchor-link-title">全生命周期管理</a>
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
               id="1603164375987255"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16031618039914">
            <div class="title">
              <!---->
              <div title="三、全生命周期管理"
                   class="text">
                全生命周期管理
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="1603161829242514"
               style="height: 50px;"></div>
          <div class="see-title"
               id="1603161836006534">
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
              基于国家通用标识解析的应用体系解决方案，使产品全生命周期信息得以便捷地聚集。即使信息存储于不同的载体中，也能够通过物联码的全局唯一性和解析统一性直接汇总，这种去中心化的数据存储方式让全生命周期中任何信息得以存留，并且通过技术手段，实现大数据平台层面的数据不可抹去
            </div>

            <div data-v-492dc475=""
                 class="see-space"
                 style="height: 30px;"></div>
            <div data-tips=""
                 class="see-image-normal"
                 id=""
                 style="height: auto;">
              <!----><img src="../../assets/images/service2.png"
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