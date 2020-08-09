<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <el-divider content-position="left">推荐歌单</el-divider>
      <div class="items">
        <div class="item" v-for="(item, index) in songslist" :key="index">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.name }}</span>
            </div>
            <img :src="item.picUrl" alt="" @click="playlists(item.id)" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- 最新音乐 -->
    <div class="news">
      <el-divider content-position="left">最新音乐</el-divider>
      <div class="items">
        <div class="item" v-for="(item, index) in newMusic" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play" @click="playMusic(item.id)"></span>
          </div>
          <div class="song-wrap">
            <span class="song-name">{{ item.name }}</span>
            <span class="singer">{{ item.song.artists[0].name }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <el-divider content-position="left">推荐MV</el-divider>
      <div class="items">
        <div class="item" v-for="(item, index) in mvlist" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <span class="iconfont icon-play"></span>
              <span class="num">{{ item.playCount }}</span>
            </div>
          </div>
          <div class="info-wrap">
            <span class="name">{{ item.copywriter }}</span>
            <br />
            <span class="singer">{{ item.artistName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discovery',
  data() {
    return {
      banners: [],
      songslist: [],
      newMusic: [],
      mvlist: [],
    }
  },
  async created() {
    this.getbanners()
    this.getsongslist()
    this.getnewMusic()
    this.getmvlist()
  },
  methods: {
    async playMusic(id) {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/song/url',
        {
          params: { id },
        }
      )
      this.$parent.musicUrl = res.data[0].url
    },
    async getbanners() {
      const { data: res } = await this.$http.get('https://autumnfish.cn/banner')

      this.banners = res.banners
    },
    async getsongslist() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/personalized',
        {
          params: { limit: 10 },
        }
      )
      this.songslist = res.result
    },
    async getnewMusic() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/personalized/newsong'
      )
      this.newMusic = res.result
    },
    async getmvlist() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/personalized/mv'
      )
      this.mvlist = res.result
    },
    playlists(id) {
      this.$router.push(`/playlist?q=${id}`)
    },
  },
}
</script>

<style>
.el-divider__text.is-left {
  font-size: 20px;
}
.num {
  color: black;
}
</style>
