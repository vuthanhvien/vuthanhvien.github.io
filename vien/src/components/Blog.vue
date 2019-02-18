<template>
  <div class="blog container">
    <div class="row">
      <div class="col-md-8">
        <div class="blog-detail">
          <div class="content">
            <p class="hashtag">#Programming</p>
            <h5>Why We Trust Apple and Google More Than Our Governments</h5>
            <p class="time">Posted 5 min ago</p>
          </div>
          <div class="overflow"/>
        </div>
      </div>
      <div class="col-md-4">
        <div class="blog-detail">
           <div class="content">
            <p class="hashtag">#Travel</p>
            <h5>Why We Trust Apple and Google</h5>
            <p class="time">Posted 8 min ago</p>
          </div>
          <div class="overflow"/>
        </div>
      </div>
      <div class="col-md-5">
        <div class="blog-detail">
          <div class="overflow"/>
        </div>
      </div>
      <div class="col-md-7">
        <div class="blog-detail">
          <div class="overflow"/>
        </div>
      </div>
      <div class="col-md-6">
        <div class="blog-detail">
          <div class="overflow"/>
        </div>
      </div>
       <div class="col-md-6">
        <div class="blog-detail">
          <div class="overflow"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    msg: String
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
    background: url(https://dgqoanz82argk.cloudfront.net/images/content/5/7/v1/57769.jpg);
    .content {
      z-index: 1;
      position: relative;
      .hashtag {
        font-weight: bold;
        color: white;
      }
      .time{
        color: white;
        opacity: 0.7;
        font-size: 12px;
      }
      h5 {
        color: white;
        cursor: pointer;
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
      background: #c9365978;
      pointer-events: none;
      z-index: 0;
    }
  }
}
</style>
