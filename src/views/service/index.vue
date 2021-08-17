<template>
  <div>
    <!--中间主要内容-->

    <!--banner轮播图-->
    <div class="page">
      <div class="banner"
           style="background-image: url(images/service1.jpg);">
      </div>
    </div>

    <!--banner轮播图-->
    <div class="case-container">

      <div data-v-10e9d1ae=""
           data-v-6c813a88="">
        <div data-v-10e9d1ae=""
             class="labels_content">
          <div data-v-10e9d1ae=""
               class="category_name">
            <p data-v-10e9d1ae="">应用</p>
          </div>
          <div data-v-10e9d1ae=""
               class="labels"
               id="labels1">
          </div>
        </div>
        <!---->
      </div>
      <div data-v-10e9d1ae=""
           data-v-6c813a88="">
        <div data-v-10e9d1ae=""
             class="labels_content">
          <div data-v-10e9d1ae=""
               class="category_name">
            <p data-v-10e9d1ae="">行业</p>
          </div>
          <div data-v-10e9d1ae=""
               class="labels"
               id="labels2">

          </div>
          <!---->
        </div>
        <!---->
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
           style="height: 100px;"></div>
    </div>

    <!--中间主要内容-->
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
      var application = [{ "id": "1", "name": "一物一码" }, { "id": "2", "name": "防伪溯源" }, {
        "id": "3",
        "name": "全生命周期管理"
      }, { "id": "4", "name": "市场营销数字化" }, { "id": "5", "name": "售后服务" }, { "id": "6", "name": "设备化管理" }, {
        "id": "7",
        "name": "办公数字化管理"
      }, {
        "id": "8",
        "name": "供应链管理"
      }, {
        "id": "9",
        "name": "客户数字化管理"
      }, {
        "id": "10",
        "name": "设备资产管理"
      }, {
        "id": "11",
        "name": "数字化保修"
      }]
      var labels1 = "<p class=\"label_item active\" data-aid=\"0\"><span class=\"labelContent\"><span class=\"font\">全部</span>\n" +
        "\n" +
        " </span></p>"
      for (var i = 0; i < application.length; i++) {
        labels1 += " <p class=\"label_item\" data-aid=\"" + application[i]['id'] + "\"><span class=\"labelContent\"><span class=\"font\">" + application[i]['name'] + "</span>\n" +
          "                            <!---->\n" +
          "                        </span></p>\n"
      }
      labels1 += "<div data-v-10e9d1ae=\"\" class=\"clear\"></div>"
      $("#labels1").append(labels1)


      var profes = [{ "id": "1", "name": "通用行业" }, { "id": "2", "name": "专用行业" }]
      var labels2 = "<p class=\"label_item active\" data-pid=\"0\"><span class=\"labelContent\"><span class=\"font\">全部</span>\n" +
        "\n" +
        " </span></p>"
      for (var i = 0; i < profes.length; i++) {
        labels2 += " <p class=\"label_item\" data-pid=\"" + profes[i]['id'] + "\"><span class=\"labelContent\"><span class=\"font\">" + profes[i]['name'] + "</span>\n" +
          "                            <!---->\n" +
          "                        </span></p>\n"
      }
      labels2 += "<div data-v-10e9d1ae=\"\" class=\"clear\"></div>"
      $("#labels2").append(labels2)

      var aid = 0;
      var pid = 0;
      var caseArray = [{
        "id": "1",
        "name": "一物一码",
        "aid": ["1"],
        "pid": "1",
        "href": "service/ywym.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced1.png'),
      }, {
        "id": "2",
        "name": "防伪溯源",
        "aid": ["2"],
        "pid": "1",
        "href": "service/fwsy.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced2.png'),
      }, {
        "id": "3",
        "name": "全生命周期管理",
        "aid": ["3"],
        "pid": "1",
        "href": "service/smzq.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced4.png'),
      }, {
        "id": "4",
        "name": "市场营销数字化",
        "aid": ["4"],
        "pid": "1",
        "href": "service/szyx.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced3.png')
      }, {
        "id": "5",
        "name": "售后服务",
        "aid": ["5"],
        "pid": "1",
        "href": "service/shfw.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced5.png'),
      }, {
        "id": "6",
        "name": "设备资产管理",
        "aid": ["6"],
        "pid": "1",
        "href": "service/sbzc.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced9.png'),
      }, {
        "id": "7",
        "name": "办公数字化管理",
        "aid": ["7"],
        "pid": "1",
        "href": "service/bgsz.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced7.png'),
      }, {
        "id": "8",
        "name": "供应链管理",
        "aid": ["8"],
        "pid": "1",
        "href": "service/gylg.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced8.png'),
      }, {
        "id": "9",
        "name": "客户数字化管理",
        "aid": ["9"],
        "pid": "1",
        "href": "service/khsz.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced6.png'),
      }, {
        "id": "10",
        "name": "数字化保修",
        "aid": ["10"],
        "pid": "1",
        "href": "service/szbx.html",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced10.png'),
      }
      ];
      var filterArray = [];
      var caseList = []

      $('#labels1').on('click', '.label_item .labelContent', function (event) {
        tabSwitch('active');
        aid = event.target.parentNode.parentNode.dataset.aid;
        pid = $('#labels2 .active').attr("data-pid")
        filter();
      });
      $('#labels2').on('click', '.label_item .labelContent', function (event) {
        tabSwitch('active');
        pid = event.target.parentNode.parentNode.dataset.pid;
        aid = $('#labels1 .active').attr("data-aid")
        filter();

      });
      filter()

      function filter () {
        var cutomerhtml = ""
        $(".case__content__main").html("")
        caseList = [];
        filterArray = [];
        if (aid == "0" || pid == "0") {
          //如果有个选择全部，则数组内有全部的值，判断另一个刷选条件，如果不存在则去除
          filterArray = caseArray.concat();
          filterArray = filterArray.filter((item) => {
            if (pid == 0 && aid != 0) {
              return item.aid.indexOf(aid) > -1
            } else if (pid != 0 && aid == 0) {
              return item.pid == pid
            } else {
              return filterArray
            }
          });
        } else {
          caseArray.forEach(function (item, index) {
            if (item.pid == pid && item.aid.indexOf(aid) > -1) {
              filterArray.push(item)
            }

          })
        }

        filterArray.forEach(function (item, index) {
          cutomerhtml += '  <div data-v-0f52fa2f="" class="section5__content__main__item" style="padding: 16px 24px"><a href="' + item.href + '"\n' +
            '                        style="width: 100%;height: auto;display: flex"><img style="display:inline-block;width:30%;max-width: 100%;border: 0;" src="' + item.img + '"\n' +
            '                            class="section5__content__main__item--image_service">\n' +
            '                        <div data-v-0f52fa2f="" style="flex-direction: column;margin-left: 10px;" class="section5__content__main__item--block1">\n' +
            '                            <div data-v-0f52fa2f="" class="section5__content__main__item--block1--left"><span class="servicetitle" style="font-size: 18px;">' + item.name + '</span></div>\n' +
            '                            <div data-v-0f52fa2f="" class="section5__content__main__item--block1--left"><span>' + item.hy + '</span></div>\n' +
            '                            <div data-v-0f52fa2f="" class="section5__content__main__item--block1--left servicedetail" style="margin-top: 10px; color: #007aff; font-size: 16px;"><span>查看详情</span></div>\n' +
            '                        </div>\n' +
            '                    </a>\n' +
            '                </div>'
        })

        $(".case__content__main").append(cutomerhtml)
      }

      //数组去重
      function unique (arr) {
        var newA = [];
        var idArray = [];
        arr.forEach(key => {
          if (idArray.indexOf(key.id) < 0) { //遍历newA是否存在key，如果存在key会大于0就跳过push的那一步
            newA.push(key);
            idArray.push(key.id)
          }
        });
        return newA;
      }

      function tabSwitch (selectActive) {
        var thisObj = event.target.parentNode.parentNode
        // 绑定事件到父节点
        $(thisObj).addClass(selectActive);
        $(thisObj).siblings().removeClass(selectActive);
      }
    })
  }
}
</script>
<style  scoped>
.section5__content__main__item {
  padding: 16px 24px;
}
</style>

<style scoped  src="../../assets/css/customer.css">
</style>
<style scoped  src="../../assets/css/service-new.css">
</style>
