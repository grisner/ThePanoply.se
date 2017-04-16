
 
$(window).load(function(){
/**
************************************************************
*************** THIS IS THE NAVIGATION CODE ****************
************************************************************
**/

$(function() {
    // Stick the #nav to the top of the window
    var navWrap = $('#navWrap');
    var navHomeY = navWrap.offset().top;
    var isOnHeader = false;
    var isOnTop = false;
    var isLeavingHeader = false;
    var isInContent = false;
    var headerHeightPx = 190; // distance to trigger
    var leavingHeaderHeight = headerHeightPx + $('#navWrap').height();

    $(window).scroll(function() {
        // on all scrolling
        

        // var scrollTop = $(window).scrollTop();
        var scrolledFromTop = $(window).scrollTop();
        var onHeader = scrolledFromTop > navHomeY + 4 && scrolledFromTop < headerHeightPx;
        var onTop = scrolledFromTop < navHomeY + 4;
        var leavingHeader = scrolledFromTop > headerHeightPx && scrolledFromTop < leavingHeaderHeight;
        var inContent = scrolledFromTop > leavingHeaderHeight;
        /*
        console.log(scrolledFromTop);
        console.log("top:" + onTop);
        console.log("istop:" + isOnTop);
        console.log("header:" + onHeader);
        console.log("isheader:" + isOnHeader);
        console.log("leaving:" + leavingHeader);
        console.log("isleaving:" + isLeavingHeader);
        console.log("content:" + inContent);
        console.log("iscontent:" + isInContent);
        */
        
        if (onTop && !isOnTop)
        {
            console.log('Top');
            /*navWrap.css({
                position: 'static'
            });*/

            $('#navWrap').removeClass('navWrapLeavingHeader');
            $('#navWrap').removeClass('navWrapContent');
            $('#navWrap').removeClass('navWrapOnHeader');
            $('#navWrap').addClass('navWrapOnTop');

            $('#nav').removeClass('navInContent');
            $('#nav').addClass('navOnHeader');

            isOnHeader = false;
            isLeavingHeader = false;
            isInContent = false;
            isOnTop = true;
        }
        else if (onHeader && !isOnHeader) {
            console.log('on header');

            $('#navWrap').removeClass('navWrapOnTop');
            $('#navWrap').removeClass('navWrapLeavingHeader');
            $('#navWrap').removeClass('navWrapContent');
            $('#navWrap').addClass('navWrapOnHeader');

            $('#nav').removeClass('navInContent');
            $('#nav').addClass('navOnHeader');

            /*
            navWrap.css({
                position: 'fixed',
                top: 0,
                left: navWrap.offset().left,
                width: navWrap.width()
            });*/
            isOnHeader = true;
            isOnTop = false;
            isLeavingHeader = false;
        }
        
        else if(leavingHeader && !isLeavingHeader) {
            console.log('leaving header');

            $('#navWrap').removeClass('navWrapOnTop');
            $('#navWrap').removeClass('navWrapOnHeader');
            $('#navWrap').removeClass('navWrapContent');
            $('#navWrap').addClass('navWrapLeavingHeader');

            $('#nav').removeClass('navOnHeader');
            $('#nav').addClass('navInContent');

            isLeavingHeader = true;
            isOnHeader = false;
            isInContent = false;
        }
        else if(inContent && !isInContent) {
            console.log('entering content');

            //$('#navWrap').addClass('scrolled');
            //$('nav li').addClass('liScrolled');
            
            $('#navWrap').removeClass('navWrapOnTop');
            $('#navWrap').removeClass('navWrapOnHeader');
            $('#navWrap').removeClass('navWrapLeavingHeader');
            $('#navWrap').addClass('navWrapContent');

            $('#nav').removeClass('navOnHeader');
            $('#nav').addClass('navInContent');

            isInContent = true;
            isLeavingHeader = false;
        }

        


        /*
        if(scrolledFromTop > headerHeightPx && (!$('#navWrap').hasClass('navWrap.Content'))) {
            
            
            
            

        }else if(scrolledFromTop < headerHeightPx && $('#navWrap').hasClass('navWrap.Content')) {
            $('#navWrap').removeClass('scrolled');
            //$('nav li').removeClass('liScrolled');
            $('#navWrap').removeClass('navWrap.Content');
            console.log('entering header');
        }*/
    });
});



/**
************************************************************
*** THIS IS THE ADD-IN SMOOTH SCROLLING CODE ***************
*** (see: http://www.dwuser.com/education/content/quick-guide-adding-smooth-scrolling-to-your-webpages/ )
************************************************************
**/


/**
 * SmoothScroll
 * This helper script created by DWUser.com.  Copyright 2012 DWUser.com.  
 * Dual-licensed under the GPL and MIT licenses.  
 * All individual scripts remain property of their copyrighters.
 * Date: 10-Sep-2012
 * Version: 1.0.1
 */
if (!window['jQuery']) alert('The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery.');

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($) {
    var h=$.scrollTo=function(a,b,c){
        $(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};
    h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){
        var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;
        if(!isWin) 
        return a;
        var b=(a.contentWindow||a).document||a.ownerDocument||a;
        return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})
    };
        $.fn.scrollTo=function(e,f,g){
            if(typeof f=='object'){
                g=f;f=0}if(typeof g=='function')g={onAfter:g};
        if(e=='max')e=9e9;
        g=$.extend({},h.defaults,g);
        f=f||g.duration;
        g.queue=g.queue&&g.axis.length>1;
        if(g.queue)f/=2;g.offset=both(g.offset);
        g.over=both(g.over);return this._scrollable().each(function(){
            if(e==null)
            return;
            var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');
            switch(typeof targ){
                case'number':
                case'string':
                if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){
                    targ=both(targ);
                    break}
                targ=$(targ,this);
                if(!targ.length)
                return;
                case'object':
                if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(
                    g.axis.split(''),function(i,a){
                    var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);
                    if(toff){
                        attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);
                        if(g.margin){
                            attr[key]-=parseInt(targ.css('margin'+b))||0;
                    attr[key]-=parseInt(targ.css('border'+b+'Width'))||0
                }
                    attr[key]+=g.offset[pos]||0;
                    if(g.over[pos])
                    attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]
                }
                    else{
                        var c=targ[pos];
                        attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c
                    }
                        if(g.limit&&/^\d+$/.test(attr[key]))
                        attr[key]=attr[key]<=0?0:Math.min(attr[key],max);
                        if(!i&&g.queue)
                        {
                            if(old!=attr[key])
                            animate(g.onAfterFirst);
                            delete attr[key]
                        }
                        }
                            );
                            animate(g.onAfter);
                            function animate(a){
                                $elem.animate(attr,f,g.easing,a&&function(){
                                    a.call(this,e,g)
                                }
                                    )
                                }
                            }
                            )
                            .end()
                        };
                                    h.max=function(a,b){
                                        var c=b=='x'?'Width':'Height',scroll='scroll'+c;
                                        if(!$(a).is('html,body'))
                                        return a[scroll]-$(a)[c.toLowerCase()]();
                                        var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;
                                        return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])
                                    };
                                        function both(a){
                                            return typeof a=='object'?a:{
                                                top:a,left:a
                                            }
                                            }
                                        }
                                        )(jQuery);

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 05/31/2010
 * @author Ariel Flesler
 * @version 1.2.8b
 **/
;(function(b) {
    function g(a,e,d) {
        var h=e.hash.slice(1),f=document.getElementById(h)||document.getElementsByName(h)[0];
        if(f){
            a&&a.preventDefault();
            var c=b(d.target);
            if(!(d.lock&&c.is(":animated")||d.onBefore&&!1===d.onBefore(a,f,c))) {
                d.stop&&c._scrollable().stop(!0);
                if(d.hash){var a=f.id==h?"id":"name",g=b("<a> </a>").attr(a,h).css({
                    position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()
                });
                f[a]="";
                b("body").prepend(g);
                location=e.hash;
                g.remove();
                f[a]=h
            }
            c.scrollTo(f,d).trigger("notify.serialScroll",[f])
        }
    }
}
var i=location.href.replace(/#.*/,""),c=b.localScroll=function(a){
    b("body").localScroll(a)
};
    c.defaults={
        duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0
    };
        c.hash=function(a){
            if(location.hash){a=b.extend({},c.defaults,a);a.hash=!1;if(a.reset){
                var e=a.duration;delete a.duration;b(a.target).scrollTo(0,a);
                a.duration=e
            }
                g(0,location,a)
            }
            };
                b.fn.localScroll=function(a){
                    function e(){
                        return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==i&&(!a.filter||b(this).is(a.filter))
                    }
a=b.extend({},c.defaults,a);
return a.lazy?this.bind(a.event,function(d){
    var c=b([d.target,d.target.parentNode]).filter(e)[0];
    c&&g(d,c,a)
}):this.find("a,area").filter(e).bind(a.event,function(b){
    g(b,this,a)
}).end().end()
}
})(jQuery);

// Initialize all .smoothScroll links
jQuery(function($){ 
    $.localScroll({filter:'.smoothScroll'}); 
});



});//]]>  

