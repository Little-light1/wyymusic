<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <el-button size="small" type="primary">张</el-button>
        <el-button size="small" type="danger">振</el-button>
        <el-button size="small" type="warning">的</el-button>
        <el-button size="small" type="success">music</el-button>
        <el-button size="small" type="info">player</el-button>
      </div>
      <div class="history-wrapper">
        <span class="iconfont icon-arrow-lift" @click="back"></span>
        <span class="iconfont icon-arrow-right" @click="go"></span>
      </div>
    </div>
    <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <input
          type="text"
          autocomplete="off"
          placeholder="搜索"
          class="el-input__inner"
          v-model="inputVal"
          @keyup.enter="search"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        query: '',
        inputVal: ''
      }
    },
    methods: {
      search () {
        if (this.inputVal ===''){
          return this.$message.warning('请输入搜索内容！')
        }
        this.$router.push('/result?q='+this.inputVal)
      },
      go() {
        this.$router.go(1)
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style >
.icon-wrapper{
  margin-top: 10px;
  align-items: center;
}
</style>
