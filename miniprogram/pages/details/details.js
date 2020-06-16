// page/details/details.js
Page({
  data:{
   
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
   teltoUs:function(){
	   wx.makePhoneCall({
			phoneNumber: '17000000000' 
		})
   }	
})