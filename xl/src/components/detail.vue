<template>

    <div class="header">
        <span class="go-back"><a href="home.html"></a></span>
        <em>芳华芳华芳华芳华芳华芳华</em>
    </div>
    <div class="container detail-container">
    	<div class="banner">
    		<div class="filter-box"></div>
    		<div class="thumbnail">
    			<img src="img/movie.jpg"/>
    		</div>
    		<div class="movie-intr">
    			<h1>芳华</h1>
    			<div class="star-level">
    				<div id="star_con" class="star-vote">
						<span id="add_star" class="add-star"></span>
						<span id="del_star" class="del-star"></span>
					</div>
    				<div class="point">
    					9.5
    				</div>
    			</div>
    			<p>剧情、爱情、战争</p>
    			<p>主演，黄轩，苗苗</p>
    			<p>上映时间：2017-12-15大陆</p>
    		</div>
    	</div>
    	<div class="movie-recommend">
    		<p>本片讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。</p>
    	</div>
   	</div>
   <div class="order-bar">
   		<a href="cinema.html">立即订购</a>
   </div>
<script>
    window.onload=showStar(9);
    //n表示服务端获取的星数
    function showStar(n){
        var con_wid=document.getElementById("star_con").offsetWidth;
        var del_star=document.getElementById("del_star");
        console.log(con_wid);
    //透明星星移动的像素
        var del_move=(n*con_wid)/10;
        del_star.style.backgroundPosition=-del_move+"px 0px";
        del_star.style.left=del_move+"px";
    }
</script>


</template>

<script>
export default {
  name: 'datail',
  data () {
    return {
     
    }
  }
}
</script>

