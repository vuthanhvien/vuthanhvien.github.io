<template>
  <div class="search ">
    <br>
    <br>
    <div>
      <div class="container">
        <h2>Search for: <strong>{{keySearch}}</strong></h2>
      </div>
      </div>
    <div class="container">
        <Category :data="blogs"/>
        <Pagination :pageIndex="pageIndex" :total="total" :onChangePage="onChangePage"/>
    </div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from "@/components/Category.vue";
import Pagination from "@/components/Pagination.vue";

import { getSearchPosts } from "@/service.js";

export default {
  name: "search",
  components: {
    Category,
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

