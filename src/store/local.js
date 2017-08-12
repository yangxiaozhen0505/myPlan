//local.js就是为了存储数据到本地
export const setStorage = function(data){
  localStorage.setItem('lists',JSON.stringify(data));
};
export const getStorage = function(){
return JSON.parse(localStorage.getItem('lists'));
};
