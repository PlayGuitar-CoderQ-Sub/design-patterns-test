/**
 *  @TODO 简单的发布订阅者模式
 *
 */

// var sasoffices = {}; // 定义售楼部

// sasoffices.clientList = {}; // 缓存列表，存放订阅者的回调函数

// sasoffices.listen = function(key, fn) { // 增加订阅者
//   if (!this.clientList[key]) { // 如果没有订阅过此类消息，给该消息创建一个缓存列表
//     this.clientList[key] = [];
//   }
//   this.clientList[key].push(fn);
// };

// sasoffices.trigger = function() { // 发布消息
//   var key = Array.prototype.shift.call(arguments), // 取出消息类型
//       fns = this.clientList[key] // 取出该消息对应的回调参数集合

//   if (!fns || fns.length === 0) { // 如果没有订阅该消息，则返回
//     return false;
//   }

//   for (var i = 0, fn; fn = fns[i++];) {
//     fn.apply(this, arguments); // (2) // arguments是发布消息附带的参数
//   };
// };

// sasoffices.listen('squareMeter88', function(price) { // 小明订阅88 平方米房子的消息
//   console.log("价格 = " + price, "小明"); // 输出 2000000
// })

// sasoffices.listen('squareMeter110', function(price) { // 小红订阅110平方米房子
//   console.log('价格 = ' + price, "小红"); // 输出：3000000
// })

// sasoffices.trigger('squareMeter88', 2000000); // 发布88平方米房子的价格
// sasoffices.trigger('squareMeter110', 3000000); // 发布88平方米房子的价格

/**
 * @TODO 通用发布者订阅模式
 */
// var event = {
//   clientList: {},
//   listen: function(key, fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn); // 订阅的消息添加缓存列表
//   },
//   trigger: function() {
//     var key = Array.prototype.shift.call(arguments), // (1);
//         fns = this.clientList[key];

//     if (!fns || fns.length === 0) { // 如果没有绑定对应的消息
//       return false;
//     }

//     for (var i = 0, fn; fn = fns[i++];) {
//       fn.apply(this, arguments); // (2) // arguments 是trigger时带上的参数
//     }
//   },
//   remove: function(key, fn) {
//     var fns = this.clientList[key];

//     if (!fns) { // 如果key对应的消息没有人被订阅则直接返回
//       return false;
//     }
//     if (!fn) { // 如果没有传入具体的回调函数, 表示需要取消key对应消息的所有订阅
//       fns && (fns.length = 0); // 数组清空
//     } else {
//       for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调参数列表
//         var _fn = fns[l];
//         if (_fn === fn) {
//           fns.splice(l, 1); // 删除订阅者的回调参数
//         }
//       }
//     }
//   }
// }

// // 给所有对象都动态安装发布订阅模式
// var installEvent = function(obj) {
//   for (var i in event) {
//     obj[i] = event[i];
//   }
// };

// var salesOffices = {};
// installEvent(salesOffices);

// // 新增订阅
// let fn1 = function(price) {
//   console.log("价格 = " + price, '小明订阅');
// }

// let fn2 = function(price) {
//   console.log("价格 = " + price, '小红订阅');
// }

// salesOffices.listen('squareMeter88', fn1);
// salesOffices.listen('squareMeter110', fn2);

// salesOffices.remove('squareMeter88', fn2);

// salesOffices.trigger( 'squareMeter88', 2000000 );

/**
 * @TODO 实现登陆模块的定义发布
 */
// let loginObserver = {
//   clientList: {},
//   lister: function(key, fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = [];
//     }
//     this.clientList[key].push(fn);
//   },
//   trigger: function() {
//     var key = Array.prototype.shift.call(arguments), // 获取第一个参数的key值
//         fns = this.clientList[key];

//     for (var i = 0, fn; fn = fns[i++];) {
//       fn.apply(this, arguments);
//     }
//   },
//   remove: function(key, fn) {
//     var fns = this.clientList[key];

//     if (!fns) {
//       return
//     }

//     if (!fn) {
//       fns && (fns.length = 0);
//     } else {
//       for (var l = fns.length; l >= 0; l--) {
//         var _fn = fns[l];
//         if (fn === _fn) {
//           fns.splice(l, 1);
//         }
//       }
//     }
//   }
// }

// // 模拟请求登陆
// let observablerType = "loginSucc";
// let loginService = function() {
//   return new Promise((reslove, reject) => {
//     let timer = setTimeout(() => {
//       reslove({
//         code: 000,
//         data: {
//           userId: 1,
//           userName: 'coderQ',
//           userAge: 20,
//           userAvatar: 'http:xxx.xxx.com',
//           userSex: 1,
//           userAddress: '广东省'
//         },
//         msg: '请求成功'
//       })
//       clearTimeout(timer);
//       console.log("请求登陆成功")
//     }, 5000)
//   })
// }

// loginService().then(res => {
//   loginObserver.trigger(observablerType, res);
// })

// // 其他模块监听登陆成功的消息

// /**
//  * 头部模块
//  */
// let header = (function () {
//   loginObserver.lister(observablerType, function (data) {
//     header.setAvatar(data.data.userAvatar);
//   });
//   return {
//     setAvatar: function(data) {
//       console.log("设置header头像", data);
//     }
//   }
// })()

// /**
//  * 地址模块
//  */
// let address = (function () {
//   loginObserver.lister(observablerType, function (data) {
//     address.refresh(data.data.userAddress)
//   });
//   return {
//     refresh: function(data) {
//       console.log("刷新收货地址列表", data);
//     }
//   }
// })()

/**
 * @TODO 定义一个全局Event对象
 * @TODO 对应index.html例子使用
 */
// var Event = (function () {
//   var clientList = {},
//     listen,
//     trigger,
//     remove;

//   listen = function (key, fn) {
//     if (!clientList[key]) {
//       clientList[key] = [];
//     }
//     clientList[key].push(fn);
//   };

//   trigger = function () {
//     var key = Array.prototype.shift.call(arguments),
//       fns = clientList[key];
//     if (!fns || fns.length === 0) {
//       return false;
//     }
//     for (var i = 0, fn; (fn = fns[i++]); ) {
//       fn.apply(this, arguments);
//     }
//   };

//   remove = function (key, fn) {
//     var fns = clientList[key];
//     if (!fns) {
//       return false;
//     }
//     if (!fn) {
//       fns && (fns.length = 0);
//     } else {
//       for (var l = fns.length - 1; l >= 0; l--) {
//         var _fn = fns[l];
//         if (_fn === fn) {
//           fns.splice(l, 1);
//         }
//       }
//     }
//   };

//   return {
//     listen,
//     trigger,
//     remove,
//   };
// })();

/**
 * @TODO 先订阅再发布
 * @TODO 防止全局命名冲突
 */
var Event = (function () {
  var global = this,
    Event,
    _default = "default";

  Event = (function () {
    var _listen,
      _trigger,
      _remove,
      _slice = Array.prototype.slice,
      _shift = Array.prototype.shift,
      _unshirt = Array.prototype.unshift,
      namespaceCache = {},
      _create,
      find,
      each = function (ary, fn) {
        var ret;
        for (var i = 0, l = ary.length; i < l; i++) {
          var n = ary[i];
          ret = fn.call(n, i, n);
        }
        return ret;
      };

    _listen = function (key, fn, cache) {
      if (!cache[key]) {
        cache[key] = [];
      }
      cache[key].push(fn);
    };

    _remove = function (key, cache, fn) {
      if (cache[key]) {
        if (fn) {
          for (var i = cache[key].length; i >= 0; i--) {
            if (cache[key][i] === fn) {
              cache[key].splice(i, 1);
            }
          }
        } else {
          cache[key] = [];
        }
      }
    };

    _trigger = function () {
      var cache = _shift.call(arguments),
        key = _shift.call(arguments),
        args = arguments,
        _self = this,
        ret,
        stack = cache[key];

      if (!stack || !stack.length) {
        return;
      }

      return each(stack, function () {
        return this.apply(_self, args);
      });
    };
    
    // 用于创建Event对象
    _create = function (namespace) { 
      var namespace = namespace || _default;
      var cache = {},
        offlineStack = [], // 离线事件
        ret = {
          listen: function (key, fn, last) {
            _listen(key, fn, cache);
            if (offlineStack === null) {
              return;
            }
            if (last === "last") {
              offlineStack.length && offlineStack.pop()();
            } else {
              each(offlineStack, function () {
                this();
              });
            }

            offlineStack = null;
          },
          one: function (key, fn, last) {
            _remove(key, cache);
            this.listen(key, fn, last);
          },
          remove: function (key, fn) {
            _remove(key, cache, fn);
          },
          trigger: function () {
            var fn,
              args,
              _self = this;

            _unshirt.call(arguments, cache);
            args = arguments;
            fn = function () {
              return _trigger.apply(_self, args);
            };
            if (offlineStack) {
              return offlineStack.push(fn);
            }
            return fn();
          },
        };

      return namespace ? namespaceCache[namespace] ? namespaceCache[namespace] : (namespaceCache[namespace] = ret) : ret;
    };

    return {
      create: _create,
      one: function (key, fn, last) {
        var event = this.create();
        event.one(key, fn, last);
      },
      remove: function (key, fn) {
        var event = this.create();
        event.remove(key, fn);
      },
      listen: function (key, fn, last) {
        var event = this.create();
        event.listen(key, fn, last);
      },
      trigger: function () {
        var event = this.create();
        event.trigger.apply(this, arguments);
      },
    };
  })();
  return Event;
})();

/************** 先发布后订阅 ********************/
Event.trigger("click", 1);
Event.listen("click", function (a) {
  console.log(a); // 输出：1
});
// /************** 使用命名空间 ********************/
// Event.create("namespace1").listen("click", function (a) {
//   console.log(a); // 输出：1
// });
// Event.create("namespace1").trigger("click", 1);
// Event.create("namespace2").listen("click", function (a) {
//   console.log(a); // 输出：2
// });
// Event.create("namespace2").trigger("click", 2);
