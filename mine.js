;(function(){
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
    //获取随机rgb颜色
    this.getColorRgb = function(){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = 'rgb('+r+','+g+','+b+')';
        return color;
    }

    function Mine(){ 
        //获取区间随机整数
        this.getInt = function(n,m){
        var int = Math.floor(Math.random()*(m-n+1)) + n; 
        return int;
        } 
        //获取随机rgb颜色
        this.getColorRgb = function(){
            var r = this.getInt(0,255);
            var g = this.getInt(0,255);
            var b = this.getInt(0,255);
            var color = 'rgb('+r+','+g+','+b+')';
            return color;
        }
        //获取16进制随机颜色 
        this.getColorHex = function(){
            var str = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
            var color = ['#'];
            for(i=6;i>0;i--){ 
                var index =Math.floor(Math.random()*str.length);  //随机获取索引       
                var rand = str[index];  //随机获得元素
                color.push(rand);
            }
            return color.join('');
        }                 
    }

    //获取当前时间
    function formatDate(){
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var secons = now.getSeconds();
        return y + '-' + patchZero(m) + '-' + patchZero(d) + ' ' + patchZero(h) + ":" + patchZero(mm) + ':' + patchZero(s);
      }
      
      function patchZero(t){
        return t < 10 ? '0' + t : t;
      }

})();