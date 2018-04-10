<template>
  <div class="overall card" :class="isHide ? 'hide' : 'show'">
    <div class="overall-top" @click="pullDown">
      <span>交易汇总</span>
      <span>(交易时段 {{dateFrom}} - {{dateTo}})</span>
    </div>
    <div class="overall-under">
      <div>
        <span>消费金额&nbsp;(元)</span>
        <span>{{totalCash | toFixed}}</span>
      </div>
      <div>
        <span>抵扣金额&nbsp;(元)</span>
        <span>{{totalDeductible | toFixed}}</span>
      </div>
      <div>
        <span>优惠金额&nbsp;(元)</span>
        <span>{{totalDiscount | toFixed}}</span>
      </div>
      <div>
        <span>支付金额&nbsp;(元)</span>
        <span>{{totalPay | toFixed}}</span>
        <span>抹零{{earse | toFixed}}元</span>
      </div>
      <div>
        <span>清算金额&nbsp;(元)</span>
        <span>{{liquidation | toFixed}}</span>
        <span>手续费{{serviceCharge | toFixed}}</span>
      </div>
    </div>
    <div class="overall-under">
      <div class=""></div>
      <div class="">
        <table class="overall-table-in">
          <tr v-for="item in deductibleInfo">
            <td>{{item.deductName}}</td>
            <td>{{item.deductPrice | toFixed}}</td>
          </tr>
        </table>
      </div>
      <div class=""></div>
      <div class="">
        <table class="overall-table-in">
          <tr v-for="item in paymentInfo">
            <td>{{item.paymentApp}}</td>
            <td>{{item.paymentPrice | toFixed}}</td>
          </tr>
        </table>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overall',
  data () {
    return {
        dateFrom: '2018.01.02',
        dateTo: '2018.01.03',
        isHide: true,
        totalCash: 560.00,
        totalDeductible: 10.00,
        totalDiscount: 10.00,
        totalPay: 538.00,
        liquidation: 536.00,
        earse: 2.00,
        serviceCharge: 2.00,
        deductibleInfo: [{
          deductName: '积分抵扣',
          deductPrice: 300.00
        },{
          deductName: '储值预存抵扣',
          deductPrice: 100.00
        },{
          deductName: '储值奖励抵扣',
          deductPrice: 100.00
        }],
        paymentInfo: [{
          paymentApp: '微信',
          paymentPrice: 100.00
        },{
          paymentApp: '支付宝',
          paymentPrice: 100.00
        },{
          paymentApp: '再惠卡',
          paymentPrice: 100.00
        },{
          paymentApp: '借记卡',
          paymentPrice: 100.00
        },{
          paymentApp: '贷记卡',
          paymentPrice: 100.00
        },{
          paymentApp: '非再惠渠道',
          paymentPrice: 38.00
        }]
    }
  },
  methods: {
    pullDown: function () {
      this.isHide = !this.isHide
    }
  }
}
</script>

<style lang="css" scoped>
  .overall-table-in {
    padding-bottom: 15px;
    margin: 0 auto;
    width: 90%;
  }

  .overall-table-in td {
    color: #B8B9BE;
    line-height: 20px
  }
  .overall-table-in td:first-child{
    text-align: left;
  }
  .overall-table-in td:last-child{
    text-align: right;
  }

  .overall.hide {
    height: 146px;
  }

  .overall.show {
    height: 302px
  }

</style>
