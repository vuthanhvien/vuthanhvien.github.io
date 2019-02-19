<template>
  <div class="blog container">
    <div class="row">
      <div :class="'col-md-'+post.width" v-for="post of data" :key="post.id">
        <div class="blog-detail" :style="{background: `url(`+post.background+`)`}">
          <div class="content">
            <p class="hashtag">
              <router-link
                v-for="tag of post.tags"
                :key="tag"
                :to="{path: '/search', query: {s: tag}}"
              >#{{tag}}</router-link>
            </p>
            <router-link :to="'/post/'+post.id">
              <h5>{{post.title}}</h5>
            </router-link>
            <p class="time">Posted {{post.createdAt.seconds | formatDate}} by {{post.creator}}</p>
          </div>
          <div class="overflow" :style="{background: post.color}"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    data: Array
  },
  data() {
    return {
      paging: {
        index: 1,
        total: 15,
        limit: 20
      }
    };
  },
  watch: {
    data() {
      console.log(this.data);
      this.data.forEach(item => {
        item.tags = [];
        Object.keys(item).forEach(key => {
          if (key.indexOf("tag_") > -1) {
            item.tags.push(key.substring(4));
          }
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog {
  .blog-detail {
    margin-bottom: 20px;
    height: 300px;
    padding: 15px;
    background: #ffff0055;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding-top: 170px;
    // background: url(https://dgqoanz82argk.cloudfront.net/images/content/5/7/v1/57769.jpg);
    .content {
      z-index: 1;
      position: relative;
      .hashtag {
        font-weight: bold;
        color: white;
        a{
          color: white;
          margin-right: 5px;
        }
      }
      .time {
        color: white;
        opacity: 0.7;
        font-size: 12px;
      }
      h5 {
        color: white;
        cursor: pointer;
        font-size: 24px;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    img {
      width: 100%;
    }
    .overflow {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      pointer-events: none;
      opacity: 0.3;
      z-index: 0;
    }
  }
}
</style>
