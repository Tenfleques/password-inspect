if (process.platform == "darwin") {
	var menu = new gui.Menu({type: "menubar"});
	menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
	gui.Window.get().menu = menu;
}
document.onkeydown=disableconsole;

function disableconsole(e){
	/*evtobj = window.event? event : e;
	if(evtobj.keyCode == 123 || (evtobj.metaKey && evtobj.altKey && evtobj.keyCode ==73))
		return false;*/
}

(function ($, window) {
	$.fn.extend({
	})
    $.fn.contextMenu = function (settings) {
		console.log("context menu");
		return this.each(function () {
			var contextField = $(this).parent()
			$(this).on("contextmenu", function (e) {
				// return native menu if pressing control
				if(!isDefined(e.clientX)){
					e.clientX = 450;
					e.clientY = 190;
				}
				if (e.ctrlKey) return;

					//open menu
				var $menu = $(settings.menuSelector)
					.data("invokedOn", $(e.target))
					.show(function(){
						contextField .addClass('dimmed')})
					.css({
							position: "absolute",
							left: getMenuPosition(e.clientX+70, 'width', 'scrollLeft'),
							top: getMenuPosition(e.clientY-70, 'height', 'scrollTop')})
					.off('click', function(){
							contextField .removeClass('dimmed')})
				return false;
			});
			$('body').click(function () {
				$(settings.menuSelector).hide();
				contextField .removeClass('dimmed')
			});
		});
  	};
	
    document.onkeydown = function(event) {
      switch (event.keyCode) {
				case 8:
					return;
					break;
        //  window.history.back();
        //case 37: //go left
        //    break;
        //case 39: //go right
        //    break;
      }
	}
	//remove webview funcs
	/*$(document).on("contextmenu", function(e){
		e.preventDefault();
	});*/
	$("disabled").click(function() {
		//return false;
	});


	//global events 
    $(".go-back").on("click",function(){
      window.history.back();
    })
    $("#window-action-close").on('click',function() {
      gui.Window.get().close();
    });
    $("#window-action-minimize").on('click',function() {
       gui.Window.get().minimize();
    });
    $("#window-action-zoom").on('click',function() {
      gui.Window.get().toggleFullscreen();
	});
	gui.Window.get().show();

})($, window);
