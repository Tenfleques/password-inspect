$(function(){

	$.getJSON("resources/config.json", function(UI_SETTINGS){
		let appname = UI_SETTINGS["title"];
		$(".international")
		//init language toggler
		$(".international")
			.html(languageOptions(UI_SETTINGS["LANGUAGES"]))
			.val(getCookie("lang"))
			.on("change",toggleInternationale);
		
		$(".copyright").html(appname + " &copy; "+new Date().getFullYear());
		$(".appname,title,.title").html(appname);	
		internationale();
	});
	//universal dynamic loads 
	
})
function table(id,columns){
	/**
	 * initializes a bootstrap powertable
	 */
    var $table = $('#'+id);
    $('#toolbar'+id).find('select').change(function () {
        $table.bootstrapTable('refreshOptions', {
        exportDataType: $(this).val()
        });
    });
    $table.bootstrapTable({
        columns: columns
    });  
    return $table;
}

function internationale(){
	/**
	 * Controls the active language and memory management of user preferred language
	 */
	var lang = getCookie("lang");
	if(lang==""){
		setCookie("lang","en",365);
		lang = "en";
	}
	$(".lang").addClass("hidden");
	$(".lang."+lang).removeClass("hidden");
}	
function toggleInternationale(){
	/** 
	 *  reads the selected language in the triggering control, updates the user preferred language and calls the language control function `internationale`
	 */
	var lang = $(this).find(":selected").text();
	setCookie("lang",lang,365);
	internationale();
}
function languageOptions(langs){
	var html = "";
	var l = getCookie("lang")?getCookie("lang"):"en";

	for (var i in langs){
		var selected = ""
		if(langs[i]["short"] == l)
			selected = "selected='true'";
		html += '<option id="'+langs[i]["short"]+'" '+selected+'>'+langs[i]["short"]+'</option>';	
	}
	return html;
}

