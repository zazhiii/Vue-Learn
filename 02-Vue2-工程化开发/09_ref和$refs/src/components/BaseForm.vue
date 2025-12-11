<script>
export default {
  data(){
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    getValue() {
      return {
        account: this.account,
        password: this.password
      }
    },
    resetValue() {
      this.account = '';
      this.password = '';
    }
  }
}
</script>

<template>
<div class="App">
  <form action="">
    账号：<input type="text" v-model="account">
    密码：<input type="text" v-model="password">
  </form>
</div>
</template>

<style scoped>

</style>