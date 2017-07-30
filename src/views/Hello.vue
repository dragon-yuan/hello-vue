<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
export default {
  data() {
      return {
        input: '',
        msg: 'Welcome to Your Vue.js App',
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'gray' },
          { name: '标签三', type: 'primary' },
          { name: '标签四', type: 'success' },
          { name: '标签五', type: 'warning' },
          { name: '标签六', type: 'danger' }
        ]
      };
  },
  created() {
    this.init_Console();
  },
  methods: {
    init_Console(){
      console.log('hello vue');
    },
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
}
</script>
