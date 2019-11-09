//随机生成区间整数
function randomInt(n,m){          
    return  Math.floor(Math.random()*(m-n+1) + n);            
}
  //随机颜色十六进制
  function randomColor(){
    var str = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    var color = ['#'];
    for(i=6;i>0;i--){ 
        var index =Math.floor(Math.random()*str.length);  //随机获取索引       
        var rand = str[index];  //随机获得元素
        color.push(rand);
    }
    return color.join('');
}