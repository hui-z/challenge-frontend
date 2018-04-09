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
    <div class="overall card" id="overall">
      <div class="overall-top">
        <span>交易汇总</span>
        <span>(交易时段 {{dateFrom}} - {{dateTo}})</span>
      </div>
      <div class="overall-under">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
    <div class="detail-card"></div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'main-part',
    data () {
      return {
        dateFrom: '2018.01.02',
        dateTo: '2018.01.03'
      }
    }
  }
</script>
