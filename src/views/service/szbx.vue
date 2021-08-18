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
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987263"
                     title="数字化保修"
                     target="_self"
                     class="ant-anchor-link-title">数字化保修</a>
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
               id="1603164375987263"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16031618039914282">
            <div class="title">
              <!---->
              <div title="十、数字化保修"
                   class="text">
                数字化保修
              </div>
            </div>
          </div>

          <div data-v-492dc475=""
               class="see-space"
               id="16031618329242518"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16031618336006538">
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
              以往的报修管理中，主要依靠员工人工提交报销单、并由领导审批，再由行政部门咨询维修报价、确定维修材料，确定维修师傅后，再上门维修。整个从报修-审批-询价-维修-结束的流程，较为冗长，一些紧急情况下，可能会影响到员工的正常工作，以及相关业务的顺利开展。基于标识解析数字化保修实现一站式智能管理减少设备维修申报、审批、实时的繁琐流程环节，站式打通流程、实时进度查看、分区报修。
            </div>
          </div>

          <div data-v-492dc475=""
               class="see-space"
               id="160316181292425112"
               style="height: 20px;"></div>
          <div class="see-title"
               id="16031618361065312">
            <div class="title">
              <!---->
              <div title="价值"
                   class="text1">
                价值
              </div>
            </div>
            <div class="sub-title">
              基于标识解析数字化保修实现一站式智能管理减少设备维修申报、审批、实时的繁琐流程环节，提升效率，确保设施设备高效运作，降低后勤管理成本。
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