var weixin = document.getElementById("weixin")
var logo = document.getElementById("logo")
var isShowingWeixin = false
weixin.addEventListener("click",function(e){
  e.preventDefault()
  logo.src= ""
  logo.src= !isShowingWeixin ? "/img/wechat.jpg" : "/img/archyshuo.png"
  isShowingWeixin = !isShowingWeixin
})
