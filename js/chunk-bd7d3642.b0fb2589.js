(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd7d3642"],{"2dc8":function(a,t,e){},4696:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home "},[e("Header"),e("br"),e("Blog",{attrs:{data:a.blogs}}),e("Pagination",{attrs:{pageIndex:a.pageIndex,total:a.total,onChangePage:a.onChangePage}}),e("Footer")],1)},o=[],c=e("cebc"),s=(e("cadf"),e("551c"),e("f751"),e("097d"),e("0418")),d=e("fd2d"),r=e("3d68"),i=e("1799"),l=e("ba5f"),h={components:{Header:s["a"],Footer:d["a"],Blog:r["a"],Pagination:i["a"]},data:function(){return{keySearch:"",blogs:[],pageIndex:1,total:0}},methods:{onChangePage:function(){},doSearch:function(){this.keySearch="travel";var a=this;console.log("doSearch"),Object(l["c"])(this.pageIndex,this.keySearch).then(function(t){a.blogs=[];var e=t.list;console.log("getSearchPosts >>>>>>>>>>>>>",t),a.total=t.total/20,e.map(function(t){a.blogs.push(Object(c["a"])({id:t.id},t))})})}},created:function(){this.doSearch()}},g=h,u=(e("ad4c"),e("2877")),f=Object(u["a"])(g,n,o,!1,null,null,null);t["default"]=f.exports},ad4c:function(a,t,e){"use strict";var n=e("2dc8"),o=e.n(n);o.a}}]);
//# sourceMappingURL=chunk-bd7d3642.b0fb2589.js.map