function start(){
	if($('input').val() != ""){
		var url = "https://660e.com/?url="+$('input').val();
        layui.use('layer', function(){
			  layer.open({
			  type: 2
			  ,title: "视频播放器"
              ,scrollbar: false
			  ,area: ['700px','550px']
			  ,content: url
			}); 
		});
	}else{
    	msg();
    }
}
function show(){
  	layui.use('layer', function(){
    	var index = layer.open({
  			title:'打赏我，请我喝杯咖啡！'
  			,content: '<span style="display:block;text-align:center;font-size:20px;">微信扫一扫</span><img style="display:block;margin:0 auto;height:200px;width:200px;" src="/images/Weixin.png">
<table class="layui-table">
  <colgroup>
    <col width="150">
    <col width="200">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th>昵称</th>
      <th>加入时间</th>
      <th>签名</th>
    </tr> 
  </thead>
  <tbody>
    <tr>
      <td>贤心</td>
      <td>2016-11-29</td>
      <td>人生就像是一场修行</td>
    </tr>
    <tr>
      <td>许闲心</td>
      <td>2016-11-28</td>
      <td>于千万人之中遇见你所遇见的人，于千万年之中，时间的无涯的荒野里…</td>
    </tr>
  </tbody>
</table>
                <span style="display:block;font-size:14px;text-align:center;margin-top:10px;">不打赏也可播放，感谢捐助</span>'
  			,area: '220px'
          	,scrollbar: false
          	,btn: ['直接播放']
          	,btnAlign: 'c'
  			,yes: function(index, layero){
              	layer.close(index);
   				start();
  			}
		});
    });
}

function msg(){
  	layui.use('layer', function(){
    	layer.msg('播放地址不能为空！',{icon: 2});
    });
}

function urlPass(){
	strRegex="^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$"; 
	
}
