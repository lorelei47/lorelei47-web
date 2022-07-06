/**
 * 防抖函数
 * @param {*} func
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */
export const debounce = (func, delay, immediate = false) => {
  let timer, result;
  return function () {
    let _this = this,
      args = arguments;
    clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) result = func.apply(_this, args);
    } else {
      timer = setTimeout(() => {
        result = func.apply(_this, args);
        timer = null;
      }, delay);
    }
    return result;
  };
};

/**
 * 节流函数
 * @param {*} func
 * @param {*} delay
 * @param {*} immediate
 * @returns
 */
export const throttle = (func, delay, immediate = false) => {
  let timer,
    result,
    flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      flag = false;
      if (immediate) result = func.apply(context, args);
      timer = setTimeout(() => {
        if (!immediate) result = func.apply(context, args);
        flag = true;
      }, delay);
      return result;
    }
  };
};

/**
 * 深度拷贝
 * @param {*} obj
 * @returns
 */
export const deepClone = (obj) => {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};
