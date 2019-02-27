<template>
  <div class="search ">
    <Header/>
    <br>
    <br>
    <div class="container">
        <h2>Search for: <strong>{{keySearch}}</strong></h2>
    </div>
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

import { getSearchPosts } from "@/service.js";

export default {
  name: "search",
  components: {
    Header,
    Footer,
    Blog
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
      this.keySearch = this.$route.query.s;
      const that = this;
      console.log("doSearch");
      getSearchPosts(this.pageIndex, this.keySearch).then(data => {
        that.blogs = [];
        const dataArr = data.list;
        console.log("getSearchPosts >>>>>>>>>>>>>", data);
        that.total = data.total;
        dataArr.map(doc => {
          that.blogs.push({
            id: doc.id,
            ...doc
          });
        });
      });
    }
  },
  watch: {
    "$route.query.s"() {
      this.doSearch();
    }
  },
  created() {
    this.doSearch();
  }
};
</script>
<style lang="scss">
.search {
  h2 {
    color: #999;
    strong {
      color: #444;
    }
  }
}
</style>

