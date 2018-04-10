<template>
  <div class="main">
    <div class="search card clear">
      <div class="left query-input">
        <span>交易日期：</span>
        <div class="date-input" id="date-input">
          <div @mouseenter="enterIn(0)" @mouseleave="leaveOut(0)">
            <!--此处曾考虑用v-model，但在触发mouseenter时会导致input内容为空，暂未找到方法，导致X图标消失只能先用setInterval比较笨的方法替代-->
            <input type="text" id="input-from" @blur="startInterval(0)">
            <i class="cancel" @click="cancelValue('input-from')" :class="cancelFirst.isShow ? 'active' : ''"></i>
            <i class="triangle" :class="triangleFirst.isShow ? 'active' : ''"></i>
          </div>
          <span>至</span>
          <div @mouseenter="enterIn(1)" @mouseleave="leaveOut(1)">
            <input type="text" id="input-to" @blur="startInterval(1)">
            <i class="cancel" @click="cancelValue('input-to')" :class="cancelSecond.isShow ? 'active' : ''"></i>
            <i class="triangle" :class="triangleSecond.isShow ? 'active' : ''"></i>
          </div>
        </div>
      </div>
      <div class="right query-btn">
        <button @click="check">查询</button>
        <button>导出</button>
      </div>
    </div>
    <overall></overall>
    <detail></detail>
  </div>
</template>


<script>
  import overall from './overall.vue'
  import detail from './detail.vue'
//  import {eve} from '../../static/js/uitls'

  export default {
    name: 'main-part',
    data () {
      return {
        triangleFirst: {
          isShow: false
        },
        triangleSecond: {
          isShow: false
        },
        cancelFirst: {
          isShow: false
        },
        cancelSecond: {
          isShow: false
        }
      }
    },
    components: {
      'overall': overall,
      'detail': detail
    },
    methods: {
      startInterval: function (num) {
        switch (num) {
          case 0:
            setInterval(() => {
              console.log(document.getElementById('input-from').value);
              if (document.getElementById('input-from').value !== '') {
                this.cancelFirst.isShow = true;
              }
            },100);
            break;
          case 1:
            setInterval(() => {
              console.log(document.getElementById('input-from').value);
              if (document.getElementById('input-to').value !== '') {
                this.cancelSecond.isShow = true;
              }
            },100);
            break;
        }
      },
      cancelValue: function (id) {
        document.getElementById(id).value = '';
        if (id = 'input-from') {
          this.cancelFirst.isShow = false;
        }
        if (id = 'input-to') {
          this.cancelSecond.isShow = false
        }
      },
      enterIn: function (num) {
        switch (num) {
          case 0:
            this.triangleFirst.isShow = true;
            break;
          case 1:
            this.triangleSecond.isShow = true;
            break;
        }
      },
      leaveOut: function (num) {
        switch (num) {
          case 0:
            this.triangleFirst.isShow = false;
            break;
          case 1:
            this.triangleSecond.isShow = false;
            break;
        }
      },
      check: function () {
        const inputFrom = document.getElementById('input-from').value;
        const inputTo = document.getElementById('input-to').value;
        //空数组
        let rangeArr = [];
        //输入的时间有始有终的情况下
        if (inputFrom !== '' && inputTo !== '') {
          const millionSecondFrom = new Date(inputFrom).getTime();
          const millionSecondTo = new Date(inputTo).getTime();
          rangeArr = [];
          //遍历数组找出符合条件的数组
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime >= millionSecondFrom && itemTime <= millionSecondTo) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //只有开始时间的情况下
        } else if (inputFrom !== '' && inputTo == '') {
          const millionSecondFrom = new Date(inputFrom).getTime();
          rangeArr = [];
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime >= millionSecondFrom) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //只有结束时间的情况下
        } else if (inputFrom == '' && inputTo !== '') {
          const millionSecondTo = new Date(inputTo).getTime();
          rangeArr = [];
          detail.data().detail.forEach(function (item) {
            let itemTime = new Date(item.tradeTime).getTime();
            if (itemTime <= millionSecondTo) {
              rangeArr.push(item)
            }
          });
          //改变显示
          this.$children[1].detail = rangeArr



          //两边都为空，默认展示全部
        } else if (inputFrom == '' && inputTo == '') {
          this.$children[1].detail = detail.data().detail
        }

      }
    }
  }

</script>
