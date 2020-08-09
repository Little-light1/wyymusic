<template>
  <div class="mvs-container">
    <div class="filter-wrap">
      <div class="seciton-wrap">
        <span class="section-type">地区:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title" v-for="(item,index) in arealist" :key="index"
            @click="area=item" :class="{active:area==item}">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="type-wrap">
        <span class="type-type">类型:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title " v-for="(item,index) in typelist" :key="index"
            @click="type=item" :class="{active:type==item}">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="order-wrap">
        <span class="order-type">排序:</span>
        <ul class="tabs-wrap">
          <li class="tab">
            <span class="title " v-for="(item,index) in orderlist" :key="index"
            @click="order=item" :class="{active:order==item}"
            >{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- mv容器 -->
    <!-- 推荐MV -->
    <div class="mvs">
      <div class="items">
        <div class="item" @click="toMv(item.id)" v-for="(item,index) in mvlist " :key="index">
          <div class="img-wrap">
            <img :src="item.cover" alt="" />
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.artistName}}</div>
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
        :page-size="8"
        :limit ="limit"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mvs',
  data() {
    return {
      // 总条数
      total: 0,
      // 页码
      page: 1,
      // 页容量
      limit: 8,
      mvlist: [],
      area: '全部',
      type: '全部',
      order: '上升最快',
      orderlist: ['上升最快','最热','最新'],
      typelist: ['全部','官方版','原声','现场版','网易出品'],
      arealist: ['全部','内地','港台','欧美','日本','韩国']
    }
  },
  created() {
    this.getMvList()
  },
  watch: {
    area () {
      this.getMvList()
      this.page = 1
    },
    type () {
      this.getMvList()
      this.page = 1

    },
    order () {
      this.getMvList()
      this.page = 1
    }
  },
  methods: {
    toMv(id) {
      this.$router.push(`/mv?id=${id}`)
    },
    handleCurrentChange(val) {
     this.page = val
     this.getMvList()
    },
    async getMvList() {
      const { data: res } = await this.$http.get(
        `https://autumnfish.cn/mv/all`,
        {
          params: {
            area: this.area,
            type: this.type,
            order: this.order,
            limit: this.limit,
            offset: (this.page - 1) * this.limit
          },
        }
      )
      // console.log(res.count)
      this.mvlist = res.data
      if (res.count) {
       this.total   = res.count
      }
    },
  },
}
</script>

<style></style>
