/**
 * 姓名  2~10位  汉字||字母||数字
 */
 export const nameReg = {
    reg: /^[\w\u4e00-\u9fa5]{2,10}$/,
    msg: '2~10个汉字、字母、数字',
  };
  /**
   * 手机号码  11位  手机号码固定开头
   */
  export const phoneReg = {
    reg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
    msg: '手机号码格式错误',
  };
  /**
   * 邮箱
   */
  export const emailReg = {
    reg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,3}$/,
    msg: '邮箱格式错误',
  };