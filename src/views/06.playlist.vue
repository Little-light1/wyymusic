<template>
  <div class="playlist-container">
    <div class="top-wrap">
      <div class="img-wrap">
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="info-wrap">
        <p class="title">{{ playlist.name }}</p>
        <div class="author-wrap">
          <img class="avatar" :src="playlist.creator.avatarUrl" alt="" />
          <span class="name">{{ playlist.creator.nickname }}</span>
          <span class="time">{{ playlist.createTime | time }} 创建</span>
        </div>
        <div class="play-wrap">
          <span class="iconfont icon-circle-play"></span>
          <span class="text">播放全部</span>
        </div>
        <div class="tag-wrap">
          <span class="title">标签:</span>
          <ul>
            <li>{{ playlist.tags[0] }}</li>
            <li>{{ playlist.tags[1] }}</li>
            <li>{{ playlist.tags[2] }}</li>
          </ul>
        </div>
        <div class="desc-wrap">
          <span class="title">简介:</span>
          <span class="desc">{{ playlist.description }}</span>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲列表" name="1">
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
            <tr
              class="el-table__row"
              v-for="(item, index) in playlist.tracks"
              :key="index"
            >
              <td>{{ index + 1 }}</td>
              <td>
                <div class="img-wrap">
                  <img :src="item.al.picUrl" alt="" />
                  <span
                    class="iconfont icon-play"
                    @click="playMusic(item.id)"
                  ></span>
                </div>
              </td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{ item.name }}</span>
                    <span class="iconfont icon-mv"></span>
                  </div>
                </div>
              </td>
              <td>{{ item.ar[0].name }}</td>
              <td>{{ item.al.name }}</td>
              <td>{{ item.dt | dataFormat }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane :label="'评论'+(total1+total)" name="2">
        <!-- 精彩评论 -->
        <div class="comment-wrap">
          <p class="title">
            精彩评论<span class="number">{{total1}}</span>
          </p>
          <div class="comments-wrap">
            <div
              class="item"
             v-for ="(item,index) in hotCommentList "
             :key="index"
            >
              <div class="icon-wrap">
                <img :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">{{ item.user.nickname }}</span>
                  <span class="comment">: {{ item.content }}</span>
                </div>
                <div class="re-content" v-if="item.beReplied.length !== 0">
                  <span class="name">{{item.beReplied[0].user.nickname}}</span>
                  <span class="comment">: {{item.beReplied[0].content}}</span>
                </div>
                <div class="date">{{item.time| time1}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">({{total}})</span></p>
          <div class="comments-wrap">
            <div class="item"  v-for ="(item,index) in commentList "
             :key="index" >
              <div class="icon-wrap">
                <img :src="item.user.avatarUrl" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">{{ item.user.nickname }}</span>
                  <span class="comment">: {{ item.content }}</span>
                </div>
                <div class="re-content" v-if="item.beReplied.length !== 0">
                  <span class="name">{{item.beReplied[0].user.nickname}}</span>
                  <span class="comment">: {{item.beReplied[0].content}}</span>
                </div>
                <div class="date">{{item.time| time1}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'playlist',
  data() {
    return {
      activeIndex: '1',
      playlist: [],
      songslist: [],
      hotCommentList: [],
      commentList:[],
      total:0,
      total1:0
    }
  },
  created() {
    this.getplaylist()
    this.getHotComment()
    this.getComment()
  },
  methods: {
    async getplaylist() {
      const { data: res } = await this.$http.get(
        `https://autumnfish.cn/playlist/detail`,
        {
          params: { id: this.$route.query.q },
        }
      )
      // console.log(res);
      this.playlist = res.playlist
    },
    async playMusic(id) {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/song/url',
        {
          params: { id },
        }
      )
      this.$parent.musicUrl = res.data[0].url
    },
    async getHotComment() {
      const { data: res } = await this.$http.get(
        'https://autumnfish.cn/comment/hot',
        {
          params: { id: this.$route.query.q, type: 2, limit: 10 },
        }
      )
      // console.log(res)
      this.hotCommentList = res.hotComments
      this.total1 = res.total

    },
    async getComment () {
       const { data: res } = await this.$http.get(
        'https://autumnfish.cn/comment/playlist',
        {
          params: { id: this.$route.query.q, limit: 10 },
        }
      )
      // console.log(res);
      this.commentList = res.comments
      this.total = res.total
    }
  },
}
</script>

<style>
.time {
  width: 120px;
}
</style>
