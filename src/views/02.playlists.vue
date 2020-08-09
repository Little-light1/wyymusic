<template>
  <div class="playlists-container">
    <!-- 同步 -->
    <div class="top-card">
      <div class="icon-wrap">
        <img :src="songslist.coverImgUrl" alt="" />
      </div>
      <div class="content-wrap">
        <div class="tag">精品歌单</div>
        <div class="title">
          {{ songslist.name }}
        </div>
        <div class="info">
          {{ songslist.description }}
        </div>
      </div>
      <img :src="songslist.coverImgUrl" alt="" class="bg" />
      <div class="bg-mask"></div>
    </div>
    <div class="tab-container">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <span
          class="item"
          v-for="(item, index) in namelist"
          :key="index"
          :class="{ active: name == item }"
          @click="name = item"
          >{{ item }}</span
        >
      </div>
      <!-- tab的内容区域 -->
      <div class="tab-content">
        <div class="items">
          <div
            class="item"
            v-for="(item, index) in songs"
            :key="index"
            @click="playlists(item.id)"
          >
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount }}</span>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
      :current-page="page"
      :page-size="10"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data() {
    return {
      // 总条数
      total: 0,
      // 页码
      page: 1,
      songslist: {},
      songs: [],
      name: '全部',
      namelist: [
        '全部',
        '欧美',
        '华语',
        '流行',
        '说唱',
        '摇滚',
        '民谣',
        '电子',
        '轻音乐',
        '影视原声',
        'ACG',
        '怀旧',
        '自愈',
        '旅行',
      ],
    }
  },
  watch: {
    name() {
      this.topData(), this.bottomData()
      this.page = 1
    },
  },
  created() {
    this.topData(), this.bottomData()
  },
  methods: {
    handleCurrentChange(val) {
      // console.log(val)
      this.page = val
      this.bottomData()
    },
    async topData() {
      //  精品歌单
      const { data: res } = await this.$http.get(
        `https://autumnfish.cn/top/playlist/highquality`,
        {
          params: { limit: 1, cat: this.name },
        }
      )
      //  console.log(res)
      this.songslist = res.playlists[0]
    },
    async bottomData() {
      // 歌单
      const { data: res1 } = await this.$http.get(
        `https://autumnfish.cn/top/playlist/`,
        {
          params: { limit: 10, offset: (this.page - 1) * 10, cat: this.name },
        }
      )
      //  console.log(res1)
      this.songs = res1.playlists
      this.total = res1.total
    },
    playlists (id) {
      this.$router.push(`/playlist?q=${id}`)
    }
  }
}
</script>

<style>
.num {
  color: aliceblue;
}
</style>
