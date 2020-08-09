<template>
  <div class="mv-container">
    <div class="mv-wrap">
      <h3 class="title">mv详情</h3>
      <!-- mv -->
      <div class="video-wrap">
        <video
          controls
          :src="mvurl"
        ></video>
      </div>
      <!-- mv信息 -->
      <div class="info-wrap">
        <div class="singer-info">
          <div class="avatar-wrap">
            <img :src="mvlist.cover" alt="" />
          </div>
          <span class="name">{{mvlist.artistName}}</span>
        </div>
        <div class="mv-info">
          <h2 class="title">{{mvlist.briefDesc}}</h2>
          <span class="date">发布：{{mvlist.publishTime}}</span>
          <span class="number">播放：{{mvlist.playCount}}次</span>
          <p class="desc">
            {{mvlist.desc}}
          </p>
        </div>
      </div>
      <!-- 精彩评论 -->
      <div class="comment-wrap">
        <p class="title">精彩评论<span class="number">({{hotComment.length}})</span></p>
        <div class="comments-wrap">
          <div class="item" v-for ="(item,index) in hotComment "
             :key="index">
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
        <p class="title">最新评论<span class="number">{{total}}</span></p>
        <div class="comments-wrap">
          <div class="item"  v-for ="(item,index) in comment "
             :key="index">
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
    </div>
    <div class="mv-recommend">
      <h3 class="title">相关推荐</h3>
      <div class="mvs">
        <div class="items">
          <div class="item" v-for="(item,index) in otherMv" :key="index">
            <div class="img-wrap">
              <img :src="item.cover" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{item.playCount}}</div>
              </div>
              <span class="time">{{item.duration|dataFormat}}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{item.name}}</div>
              <div class="singer">{{item.artistName}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mv',
  data() {
    return {
      mvurl: '',
      mvlist:[],
      otherMv:[],
      hotComment: [],
      comment:[],
      hotTotal:0,
      total:0
    }
  },
  created () {
 this.getMvUrl()
 this.getMvList()
 this.getOtherMv()
 this.getMvComment()
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getMvUrl () {
       const {data: res }  = await this.$http.get(`https://autumnfish.cn/mv/url`, {
         params: {id:this.$route.query.id}
       })
      //  console.log(res);
       this.mvurl = res.data.url
    },
    async getMvList () {
       const {data: res }  = await this.$http.get(`https://autumnfish.cn/mv/detail`, {
         params: {mvid:this.$route.query.id}
       })
      //  console.log(res);
       this.mvlist  = res.data
    },
     async getOtherMv () {
       const {data: res }  = await this.$http.get(`https://autumnfish.cn/simi/mv`, {
         params: {mvid:this.$route.query.id}
       })
      //  console.log(res);
       this.otherMv  = res.mvs
    },
     async getMvComment () {
       const {data: res }  = await this.$http.get(`https://autumnfish.cn/comment/mv`, {
         params: {id:this.$route.query.id,limit:10}
       })
       console.log(res);
       this.hotComment  = res.hotComments
       this.comment  = res.comments
       this.total = res.total
    }
  }
};
</script>

<style></style>
