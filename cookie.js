/*
    单例设计模式
    完整形式：[]中是可选项
    document.cookie  = “name=value[;expires=date][;path=path-to-resource][;domain=域名][;secure]”
*/

var cookieObj = {
    /*
        增加或修改cookie
        参数：o 对象{}
        name:string cookie名
        value:string cookie值
        expires:Date对象 过期时间
        path:string 路径限制
        domain:string 域名限制
        secure:boolean  true https  false或undeinfed 
    */
    set: function(o) {
        var cookieStr = encodeURIComponent(o.name) + "=" + encodeURIComponent(o.value);
        if(o.expires) {
            cookieStr += ";expires=" + o.expires;
        }
        if(o.path) {
            cookieStr += ";path=" + o.path;
        }
        if(o.domain) {
            cookieStr += ";domain=" + o.domain;
        }
        if(o.secure) {
            cookieStr += ";secure";
        }

        document.cookie = cookieStr;
    },
    /*
        删除
        参数：n string cookie的名字
    */
    del: function(n) {
        var date = new Date();
        date.setHours(-1);
        //this代表的是当前函数的对象
        this.set({
            name: n,
            expires: date
        });
    },
    /*查找*/
    get: function(n) {
        n = encodeURIComponent(n);
        var cooikeTotal = document.cookie;
        var cookies = cooikeTotal.split("; ");
        for(var i = 0, len = cookies.length; i < len; i++) {
            var arr = cookies[i].split("=");
            if(n == arr[0]) {
                return decodeURIComponent(arr[1]);
            }
        }
    }
}




var CookieUtil = {
    get: function(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart>-1) {
      var cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd== -1) {
        cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
    },

  set: function (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires.toGMTString();
    }
    if (path) {
      cookieText += '; path=' + path;
    }
    if (domain) {
      cookieText += '; domain=' + domain;
    }
    if (secure) {
      cookieText += '; secure';
    }
    document.cookie = cookieText;
  },

  unset: function (name, path, domain, secure) {
    this.set(name, "", new Date(0), path, domain, secure);
  }
};
