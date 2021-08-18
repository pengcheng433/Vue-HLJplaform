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
                     class="ant-anchor-link ant-anchor-link-active"><a href="#1603164375987259"
                     title="设备资产管理"
                     target="_self"
                     class="ant-anchor-link-title">设备资产管理</a>
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
               id="1603164375987259"
               style="height: 50px;"></div>
          <div class="see-title"
               id="1603161803991420">
            <div class="title">
              <!---->
              <div title="七、设备资产管理"
                   class="text">
                设备资产管理
              </div>
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="1603461829242520"
               style="height: 50px;"></div>
          <div class="see-title"
               id="1603161836006530">
            <div class="title">
              <!---->
              <div title="现状"
                   class="text1">
                现状
              </div>
              <div title="功能介绍"
                   class="text1-link trynow"
                   style="cursor: pointer;">
                <div id="link-text2">立即体验1</div>
                <div id="link-text1">立即体验2</div>
              </div>
            </div>
            <div class="sub-title">
              在工业互联网平台下，基于标识解析应用体系为企业设备实现数字化管理与资源最大化利用瞄准行业设备盘点、维保、台账、共享等资产管理领域暴露出的众多痛点。
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="16031618292425110"
               style="height: 20px;"></div>
          <div class="see-title"
               id="16031618360065310">
            <div class="title">
              <!---->
              <div title="问题"
                   class="text1">
                问题
              </div>
            </div>
            <div class="sub-title">
              解决繁重的盘点工作，耗时耗力问题。<br>
              解决设备种类和数量繁多，出入库的手工登记费时费力问题。<br>
              解决传统的电话报修很难协调，沟通成本相对比较高，效率低下问题。<br>
              解决设备档案管理混乱，设备缺乏全生命周期管控问题。<br>
              解决人员调岗造成工作交接混乱问题。<br>
              解决常年积累繁多文件和数据，不便于查找、更新、维护问题。<br>
              解决故障分析（故障根源分析，反复性故障）难以统计和系统化完成问题。
            </div>
          </div>
          <div data-v-492dc475=""
               class="see-space"
               id="1603161829242520"
               style="height: 20px;"></div>
          <div class="see-title"
               id="16031618360065320">
            <div class="title">
              <!---->
              <div title="价值"
                   class="text1">
                价值
              </div>
            </div>
            <div class="sub-title">
              提高设备使用效率。<br>
              减少非计划停机时间，减少生产损失。<br>
              把海量的维护数据变成维护改进分析的信息资源。
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