<template>
  <div>
    <div class="page"
         style="overflow-x: unset;">
      <!-- style="background-image: url(images/news.jpg);"> -->

      <!---->
      <div class="banner"
           :style="{background:'url('+images+')center center ',} ">

      </div>

    </div>
    <div class="case-list-container">
      <div data-v-0f52fa2f=""
           class="section5__content">

        <div data-v-0f52fa2f=""
             class="case__content__main">

        </div>
      </div>
      <div data-v-492dc475=""
           class="see-space"
           id="16030992342631"
           style="height: 100px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: require('../../assets/images/news.jpg'),

    }
  },
  mounted () {
    this.$nextTick(() => {
      let caseArray = [{
        "id": "1",
        "name": "《工业互联网标识管理办法》系列解读 | 高新民：《工业互联网标识管理办法》引领我国工业互联网持续纵深发展",
        "info": "加快推进我国工业互联网标识体系乃至工业互联网全局稳定健康发展",
        "href": "new1",
        "img": require('../../assets/images/newsgx1.jpg'),
        "time": "2020-12-28"
      }, {
        "id": "2",
        "name": "工业互联网新三年计划解读：标识解析增强行动筑牢生态支撑",
        "info": "《工业互联网创新发展行动计划(2021-2023年)》要求，标识解析体系创新赋能效应凸显，二级节点达到120个以上",
        "href": "new2",
        "img": require('../../assets/images/newsgx2.jpg'),
        "time": "2021-03-24"
      }, {
        "id": "3",
        "name": "今年工业和信息化标准工作要点发布  推进标识解析标准制定写入要点",
        "info": "“统筹推进工业互联网网络、标识解析、平台和安全标准制定，大力开展5G+工业互联网、工业互联网大数据中心的标准研究，支持工业互联网+安全生产等行业应用标准制定",
        "href": "new3",
        "img": require('../../assets/images/newsgx3.jpg'),
        "time": "2021-03-17"
      }
      ];

      filter()

      function filter () {
        let cutomerhtml = ""
        $(".case__content__main").html("")

        caseArray.forEach(function (item, index) {
          cutomerhtml += '  <div data-v-0f52fa2f="" class="section5__content__main__item"><router-link to="/new/' + item.href + '"> <a href="' + item.href + '"\n' +
            '                        style="width: 100%;height: auto;display: block"><img src="' + item.img + '"\n' +
            '                            class="section5__content__main__item--image"  alt="' + item.name + '">\n' +
            '                        <div data-v-0f52fa2f="" class="section5__content__main__item--block2" style="font-size: 20px;">' + item.name + '</div>\n' +
            '                        <div data-v-0f52fa2f="" class="section5__content__main__item--block3" >\n' +
            '                            ' + item.info + '</div>\n' +
            '                        <div data-v-0f52fa2f="" class="section5__content__main__item--line"></div>\n' +
            '                        <div data-v-0f52fa2f="" class="section5__content__main__item--block4">\n' +
            '                            <div data-v-0f52fa2f="" class="section5__content__main__item--block4--left">' + item.time + '</div>\n' +
            '                        </div>\n' +
            '                    </a>\n' +
            ' </router-link>\n' +
            '                </div>'
        })

        $(".case__content__main").append(cutomerhtml)
      }
    })
  }
}
</script>
<style scoped src="../../assets/css/index.css" ></style>
<style scoped>
.page {
  position: relative;
  width: 100%;
  min-width: 1280px;
  background: #f2f2f2;
  margin-top: 128px;
  height: 299px;
}
.banner {
  z-index: 0;
  width: 100%;
  height: 299px;
}
/* .section5__content__main__item--block2 {
  font-size: 20px;
} */
</style>


