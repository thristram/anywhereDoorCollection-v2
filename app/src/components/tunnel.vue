<template>
  <div class="tunnel" style="display: flex;width: 100%;height:100%">
    <!-- background image-->
    <div class="bg-image-wrapper">
      <div class="bg-image">
        <img src="@/assets/img/story/story1.png" alt="story">
      </div>
    </div>

    <!--Story Here -->

    <div class="container">
      <div class="center">
        <p> <a href="../story/story1.html">
          “I went there for traveling several years ago.  When I made a wish in front of the fountain, a stranger bumped me and the coin in my hand fell to the ground and disappeared. This is a regret to me so I want to go there again. ”
          <br>
          <br>
        </a>
        </p>

        <p id="name">
          BY NORA
        </p>

      </div>
    </div>



    <div class="a3d" style="--n: 17; --m: 5; --t: 1s; --ca: 0deg">

      <div class="ring" style="--j: 18">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 17">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 16">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 15">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 14">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 13">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 12">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 11">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 10">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 9">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 8">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 7">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 6">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>

      <div class="ring" style="--j: 5">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
      <div class="ring" style="--j: 4">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
      <div class="ring" style="--j: 3">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
      <div class="ring" style="--j: 2">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
      <div class="ring" style="--j: 1">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
      <div class="ring" style="--j: 0">
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
        <div class="segm"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped src="../assets/css/tunnel.css"></style>
<style scoped>

  :nth-child(-n + 20) >
  .segm {
    opacity: calc((var(--n) - var(--j) - 1)/var(--m));
    animation: fade var(--t) infinite
  }
  .segm:nth-child(2) { --ca: 90deg }
  .segm:nth-child(3) { --ca: 180deg }
  .segm:nth-child(4) { --ca: 270deg }
</style>
