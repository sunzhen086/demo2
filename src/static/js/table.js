$.fn.kytable = function(opt,data){
	var defaultOpt = {
		rowNumber: 6, //每屏显示的行数
		interval: 3000 //切换下一屏的间隔时间
	}

	var option = $.extend({},opt,defaultOpt);
	var $this = $(this);
	var $tbody = $this.find("tbody");

	if($tbody == null){
		throw '表格需要有tbody标签';
	}

	loadRows(option,data);

	function createRow(option,data,start,end){
		var html = "";
		for(let i=start;i<end;i++){
			html += "<tr>"
			for(let j = 0;j<data[i].length;j++){
				var item = data[i][j];
				html += "<td>"
				if(Array.isArray(item)){
					html += item[0];
					var goodOrBad = item[1] > 0 ? "good" : "bad" ;
					var upOrDown = item[1] > 0 ? "up" : "down" ;
					html += "<span class='rate " + goodOrBad + "'>";
					html += "<i class='fa fa-arrow-" + upOrDown +"'>";
					html += "</i>"+item[1]+"%</span>"
				}else{
					html += item;
				}
				html += "</td>"
			}
			
			html += "</tr>"
		}

		return html;
	}
	

	function loadRows(option,data,start,end){
		start = start || 0, 
		end = end || option.rowNumber;
		
		var rowHtml =  createRow(option,data,start,end);

		$tbody.animateCss('fadeIn').html(rowHtml);
		
		setTimeout(function(){
			start = start + option.rowNumber;
			start = start > data.length ? 0 : start;
			end = end + option.rowNumber;
			end = end < data.length ? end : data.length;

			loadRows(option,data,start,end);

		},option.interval)
	}

}


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });

        return this;
    }
});
