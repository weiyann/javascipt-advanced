function getBase64Img(file){
  if(!(file instanceof File)){
    return null;//如果file 不是 File類型，return null
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // 定義事件處理器
    reader.onload = function(){
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
}