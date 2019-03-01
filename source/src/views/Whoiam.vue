<template>
  <div class="resume">
    <div class="cover" ></div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 info" >
          <br>
          <br>
          <h5>Hi, I'm Vien Vu,<span> a developer and UI/UX designer for 4 year, I can work with a team or alone. I willing for new language and new challenge</span></h5>
          <br>
          <br>
          <h4>My education</h4>
          <hr>
          <div>
            <p>
              <strong>Computer engineering Engineers</strong>
            </p>
            
            <p style="font-size: 13px">University of technology HCM<br> <span style="font-size: 11px">(Oct-2010 - May-2015)</span></p>
          </div>
          <div>
            <p>
              <strong>Degree Advanced designer</strong>
            </p>
            
            <p style="font-size: 13px"  >University of science HCM<br> <span style="font-size: 11px">(Oct-2015 - Apr-2016)</span></p>
          </div>
          <br>
          <br>
          <h4>My passions</h4>
          <hr>
          <br>
          <br>
        </div>
        <div class="col-md-9">
          <br>
          <br>
          <h4 class="exp-title">WORK EXPERIENCE</h4>
          <br>
          <div class="timeline">
            <div class="item">
              <p class="date">Apr-2018 - Present</p>
              <div class="content">
              <h6><strong>GNT Việt Nam</strong></h6>
              <br>
              <br>
              <br>
              </div>
            </div>
            <div class="item">
              <p class="date">Apr-2017 - Apr-2018 (1 year)</p>
              <div class="content">
              <h6><strong>Habiro Company</strong></h6>
              <p>Software Engineer (Full time)</p>
              <p>- Make frontend for website (learn about angularjs, reactjs, 3th js library)</p>
              <ul>
                <li>Make template for module web application</li>
                <li>Make module calendar. Edit, create, delete calendar. Sync calendar with device</li>
                <li>Make module project.Manage work, edit, create, delete work,project (Folow Jira)</li>
            </ul>
            <p>- Make frontend for android and ios app  (learn react-native, javascript, Android-Studio, Xcode)</p>
              <ul>
                <li> Build React-native app</li>
                <li> HR app (manage holiday-day, request holiday) </li>
                <li> Channel app (Chat 1vs1 and group chat, manage feeds, manage todo)</li>
            </ul>
              </div>
              <br>
              <br>
              <br>
            </div>
             <div class="item">
              <p class="date">Apr-2015 - Apr-2017 (2 years)</p>
              <div class="content">
              <h6><strong>Antking Company</strong></h6>
              <br>
              <br>
              <br>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-2">
          <h4 >My skills</h4>
          <div class="skill" v-for="skill of skills" :key="skill.id">
            <p><strong>{{skill.title}}</strong></p>
          </div>
        </div> -->
      </div>
    </div>
  <br>
  <br>
  <br>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      skills: [{ id: "html", title: "Html", img: "" }]
    };
  }
};
</script>
<style scoped lang="scss">
.timeline {
  .item {
    padding-left: 40px;
    
    position: relative;
    .content{
      padding-left: 15px;
    }
    .date{
      background: white;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-size: 13px;
      font-weight: 500;
      padding: 5px 15px;
      position: relative;
      &:before{
        content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-right: 10px white solid;
    border-top: 10px transparent solid;
    border-bottom: 10px transparent solid;
    left: -10px;
      }
    }
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: #c93659;
      position: absolute;
      left: 17px;
      top: 11px;
    }
    &:after {
      content: "";
      width: 2px;
      background: #c93659;
      position: absolute;
      height: 100%;
      left: 21px;
      top: 16px;
    }
    &:last-child {
      &:after {
        width: 0;
      }
    }
  }
}
.info {
  background: #c93659;
  color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
.cover {
  background: url(https://external-preview.redd.it/0H5OoJGEJBKc9OIjCNwnXOxw7gCDdkAwwOpLc8uicLE.jpg?width=1024&auto=webp&s=092cd23bf9c2f58fd21cb3073aff13f69fe18241);
  min-height: 401px;
  background-size: cover;
  background-position: center;
}
h5 {
  // color: #ca3a5c;
  font-weight: bold;
  text-align: justify;
  span {
    font-weight: normal;
    // color: #555;
  }
}
.exp-title {
  font-weight: bold;
  // color: #ca3a5c;
}
</style>

