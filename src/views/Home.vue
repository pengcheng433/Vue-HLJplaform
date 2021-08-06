<template>
  <div>

    <Head />

    <router-view />
    <Footer />
    <!-- 欢迎使用Vue项目
          {{tip}}
        {{moduleTip}} -->
  </div>
</template>

<script>
import Head from "@/components/head.vue"
import Footer from "@/components/footer.vue"
export default {
  name: 'Home',
  components: {
    Head, Footer
  }
}
</script>
