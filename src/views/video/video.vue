<style>
  .item{
    height:400px;
    width: 450px;
  }
  *{
    outline:none;
  }
</style>
<template>
  <md-card>
    <md-card-media>
      <div class="item">
        <div class="player">
          <video-player class="vjs-custom-skin" :options="playerOptions">
          </video-player>
        </div>
      </div>
    </md-card-media>
  </md-card>
</template>
<script>
  require('videojs-flash')
  export default {
    data() {
      return {
        playerOptions: {
          sources: [{
            type: "rtmp/mp4",
            src: "rtmp://live.dragon-yuan.me/live_dragon/dragon?auth_key=1503137609-0-0-0fc8722d4e7af915b0524dd6f277b0bd"
          }],
          techOrder: ['flash'],
          autoplay: false,
          controls: true
        }
      }
    }
  }
</script>
