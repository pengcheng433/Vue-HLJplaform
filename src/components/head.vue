<template>
  <!--头部开始-->
  <div class="header-fixed">
    <div class="header">
      <div class="header-container">
        <img src="../assets/images/logo2.png"
             alt=""
             class="img-fluid logo" />
      </div>
    </div>
    <div class="header1">
      <div class="category flex_box">
        <nav class="navbar navbar-expand-lg navbar-light">

          <div class="collapse navbar-collapse"
               id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/index">
                  <a class="nav-link"
                     href="index.html">首页 <span class="sr-only">(current)</span></a>
                </router-link>
              </li>

              <li class="nav-item dropdown">

                <a class="nav-link dropdown-toggle"
                   id="navbarDropdown"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                  应用头条
                </a>
                <div class="dropdown-menu"
                     aria-labelledby="navbarDropdown">
                  <router-link to="/new/news">
                    <a class="dropdown-item">标识动态</a>
                  </router-link>
                  <a class="dropdown-item"
                     href="#">会议活动</a>
                </div>
              </li>
              <li class="nav-item">
                <router-link to="/solution">
                  <a class="nav-link"
                     tabindex="-1">解决方案</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/customer">
                  <a class="nav-link"
                     tabindex="-1">经典案例</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/service">
                  <a class="nav-link"
                     tabindex="-1">产品服务</a>
                </router-link>

              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                   id="navbarDropdown1"
                   role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true"
                   aria-expanded="false">
                  知识库
                </a>
                <div class="dropdown-menu"
                     aria-labelledby="navbarDropdown1">
                  <router-link to="/know">
                    <a class="dropdown-item">标识科普</a>
                  </router-link>
                  <router-link to="/know/download">
                    <a class="dropdown-item">标识文件</a>
                  </router-link>

                </div>
              </li>
              <li class="nav-item">
                <router-link to="/person">

                  <a class="nav-link"
                     tabindex="-1">标识达人</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/item">

                  <a class="nav-link"
                     tabindex="-1">项目合作</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/joinus">
                  <a class="nav-link"
                     tabindex="-1">平台加盟</a>
                </router-link>

              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>

    <div class="header-bottom-line"></div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
export default {

}
</script>

<style>
</style>