; (function () {
  /* 为了避免变量污染，使用一个自执行函数把我们的代码保护起来 */

  /* 封装的是一个jQuery */
  /* 1.选择器 */
  function jQuery(selector) {  // selector - 选择器的意思
    // 写代码实现一个返回伪数组的过程
    // 我们需要返回的是一个 jq 对象 而不是一个NodeList 所以不能直接返回 document.querySelectorAll
    // 我们需要封装自己的方法的，我们就自己构建一个jq对象，然后返回
    return new Init(selector);
  }

  // 先写一个jq对象的构造函数
  function Init(selector) {
    // 先根据选择器获取元素
    let elements = document.querySelectorAll(selector);
    // 模仿jq里面实现一个自己的伪数组 - 伪数组其实就是以数字为键的对象
    // 遍历 NodeList 伪数组，把里面的每个元素，放到this身上存起来
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    // 记得补全伪数组的长度
    this.length = elements.length;
  }


  /* 2.封装on的方式注册事件 */
  // 把on方法写到Init的原型上面
  /**
   * @description 封装好的on的方式注册事件的方法
   * @param { string } type 事件类型
   * @param { function } callback  处理程序
   */
  Init.prototype.on = function (type, callback) {
    // 要给伪数组里面的每个元素注册指定的事件
    // 要遍历伪数组，把里面的每个元素取出来，然后注册事件
    // for(let i = 0; i < this.length;i++){
    //   this[i].addEventListener(type,callback);
    // }

    // 这里是调用封装好的each方法实现的
    this.each(function (i, e) {
      e.addEventListener(type, callback);
    });
    // 为了实现链式编程
    return this;
  }

  /* 3.封装css方法修改元素的样式 */
  /**
   * @description 封装好的修改或者获取样式的方法
   * @param { string } key css属性名
   * @param { string } value css属性值
   */
  Init.prototype.css = function (key, value) {
    // css方法有两个作用： 获取和设置
    // 如果是一个参数，就是获取，如果是两个参数，就是设置
    if (value === undefined) {
      // jq里面默认，如果是获取的时候，伪数组里面有多个元素，默认会返回第一个元素的数据
      // css 方法如果是获取样式，只会返回第一个元素的数据
      // 获取任意样式的当前值
      // window.getComputedStyle(元素对象) // 返回作用在该元素身上的所有的样式的当前值的集合
      let cssResult = window.getComputedStyle(this[0]);
      return cssResult[key];
    } else {
      // 直接遍历伪数组，把伪数组里面的每个元素的样式改变
      // for(let i = 0; i < this.length;i++){
      //   this[i].style[key] = value;
      // }

      // 调用封装好的each进行遍历
      this.each(function (i, e) {
        e.style[key] = value;
      });
      return this;
    }
  }

  /* 4.把每次在方法里面的遍历封装成一个each方法 */
  /**
   * @description 这个jq内部自己遍历自己的方法
   * @param { function } callback 每次遍历的时候都会调用的函数
   */
  Init.prototype.each = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(i, this[i]);
    }
    return this;
  }

  // 封装好了代码之后，需要把代码开放给外面使用
  window.$ = window.jQuery = jQuery;
})();
