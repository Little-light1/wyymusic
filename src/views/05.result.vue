<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title">{{ $route.query.q }}</h2>
      <span class="sub-title">找到{{ total }}个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr
              class="el-table__row"
              v-for="(item, index) in resultlist"
              :key="index"
               @dblclick="playMusic(item.id)"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{ item.name }}</span>
                    <span class="iconfont icon-mv" v-if="item.mvid !==0" @click="playmv(item.mvid)"></span>
                  </div>
                  <span v-if="item.alias.length !== 0">{{
                    item.alias[0]
                  }}</span>
                </div>
              </td>
              <td>{{ item.artists[0].name }}</td>
              <td>{{ item.album.name }}</td>
              <td class="time">{{ item.duration | dataFormat }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="list">
        <div class="items">
          <div class="item" v-for="(item, index) in songlist" :key="index">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount }}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="MV" name="mv">
        <div class="items mv">
          <div class="item" v-for="(item, index) in mvlist" :key="index">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{ item.playCount }}</div>
              </div>
              <span class="time">{{ item.duration | dataFormat }}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="10"
      :limit="limit"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'result',
  data() {
    return {
      activeIndex: 'songs',
      total: 0,
      page: 1,
      limit: 10,
      resultlist: [],
      songlist: [],
      mvlist: [],
    }
  },
  created() {
    this.getResultList()
  },
  watch: {
    activeIndex() {
      let type = 1
      switch (this.activeIndex) {
        case 'songs':
          type = 1
          break
        case 'list':
          type = 1000
          break
        case 'mv':
          type = 1004
          break
        default:
          break
      }
      if (type == 1) {
        this.limit = 10
        this.page = 1
        this.getResultList()
      } else if (type == 1000) {
        this.limit = 10
        this.page = 1
        this.getSongList()
        // this.total = res.result.playlistCount
        // this.songlist = res.result.playlists
      } else {
        this.limit = 8
        this.page = 1
        this.getMvList()
        // this.total = res.result.mvCount
        // this.mvlist = res.result.mvs
      }
    },
  },
  methods: {
    async getResultList() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/search',
        {
          params: {
            keywords: this.$route.query.q,
            limit: this.limit,
            type: 1,
            offset: (this.page - 1) * this.limit,
          },
        }
      )
      console.log(res)
      this.total = res.result.songCount
      this.resultlist = res.result.songs
    },
    async getSongList() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/search',
        {
          params: {
            keywords: this.$route.query.q,
            limit: this.limit,
            type: 1000,
            offset: (this.page - 1) * this.limit,
          },
        }
      )
      this.total = res.result.playlistCount
      this.songlist = res.result.playlists
    },
    async getMvList() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/search',
        {
          params: {
            keywords: this.$route.query.q,
            limit: this.limit,
            type: 1004,
            offset: (this.page - 1) * this.limit,
          },
        }
      )
      // console.log(res)
      this.total = res.result.mvCount
      this.mvlist = res.result.mvs
    },
    async playMusic(id) {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/song/url',
        {
          params: { id },
        }
      )
      // console.log(res)
      this.$parent.musicUrl = res.data[0].url
    },
    handleCurrentChange(val) {
      this.page = val
      if (this.activeIndex === 'songs') {
        this.getResultList()
      } else if (this.activeIndex === 'list') {
        this.getSongList()
      } else {
        this.getMvList()
      }
    },
     playmv(id) {
      this.$router.push(`/mv?id=${id}`)
    }
  }
}
</script>

<style>
.time{
  width: 100px;
}
</style>
