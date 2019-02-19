<template>
  <div class="home ">
    <Header/>
    <Intro/>
    <Blog/>

       <Pagination :pageIndex="pageIndex" :total="3" :onChangePage="onChangePage" />

    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";
import Pagination from '@/components/Pagination.vue'


export default {
  name: "home",
  components: {
    Intro,
    Header,
    Footer,
    Blog,
    Pagination
  },
  data() {
    return {
      pageIndex: 1
    }
  },
  methods: {
    onChangePage: function (params) {
      this.pageIndex = params;
    }
  },
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif!important;
  background: white;
}
p,a,span{
  font-size: 14px;
}
*:focus{
  outline: 0!important;
}
</style>

