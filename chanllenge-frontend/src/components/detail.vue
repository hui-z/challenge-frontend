<template lang="html">
  <div class="detail card">
    <table>
      <tr>
        <td>
          <span>商户名称</span>
        </td>
        <td>
          <span>交易日期</span>
        </td>
        <td>
          <span>支付方式</span>
        </td>
        <td class="td-tr">
          <span>交易笔数</span>
          <span>(笔)</span>
        </td>
        <td class="td-tr">
          <span>消费金额</span>
          <span>(元)</span>
        </td>
        <td class="td-tr">
          <span>积分抵扣</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>储值抵扣</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>优惠金额</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>抹零</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>支付金额</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>手续费</span>
          <span>(元)</span></td>
        <td class="td-tr">
          <span>清算金额</span>
          <span>(元)</span>
        </td>
        <td>
          <span>操作</span>
        </td>
      </tr>
      <tr v-for="item in detail">
        <td colspan="13" class="in-td">
          <table class="inner-table">
            <tr>
              <td>
                <span>{{item.shopNmae}}</span>
              </td>
              <td>
                <span>{{item.tradeTime}}</span>
              </td>
              <td>
                <span>{{item.typeOfPayment}}</span>
              </td>
              <td>
                <span>{{item.singleTradeNumber}}</span>
              </td>
              <td>
                <span>{{item.consumeNumber}}</span>
              </td>
              <td>
                <span>{{item.integralDeduct}}</span>
              </td>
              <td>
                <span>{{item.storageDeduct}}</span>
              </td>
              <td>
                <span>{{item.discountCash}}</span>
              </td>
              <td>
                <span>{{item.earseSmallCash}}</span>
              </td>
              <td>
                <span>{{item.payCash}}</span>
              </td>
              <td>
                <span>{{item.serviceCharge}}</span>
              </td>
              <td>
                <span>{{item.amountOfLiquidation}}</span>
              </td>
              <td class="check-details">
                <span @click="clickToCheck">查看明细</span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // Vue.fliters('keepZero', (value) => {
  //   value = Number(value);
  //   return value.toFixed(2)
  //   return value + 1;
  // })
  name: 'detail-card',
  data () {
    return {
      detail: [{
        shopNmae: '港汇店',
        tradeTime: '2017-01-07',
        typeOfPayment: '全部',
        singleTradeNumber: 120,
        consumeNumber: 12000.00,
        integralDeduct: 100.00,
        storageDeduct: 1040.00,
        discountCash: 60.00,
        earseSmallCash: 30.00,
        payCash: 10770.00,
        serviceCharge: 29.28,
        amountOfLiquidation: 10740.72,
        moreDetail: [{
          moreShopName: '支付宝',
          moreSingleTradeNumber: 20,
          moreConsumeNumber: 2000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 20.00,
          moreDiscountCash: 20.00,
          moreEarseSmallCash: 10.00,
          morePayCash: 1930.00,
          moreServiceCharge: 5.79,
          moreAmountOfLiquidation: 1924.21,
        },{
          moreShopName: '微信',
          moreSingleTradeNumber: 60,
          moreConsumeNumber: 6000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 20.00,
          moreDiscountCash: 20.00,
          moreEarseSmallCash: 10.00,
          morePayCash: 5930.00,
          moreServiceCharge: 17.79,
          moreAmountOfLiquidation: 5912.21,
        }]
      },{
        shopNmae: '虹桥',
        tradeTime: '2017-01-07',
        typeOfPayment: '全部',
        singleTradeNumber: 120,
        consumeNumber: 12000.00,
        integralDeduct: 100.00,
        storageDeduct: 1040.00,
        discountCash: 60.00,
        earseSmallCash: 30.00,
        payCash: 10770.00,
        serviceCharge: 29.28,
        amountOfLiquidation: 10740.72,
        moreDetail: []
      },{
        shopNmae: '浦东店',
        tradeTime: '2017-01-07',
        typeOfPayment: '全部',
        singleTradeNumber: 120,
        consumeNumber: 12000.00,
        integralDeduct: 100.00,
        storageDeduct: 1040.00,
        discountCash: 60.00,
        earseSmallCash: 30.00,
        payCash: 10770.00,
        serviceCharge: 29.28,
        amountOfLiquidation: 10740.72,
        moreDetail: []
      }]
    }
  },
  methods: {
    clickToCheck: () => {
      console.log(1);
    }
  }
}
</script>

<style lang="css" scoped>
  .detail {
    margin: 50px;
  }
  .detail table {
    width: 100%;
    background-color: #fff;
    border-collapse: collapse;
  }
  .detail table td {
    box-sizing: border-box;
    color: #797A7E;
    border: 1px #E2E2E4 solid;
  }
  .detail table tr:first-child {
    height: 60px;
    background-color: #F8F8FA;
  }
  .detail table tr:first-child td:last-child {
    line-height: 60px;
    text-align: center;
  }

  .detail table tr td {
    text-align: center;
  }

  .detail > table > tr td:nth-child(1),
  .detail > table > tr td:nth-child(2),
  .detail > table > tr td:nth-child(3) {
    line-height: 60px;
    text-align: left;
    padding-left: 15px
  }

  .detail table tr:first-child td:nth-child(1) {
    width: 199px
  }
  .detail table tr:first-child td:nth-child(2) {
    width: 160px
  }
  .detail table tr:first-child td:nth-child(3) {
    width: 200px
  }
  .detail table tr:first-child td:nth-child(4) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(5) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(6) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(7) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(8) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(9) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(10) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(11) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(12) {
    width: 7%;
  }
  .detail table tr:first-child td:nth-child(13) {
    width: 7%
  }
  .detail table tr:not(:first-child) td:nth-child(5),
  .detail table tr:not(:first-child) td:nth-child(6),
  .detail table tr:not(:first-child) td:nth-child(7),
  .detail table tr:not(:first-child) td:nth-child(8),
  .detail table tr:not(:first-child) td:nth-child(9),
  .detail table tr:not(:first-child) td:nth-child(10),
  .detail table tr:not(:first-child) td:nth-child(11),
  .detail table tr:not(:first-child) td:nth-child(12) {
    text-align: right;
    padding-right: 15px;
  }
  .td-tr span {
    display: block;
  }

  .check-details {
    border-right: 1px transparent solid!important;
  }
  .check-details span {
    cursor: pointer;
    color: #A5C6F3;
  }

  .inner-table > tr:first-child{
    height: 80px!important;
    background-color: #fff!important;
  }
  .in-td {
    border: none!important;
    padding-left: 0!important;
  }
  .inner-table td {
    border-top: 0!important;
  }
  .inner-table td:last-child {
    border-right: none!important;
  }
</style>
