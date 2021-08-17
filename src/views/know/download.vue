<template>
  <!--中间主要内容-->
  <div class="page">
    <!---->
    <!--        <div class="banner" style="background-image: url(images/zsk.png);background-size: cover">-->
    <!-- style="background-image: url(images/tiao_web.png);background-size: cover" -->
    <!--        </div>-->
    <div class="banner"
         :style="{backgroundImage:'url('+images+')',
         backgroundSize:'cover',marginTop: 0+'px'}">

    </div>
    <div class="page-box">
      <div class="page-box1">
        <div class="header-top">
          <div data-v-25f3923d=""
               class="headercase">
            <p data-v-25f3923d=""
               class="title"
               style="
  display: block;
               
               ">
              工业互联网标识文档
            </p>
          </div>
        </div>

        <!--                <div class="header-top">-->
        <!--                    <div data-v-25f3923d="" class="headercase"><p data-v-25f3923d="" class="title">-->
        <!--                        工业互联网标识解析相关文档-->
        <!--                    </p>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!--                <div data-v-0f52fa2f="" class="row" >-->
        <!--                    <div class=" col-md-4 col-sm-4">-->
        <!--                    <div class="rowinfo">-->
        <!--                       <input type="text" id="name" placeholder="请输入关键字" class="input_com1 border-a name" autocomplete="off">-->
        <!--                        <input type="button"-->
        <!--                               value="搜索" class="input_com2 border-a login-btn2 join" />-->
        <!--                    </div>-->
        <!--                    </div>-->
        <!--                </div>-->

        <div>
          <div data-v-0f52fa2f=""
               class="section5__content">
            <div data-v-0f52fa2f=""
                 class="case__content__main">

            </div>
          </div>

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
</template>

<script>
export default {
  data () {
    return {
      images: require('../../assets/images/tiao_web.png'),

    }
  },
  mounted () {
    this.$nextTick(() => {
      $("a.ant-anchor-link-title").click(function (event) {
        var thisObj = event.target.parentNode;
        var tags = $('.ant-anchor-link');
        for (var i = 1; i < tags.length; i++) {
          $(tags[i]).removeClass('ant-anchor-link-active')
        }
        $(thisObj).addClass('ant-anchor-link-active');
        $(thisObj).siblings().removeClass('ant-anchor-link-active');
        $("html,body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 113 + "px"
        }, {
          duration: 500,
          easing: "swing"
        });
        return false;
      });

      showpdf(null)

      $(".join").click(function () {
        var search = $("#name").val()
        showpdf(search)
      })

      function showpdf (key) {
        var caseArray = [];
        var caseArrayval = [{
          "id": "1",
          "name": "《工业互联网标识解析标准化白皮书.pdf",
          "img": "download/《工业互联网标识解析标准化白皮书.pdf",
        }, {
          "id": "2",
          "name": "标识解析产品追溯白皮书.pdf",
          "img": "download/标识解析产品追溯白皮书.pdf",
        }, {
          "id": "3",
          "name": "标识解析二级节点建设导则.pdf",
          "img": "download/标识解析二级节点建设导则.pdf",
        }, {
          "id": "4",
          "name": "垂直行业建设白皮书.pdf",
          "img": "download/垂直行业建设白皮书.pdf",
        }, {
          "id": "5",
          "name": "工业大数据创新竞赛白皮书.pdf",
          "img": "download/工业大数据创新竞赛白皮书.pdf",
        }, {
          "id": "6",
          "name": "工业大数据分析指南.pdf",
          "img": "download/工业大数据分析指南.pdf",
        }, {
          "id": "7",
          "name": "工业互联网安全解决方案.pdf",
          "img": "download/工业互联网安全解决方案.pdf",
        }, {
          "id": "8",
          "name": "工业互联网安全事态白皮书.pdf",
          "img": "download/工业互联网安全事态白皮书.pdf",
        }, {
          "id": "9",
          "name": "工业互联网平台白皮书.pdf",
          "img": "download/工业互联网平台白皮书.pdf",
        }, {
          "id": "10",
          "name": "工业企业数字资产管理调研报告.pdf",
          "img": "download/工业企业数字资产管理调研报告.pdf",
        }, {
          "id": "11",
          "name": "工业区块链白皮书.pdf",
          "img": "download/工业区块链白皮书.pdf",
        }, {
          "id": "12",
          "name": "工业数据采集产业报告.pdf",
          "img": "download/工业数据采集产业报告.pdf",
        }
        ];

        if (key == null || key == "") {
          caseArray = caseArrayval.concat()
        } else {
          //如果输入了关键字循环排查
          caseArrayval.forEach(function (item) {
            if (item['name'].indexOf(key) > -1) {
              caseArray.push(item)
            }
          })
        }
        let img = require('../../assets/images/shu1.png');
        var cutomerhtml = ""
        for (var i = 0; i < caseArray.length; i++) {
          cutomerhtml += '<div data-v-0f52fa2f="" class="section5__content__main__item" style="padding:0px;flex: 0 0 22%;width: 25%;"><a href="' + caseArray[i]['img'] + '"\n' +
            '                             class="downfile" style="width: 100%; height: auto; display: block; flex-direction: row; margin:0 "><img\n' + '                                    src="' + img + '"\n' +
            '                                    class="section5__content__main__item--image" style="width: 158px;height: 213px;margin: 0 auto 0 13px; ">\n' +
            '                            </a>\n' +
            '<div class="section5-title" style="height: 70px;"><span class="section5-title-content" style="padding-top: 15px;padding-right: 5px; display: block; width: 100%; text-align: center;height: 100%;color: #333333; ">' + caseArray[i]['name'] + '</span></div>\n' +
            '<div class="section5-title-download" style="height: 70px;line-height: 70px;"><a style="display: block;width: 120px; height: 40px; font-size: 16px; line-height: 40px; color: #fff;border: none;  background: linear-gradient(90deg, #D1201D 0%, #E13F27 100%); border-radius: 4px;    margin: 20px auto;" href="' + caseArray[i]['img'] + '"\n' +
            '                             class="downfilebutton "><span class="section5-title-content-download" style="display: block; width: 100%; text-align: center;    height: 100%;    color: #fff;">下载</span></a></div>\n' +
            '                            </div>'
        }
        $(".case__content__main").html("")
        $(".case__content__main").append(cutomerhtml)
      }
    })


  }
}
</script>

<style scoped  src="../../assets/css/download.css">
</style>


<style lang="less" scoped>
/deep/ .section5__content__main__item:hover {
  transform: unset;
}
</style>