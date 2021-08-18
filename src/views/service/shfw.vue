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
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987258"
                     title="售后服务"
                     target="_self"
                     class="ant-anchor-link-title">售后服务</a>
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
               id="1603164375987258"
               style="height: 50px;"></div>
          <div class="see-title"
               id="160316180399147">
            <div class="title">
              <!---->
              <div title="六、售后服务"
                   class="text">
                售后服务
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="16031618292425147"
               style="height: 10px;"></div>
          <div class="see-title"
               id="16031618360065347">
            <div class="sub-title">
              用户故障报修步骤简单、方式多样。
              信息传递全面（文字、语音、图片、视频），极大地减少沟通的成本。
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="160316182924251101"
               style="height: 20px;"></div>
          <div class="see-title"
               id="16031618360065321">
            <div class="title">
              <!---->
              <div title="价值"
                   class="text1">
                价值
              </div>
              <div title="功能介绍"
                   class="text1-link"
                   id="link-text1"
                   style="cursor: pointer;">
                立即体验
              </div>
            </div>
            <div class="sub-title">
              客户报修工单会以短信、APP信息等多种方式发送到服务人员手中售后服务站主管可以进行任务下派，派工更简单，更快捷工单过程数据透明可追溯
            </div>

            <div data-v-492dc475=""
                 class="see-space"
                 style="height: 30px;"></div>
            <div data-tips=""
                 class="see-image-normal"
                 id=""
                 style="height: auto;">
              <!----><img src="../../assets/images/service.png"
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