$(function() {
 
    //Set up instafeed
    var portfoliolist = new Instafeed({
        target: 'portfoliolist',
        get: 'user',
        userId: '4183681469',
        accessToken: '4183681469.1677ed0.119c056b20b84eefbdb3bf4c7705f655',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="portfolio mix_all" style="display: inline-block; opacity: 1;"><div class="portfolio-wrapper"><a href="{{image}}" rel="portfolio" title="{{caption}}"><img src="{{image}}"></a><div class="label"><div class="label-text"><a class="text-title">{{likes}} Likes</a> </div><div class="label-bg"></div></div></div></div>'
    });
   /*               <div class="portfolio-wrapper">
                        <a href="{{link}}" rel="portfolio"><img src="{{image}}"></a>
                            <div class="label">{{likes}} Likes 
                                {{caption}}
                            </div>
                    </div>'

  */

    portfoliolist.run();
 
});