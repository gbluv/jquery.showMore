/*
 *  JQuery Show More - A Plugin for text clipping
 *  ---------------------------------------------
 *
 *  @version 0.0.1
 *  @since   03.20.2013 
 *
 *  Example:
 *
 *  $(".comment").show_more({
 *	  showChar: 200,
 *    ellipsestext: "...",
 *    moretext: "more",
 *    lesstext: "less"
 *  });
 *
 *  don't forget to add css
 *
*/

(function ($) {
    $.fn.show_more = function (params) {


        var $element = this;

        var showChar = params["showChar"] ? params["showChar"] : 100;
        var ellipsestext = params["ellipsestext"] ? params["ellipsestext"] : "...";
        var moretext = params["moretext"] ? params["moretext"] : "more";
        var lesstext = params["lesstext"] ? params["lesstext"] : "less";


        $element.each(function () {
            var content = $(this).html();

            if (content.length > showChar) {

 				var more_content = $("<span class='morecontent'></span>");

 		    	$(more_content).append($("<span></span>").html(content.substr(showChar - 1, content.length - showChar)));

 				$(more_content).append($("<a class='morelink' style='cursor: pointer'></a>").text(moretext));

 				$(this)
					.html(content.substr(0, showChar)) 
					.append($("<span class='moreellipses'></span>").html(ellipsestext + "&nbsp;")) 
					.append($(more_content)); 
			}
        });


        $(".morelink").live("click", function () {

            var $link = $(this);

            if ($link.hasClass("less")) {
                $link.removeClass("less");
                $link.html("more");

            } else {
                $link.addClass("less");
                $link.html("less");
            }

            $link.parent().prev().toggle();
            $link.prev().toggle();
            return false;
        });
    };


})(jQuery);


