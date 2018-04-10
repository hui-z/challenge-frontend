/**
 *事件相关工具类
 */

//写完发现并没有用过。。。
const eventListener = {
  addHandler: (ele, type, handler) => {
    if (ele.addEventListener) {
      ele.addEventListener(type, handler, false)
    } else if (ele.attachEvent) {
      ele.attachEvent('on' + type, handler, false)
    }
  }
};


// export const eve = eventListener

