<template>
  <div class="home ">
    <Header/>
    <br>
    <Blog/>
    <Pagination :pageIndex="pageIndex" :total="5" :onChangePage="onChangePage "/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
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
    onChangePage : function (params) {
      this.pageIndex = params;
    }
  },
};
</script>
<style lang="scss">
body {
  font-family: "Cabin", sans-serif!important;
}
p,a,span{
  font-size: 14px;
}
</style>

