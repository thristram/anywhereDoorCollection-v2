<template>
  <div id="home" style="display:flex;width: 100%">
    <div id="text">
      <div id="title">
        <a href=index.html>Anywhere<br>Door<br>Collection </a>
      </div>
      <div id="create">
        <a href=https://forms.gle/eczLqUnw4aAkxhnW7>➕ Create Your Own Door</a>
      </div>
      <ul id="nav">
        <li id="under"><a href="#">feature</a></li>
        <li><a href="#">new</a></li>
      </ul>
      <div id="question">
        <img src="@/assets/img/about1.png" alt="about">
      </div>
    </div>
    <div id="drag-container" :style="oboxStyle">
      <div id="spin-container" :style="{
        width: imgWidth +'px',
        height: imgHeight +'px',
        animationPlayState: spinStyle,
        animation: autoRotate ? `${rotateSpeed > 0 ? 'spin' : 'spinRevert'} ${Math.abs(rotateSpeed)}s infinite linear` : null }">
        <router-link :to="'/tunnel/' + door.id" v-for="(door, i) in doors"  :key="door.id" :style="doorStyles[i]">
          <img src="@/assets/img/new/door1.png" :alt="'door' + door.door">
          <p>The Door of 3L Water</p>
        </router-link>

        <p>/about/
          <br>
          Anywhere Door Collection is a virtual public space that treasures and shares stories of place. Through an interactive digital landscape that transports viewers to crowd-sourced locations revealed behind random doors, this project channels the desires, hopes and memories of others, and features specific sites of longing.
          <br>
          <br>
          If you could use a hypothetical “anywhere door” to transport yourself to any place you choose, where you would like to go?
        </p>
      </div>
      <div id="ground" :style="{ width: radius * 3  +'px', height: radius * 3  +'px' }">

      </div>
    </div>
  </div>


</template>

<script>

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    data() {
      return {
        doors: [],
        doorStyles: [],
        w: 0,
        h: 0,
        radius: 0,
        autoRotate:  true,
        rotateSpeed: -200,
        imgWidth: 0,
        imgHeight: 0,


        sX: 0,
        sY: 0,
        nX: 0,
        nY: 0,
        desX: 0,
        desY: 0,
        tX: 0,
        tY: 10,


        playSpin: false,
        oboxStyle: "",

        timer: null
      }
    },
    mounted() {
      let that = this
      this.init()
      this.getDoors();
      setTimeout(function () {
        that.generateDoorStyle()
        that.playSpin = true
      }, 100);

    },
    computed:{
      spinStyle(){
        return this.playSpin ? 'running' : 'paused'
      }
    },
    methods: {
      init(){
        let that = this;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.imgWidth = this.w * 0.06;
        this.imgHeight = this.w * 0.07;
        this.radius = this.w / 2.4;

        document.onpointerdown = function (e) {
          clearInterval(that.timer);
          e = e || window.event;
          that.sX = e.clientX;
          that.sY = e.clientY;

          this.onpointermove = function (e) {
            e = e || window.event;
            that.nX = e.clientX;
            that.nY = e.clientY;
            that.desX = that.nX - that.sX;
            that.desY = that.nY - that.sY;
            that.tX += that.desX * 0.1;
            that.tY += that.desY * 0.1;
            that.applyTransform();
            that.sX = that.nX;
            that.sY = that.nY;
          };

          this.onpointerup = function (e) {
            that.timer = setInterval(function () {
              that.desX *= 0.95;
              that.desY *= 0.95;
              that.tX += that.desX * 0.1;
              that.tY += that.desY * 0.1;
              that.applyTransform();
              that.playSpin = false
              if (Math.abs(that.desX) < 0.5 && Math.abs(that.desY) < 0.5) {
                clearInterval(that.timer);
                that.playSpin = true;
              }
            }, 17);
            this.onpointermove = this.onpointerup = null;
          };

          return false;
        };

        document.onmousewheel = function(e) {
          e = e || window.event;
          var d = e.wheelDelta / 20 || -e.detail;
          that.radius += d;
          that.generateDoorStyle(1);
        };
      },
      getDoors(){
        for(let i=0; i< 20; i++){
          this.doors.push({
            id: i,
            tunnel: i + 1,
            door: i + 1,
            text: "The Door of 3L Water"
          })
          this.doorStyles.push({})
        }
      },
      generateDoorStyle(delayTime){
        for(let i in this.doors){
          this.doorStyles[i] = {
            transform: "rotateY(" + (i * (360 / this.doors.length)) + "deg) translateZ(" + this.radius + "px)",
            transition: "transform 1s",
            transitionDelay: delayTime || (this.doors.length - i) / 10 + "s"
          };

        }

      },
      applyTransform() {

        if(this.tY > 180) this.tY = 180;
        if(this.tY < 0) this.tY = 0;

        this.oboxStyle = {transform: "rotateX(" + (-this.tY) + "deg) rotateY(" + (this.tX) + "deg)"};
        console.log(this.oboxStyle)
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

