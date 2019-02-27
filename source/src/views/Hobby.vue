<template>
  <div class="home ">
    <Header/>
   <br>
    <Blog :data="blogs"/>
    <Pagination :pageIndex="pageIndex" :total="total" :onChangePage="onChangePage"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Blog from "@/components/Blog.vue";
import Pagination from "@/components/Pagination.vue";
import { getSearchPosts } from "@/service.js";

export default {
   components: {
    Header,
    Footer,
    Blog,
    Pagination
  },
  data() {
    return {
      keySearch: "",
      blogs: [],
      pageIndex: 1,
      total: 0
    };
  },
  methods: {
    onChangePage() {},
    doSearch() {
      this.keySearch = 'hobby'
      const that = this;
      console.log("doSearch");
      getSearchPosts(this.pageIndex, this.keySearch).then(data => {
        that.blogs = [];
        const dataArr = data.list;
        console.log("getSearchPosts >>>>>>>>>>>>>", data);
        that.total = data.total  / 20;
        dataArr.map(doc => {
          that.blogs.push({
            id: doc.id,
            ...doc
          });
        });
      });
    }
  },
  created() {
    this.doSearch();
  }
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

