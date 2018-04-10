<template lang="html">
  <div class="detail card">
    <table class="outer-table">
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
      <tr v-for="(item, index) in detail">
        <td colspan="13" class="in-td">
          <div class="control-hide" :class="item.isShow ? 'active' : ''">
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
                <span>{{item.consumeNumber | toFixed}}</span>
              </td>
              <td>
                <span>{{item.integralDeduct | toFixed}}</span>
              </td>
              <td>
                <span>{{item.storageDeduct | toFixed}}</span>
              </td>
              <td>
                <span>{{item.discountCash | toFixed}}</span>
              </td>
              <td>
                <span>{{item.earseSmallCash | toFixed}}</span>
              </td>
              <td>
                <span>{{item.payCash | toFixed}}</span>
              </td>
              <td>
                <span>{{item.serviceCharge | toFixed}}</span>
              </td>
              <td>
                <span>{{item.amountOfLiquidation | toFixed}}</span>
              </td>
              <td class="check-details">
                <span @click="clickToCheck(index, item)">查看明细</span>
              </td>

            </tr>
            <tr v-for="innerItem in item.moreDetail">
              <td></td>
              <td></td>
              <td>
                <span>{{innerItem.moreShopName}}</span>
              </td>
              <td>
                <span>{{innerItem.moreSingleTradeNumber}}</span>
              </td>
              <td>
                <span>{{innerItem.moreConsumeNumber | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreIntegralDeduct | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreStorageDeduct | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreDiscountCash | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreEarseSmallCash | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.morePayCash | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreServiceCharge | toFixed}}</span>
              </td>
              <td>
                <span>{{innerItem.moreAmountOfLiquidation | toFixed}}</span>
              </td>
              <td></td>
            </tr>
          </table>
          </div>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'detail-card',
  data () {
    return {
      detail: [{
        isShow: false,
        shopNmae: '港汇店',
        tradeTime: '2017-01-05',
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
        },{
          moreShopName: '刷卡',
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
          moreShopName: '仅用抵扣/优惠完成支付',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 980.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 0.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        },{
          moreShopName: '非再惠渠道',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 0.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 980.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        }]
      },{
        isShow: false,
        shopNmae: '虹桥',
        tradeTime: '2017-01-06',
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
        },{
          moreShopName: '刷卡',
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
          moreShopName: '仅用抵扣/优惠完成支付',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 980.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 0.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        },{
          moreShopName: '非再惠渠道',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 0.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 980.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        }]
      },{
        isShow: false,
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
        },{
          moreShopName: '刷卡',
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
          moreShopName: '仅用抵扣/优惠完成支付',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 980.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 0.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        },{
          moreShopName: '非再惠渠道',
          moreSingleTradeNumber: 10,
          moreConsumeNumber: 1000.00,
          moreIntegralDeduct: 20.00,
          moreStorageDeduct: 0.00,
          moreDiscountCash: 0.00,
          moreEarseSmallCash: 0.00,
          morePayCash: 980.00,
          moreServiceCharge: 0.00,
          moreAmountOfLiquidation: 0.00,
        }]
      }]
    }
  },
  methods: {
    clickToCheck: (index, item) => {
      item.isShow = !item.isShow;
    },
    changeTable: function () {

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

  .detail table tr td:nth-child(1) {
    width: 170px
  }
  .detail table tr td:nth-child(2) {
    width: 150px
  }
  .detail table tr td:nth-child(3) {
    width: 180px
  }
  .detail table tr td:nth-child(4) {
    width: 7%;
  }
  .detail table tr td:nth-child(5) {
    width: 7%;
  }
  .detail table tr td:nth-child(6) {
    width: 7%;
  }
  .detail table tr td:nth-child(7) {
    width: 7%;
  }
  .detail table tr td:nth-child(8) {
    width: 7%;
  }
  .detail table tr td:nth-child(9) {
    width: 7%;
  }
  .detail table tr td:nth-child(10) {
    width: 7%;
  }
  .detail table tr td:nth-child(11) {
    width: 7%;
  }
  .detail table tr td:nth-child(12) {
    width: 7%;
  }
  .detail table tr td:nth-child(13) {
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

  .td-tr span:first-child {
    transform: translateY(-8px);
  }

  .check-details {
    border-right: 1px transparent solid!important;
  }
  .check-details span {
    cursor: pointer;
    color: #A5C6F3;
  }

  .inner-table {
    table-layout: fixed;
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
  .outer-table {
    table-layout: fixed;
  }
  .control-hide {
    overflow: hidden;
    height: 80px;
    border-bottom: 1px #E2E2E4 solid;
  }
  .control-hide.active {
    border-bottom: none;
    height: auto;
  }
</style>
