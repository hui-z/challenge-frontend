<template>
  <div class="main">
    <div class="search card clear">
      <div class="left query-input">
        <span>交易日期：</span>
        <div class="date-input">
          <div>
            <input type="text" id="input-from">
            <i class="cancel"></i>
            <i class="triangle"></i>
          </div>
          <span>至</span>
          <div>
            <input type="text" id="input-to">
            <i class="cancel"></i>
            <i class="triangle"></i>
          </div>
        </div>
      </div>
      <div class="right query-btn">
        <button>查询</button>
        <button>导出</button>
      </div>
    </div>
    <overall></overall>
    <detail></detail>
  </div>
</template>

<style>

</style>

<script>
  import overall from './overall.vue'
  import detail from './detail.vue'
  export default {
    name: 'main-part',
    data () {
      return {

      }
    },
    components: {
      'overall': overall,
      'detail': detail
    }
  }
</script>
