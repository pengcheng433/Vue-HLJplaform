<template>
  <div>
    <!--中间主要内容-->

    <!--banner轮播图-->
    <div class="page"
         style="margin-top:0px">
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
            <p :key="item.name"
               @click="chang(1,index)"
               :class="[index==select1?'active label_item':'label_item']"
               v-for="(item,index) in application"
               :data-aid="index"><span class="labelContent"><span class="font">{{item.name}}</span></span></p>
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
            <p v-for="(item,index) in profes"
               @click="chang(2,index)"
               :key="item.name"
               :class="[index==select2?'active label_item':'label_item']"
               :data-pid="index"><span class="labelContent"><span class="font">{{item.name}}</span>
              </span></p>
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
          <div data-v-0f52fa2f=""
               v-for="(item,index) in shwonapp"
               :index="index"
               class="section5__content__main__item"
               style="padding: 16px 24px">
            <router-link :to="'/service/'+item.href "> <a href=""
                 style="width: 100%;height: auto;display: flex">
                <img style="display:inline-block;width:30%;max-width: 100%;border: 0;"
                     :src="item.img"
                     class="section5__content__main__item--image_service">

                <div data-v-0f52fa2f=""
                     style="flex-direction: column;margin-left: 10px;"
                     class="section5__content__main__item--block1">
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left"><span class="servicetitle"
                          style="font-size: 18px;"> {{item.name}}
                    </span></div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left"><span> {{item.hy}}</span></div>
                  <div data-v-0f52fa2f=""
                       class="section5__content__main__item--block1--left servicedetail"
                       style="margin-top: 10px; color: #007aff; font-size: 16px;"><span>查看详情</span></div>
                </div>
              </a>
            </router-link>
          </div>
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
  data () {
    return {
      caseArray: [{
        "id": "1",
        "name": "一物一码",
        "aid": ["1"],
        "pid": "1",
        "href": "ywym",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced1.png'),
      }, {
        "id": "2",
        "name": "防伪溯源",
        "aid": ["2"],
        "pid": "1",
        "href": "fwsy",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced2.png'),
      }, {
        "id": "3",
        "name": "全生命周期管理",
        "aid": ["3"],
        "pid": "1",
        "href": "smzq",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced4.png'),
      }, {
        "id": "4",
        "name": "市场营销数字化",
        "aid": ["4"],
        "pid": "1",
        "href": "szyx",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced3.png')
      }, {
        "id": "5",
        "name": "售后服务",
        "aid": ["5"],
        "pid": "1",
        "href": "shfw",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced5.png'),
      }, {
        "id": "6",
        "name": "设备资产管理",
        "aid": ["6"],
        "pid": "1",
        "href": "sbzc",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced9.png'),
      }, {
        "id": "7",
        "name": "办公数字化管理",
        "aid": ["7"],
        "pid": "1",
        "href": "bgsz",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced7.png'),
      }, {
        "id": "8",
        "name": "供应链管理",
        "aid": ["8"],
        "pid": "1",
        "href": "gylg",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced8.png'),
      }, {
        "id": "9",
        "name": "客户数字化管理",
        "aid": ["9"],
        "pid": "1",
        "href": "khsz",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced6.png'),
      }, {
        "id": "10",
        "name": "数字化保修",
        "aid": ["10"],
        "pid": "1",
        "href": "szbx",
        "hy": "通用行业",
        "img": require('../../assets/images/serviced10.png'),
      }
      ],
      application: [{ "id": "0", "name": "全部" }, { "id": "1", "name": "一物一码" }, { "id": "2", "name": "防伪溯源" }, {
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
      }],
      profes: [{ "id": "0", "name": "全部" }, { "id": "1", "name": "通用行业" }, { "id": "2", "name": "专用行业" }],
      select1: "0",
      select2: "0"
    }
  },
  methods: {
    getData () {
      let filterArray = []
      if (this.select1 == 0 || this.select2 == 0) {
        //如果有个选择全部，则数组内有全部的值，判断另一个刷选条件，如果不存在则去除
        filterArray = this.caseArray.concat();

        filterArray = filterArray.filter((item) => {
          if (this.select2.toString() == "0" && this.select1.toString() != "0") {
            return item.aid.indexOf(this.select1.toString()) > -1
          } else if (this.select2 != "0" && this.select1 == "0") {
            return item.pid == this.select2.toString()
          } else {
            return filterArray
          }
        });
        return filterArray
      } else {
        let _this = this
        this.caseArray.forEach(function (item, index) {
          if (item.pid == _this.select2.toString() && item.aid.indexOf(_this.select1.toString()) > -1) {
            filterArray.push(item)
          }
        })
        return filterArray
      }
    },
    chang (num, index) {
      if (num == 1) {
        this.select1 = index
      } else {
        this.select2 = index
      }
    }
  },
  computed: {
    shwonapp () {
      return this.getData()
    }
  },

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
