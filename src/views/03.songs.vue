<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" @click="name=0" :class="{active:name==0}">全部</span>
      <span class="item" @click="name=7" :class="{active:name==7}">华语</span>
      <span class="item" @click="name=96" :class="{active:name==96}">欧美</span>
      <span class="item" @click="name=8" :class="{active:name==8}">日本</span>
      <span class="item" @click="name=16" :class="{active:name==16}">韩国</span>
    </div>
    <!-- 底部的table -->
    <table class="el-table playlit-table">
      <thead>
        <th></th>
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </thead>
      <tbody>
        <tr class="el-table__row" v-for="(item,index) in songslist" :key="index">
          <td>{{index+1}}</td>
          <td>
            <div class="img-wrap">
              <img :src="item.album.picUrl" alt="" />
              <span class="iconfont icon-play" @click="playMusic(item.id,item.album.picurl)"></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{item.name}}</span>
                <span class="iconfont icon-mv" v-if="item.mvid !== 0 " @click="playmv(item.mvid)"></span>
              </div>
            </div>
          </td>
          <td>{{item.artists[0].name}}</td>
          <td>{{item.album.name}}</td>
          <td class="td1">{{item.bMusic.playTime | dataFormat }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'songs',
  data() {
    return {
      songslist: [],
      name:0,
    }
  },
 created () {
 this.getSongsList()
  },
  watch : {
    name () {
      this.getSongsList()
    }
  },
  methods : {
      async getSongsList () {
        const {data: res } = await this.$http.get(`https://autumnfish.cn/top/song`, {
          params: { type: this.name}
        })
        console.log(res);
        this.songslist = res.data
      },
      async playMusic (id) {
      const { data: res } = await this.$http.get('https://autumnfish.cn/song/url', {
        params: { id }
      })
      // console.log(res)
      this.$parent.musicUrl = res.data[0].url
    },
    playmv(id) {
      this.$router.push(`/mv?id=${id}`)
    }
  }
};
</script>

<style >
.td1{
  width: 100px;
}
</style>
