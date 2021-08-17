<template>
  <!--中间主要内容-->
  <div class="page">
    <!---->
    <div class="banner"
         :style="{backgroundImage:'url('+images+')',
       }">

    </div>
    <div class="page-box">
      <div class="page-box1">
        <div class="header-top">
          <router-link to="/joinus">
            <a class="bannerjoin"></a>
          </router-link>
        </div>
        <div>
          <div data-v-492dc475=""
               class="see-space"
               id="16030992342631"
               style="height: 50px;"></div>
          <div class="see-title"
               id="16030992424102">
            <p class="sub-title">
              <strong>简介：</strong>
            </p>
            <p class="sub-title">
              黑龙江省工业信息化发展中心的前身为黑龙江省电子技术研究所，是黑龙江省工业和信息化厅直属事业单位，也是唯一省属电子信息类科研院所。
            </p>
            <p class="sub-title">
              <strong>职能范围：</strong>
            </p>
            <p class="sub-title">
              承担工业信息安全领域的技术研发、政策研究、信息安全检查、宣贯、态势感知、风险监测预警、信息安全风险评测、应急处置、信息安全认证等工业信息安全方面相关工作；承担我省两化融合推广指导服务工作。
            </p>
            <p class="sub-title">
              <strong>
                资质、业务能力及开展的工作：
              </strong>
            </p>
            <p class="sub-title">
              在省工信厅和省通信管理局的指导下，承担工信部2020年工业互联网创新发展工程-工业互联网标识解析二级节点（综合型应用服务平台）-产业集群应用服务平台建设；
            </p>
            <p class="sub-title">
              搭建了黑龙江省工业信息安全态势感知平台，是工信部“国家工业信息安全态势感知平台”在黑龙江省的唯一接口，对我省工业企业进行信息安全风险监测、预警、通报。
            </p>
            <p class="sub-title">
              工信部国家工业信息安全发展研究中心颁发的“国家工业信息安全态势感知平台”指定我中心为黑龙江省唯一的技术支撑机构，是全国六家技术支撑机构之一；
            </p>
            <p class="sub-title">
              国家工业信息安全产业发展联盟颁发的“国家工业信息安全应急服务单位”，指定我中心是全国十家工业信息安全应急服务单位之一；
            </p>
            <p class="sub-title">
              按照《中华人民共和国网络安全法》、《工业控制系统信息安全防护指南》、《工业控制系统信息安全事件应急管理工作指南》、《工业控制系统信息安全防护能力评估工作管理办法》、《工业控制系统信息安全三年行动计划》的要求，我中心在省工信厅指导下，已经启动了宣贯、检查、基础设施搭建、一库一网三平台等相关工作；
            </p>
            <p class="sub-title">
              我中心开展两化融合技术推广技术服务工作。
            </p>
            <p class="sub-title">
              从事两化融合、智能制造、网络技术基础研究。
            </p>

            <p class="sub-title">
              <strong>联系我们：</strong>
            </p>
            <p class="sub-title">
            <p id='container'></p>
            </p>
            <p class="sub-title">
              地址：黑龙江省哈尔滨市香坊区农林街副5号
            </p>
            <p class="sub-title">
              电话：0451-82147212
            </p>
          </div>

          <div data-v-492dc475=""
               class="see-space"
               id="1603164713875357"
               style="height: 100px;"></div>
        </div>
      </div>
    </div>
    <!---->
    <div data-v-6ea93a13=""
         class="backTop homePage__back"
         style="display: none;"><svg data-v-6ea93a13=""
           aria-hidden="true"
           class="svg-icon">
        <use xlink:href="#iconzhiding"></use>
      </svg></div>
  </div>
  <!--中间的主要内容-->

  <!--中间主要内容-->
</template>

<script>
export default {
  data () {
    return {
      images: require('../../assets/images/item.png'),

    }
  },
  mounted () {

    var map = new AMap.Map('container', {
      zoom: 12,
      center: [126.64156869975281, 45.7264]
    });
    // 地图初始化应该在地图容器div已经添加到DOM树之后
    var marker = new AMap.Marker({
      position: new AMap.LngLat(126.64156869975281, 45.7264),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '黑龙江省哈尔滨市香坊区农林街副5号'
    });
    map.add(marker);
  }
}
</script>

<style scoped  src="../../assets/css/news_detail.css">
</style>

<style scoped>
.page {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  min-width: 1280px;
  background: #f2f2f2;
  scroll-behavior: smooth;
  margin-top: 130px;
}
.banner {
  margin: 0px;
}
.see-title /deep/ .sub-title {
  margin-top: 10px;
}

/deep/ #container {
  width: 800px;
  height: 400px;
  margin: auto;
}
/deep/ .see-title /deep/ .sub-title {
  margin-top: 10px;
}
</style>