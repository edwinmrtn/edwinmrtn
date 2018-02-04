var requestURL = 'https://www.googleapis.com/blogger/v3/blogs/7197066635467637573/posts?key=AIzaSyDuHKcturzEmANQvRN0ghGqRS3JQb6WJuo';
	//var header = document.querySelector('header');
    var section = document.getElementById('blog-page');

   // var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var blog = request.response;
      getPosts(blog);
    }

    

    function getPosts(jsonObj) {
      var items = jsonObj['items'];

      for(var i = 0; i < items.length; i++) {
		 var myArticle = document.createElement('div'); //blog-article
		 var contenu = "";
		 
		/* if (items[i].content.length > 800) {
		 	 contenu = items[i].content.substring(0,800)+"... </div>";
		 }
		 else{
		 	contenu = items[i].content;
		 }*/
		 console.log(contenu);
		 contenu = items[i].content
		 myArticle.innerHTML = '<article id="post-'+(i+1)+'" class="blog-article"><div class="col-md-12"><div class="row"><div class="col-md-12 post_media"></div></div><div class="row"><div class="col-md-12 post_content"><div class="content post_format_standart"><div class="top_c "><div class="title_content"><div class="text_content"><a href="#post-'+(i+1)+'" class="read_more">'+items[i].title+'</a></div><div class="clear"></div></div><ul class="info"><!-- <i><i class="glyphicon glyphicon-comment"></i> 2 Comments</li> --><li><i class="glyphicon glyphicon-time"></i>'+items[i].published+'</li><li><i class="glyphicon glyphicon-user"></i> Par ' + items[i].author.displayName + '</li><!-- <li><i class="glyphicon glyphicon-tag"></i> php, web design</li> --></ul><div id="blog-content-'+(i+1)+'" class="blog-content"><p>'+contenu+'</p></div></div></div><a id="apost-'+(i+1)+'" class="read_m pull-right">En lire davantage</a></div></div></div></article>';
		

        
        //myPara1.textContent = items[i].title;
        //myPara2.innerHTML = items[i].content;
        var myI = document.createElement('i'); //blog-article
        myI.innerHTML = '<i class="glyphicon glyphicon-chevron-right"></i>';
       
        //myArticle.appendChild(myPara1);
        //myArticle.appendChild(myPara2);

        section.appendChild(myArticle);


        $("#apost-"+(i+1)).click(function(){
        	if ($( this ).text() == "Réduire"){
        		$(this).parent().find(".blog-content").css("max-height","19em");
        		$( this ).text("En lire davantage");
        	}else{
   			$(this).parent().find(".blog-content").css("max-height","100%");
   			$( this ).text("Réduire");
        	}
		});

      }
    }
