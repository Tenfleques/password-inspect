$(function(){
    let codesymbol = "table-codes";
    let codesymbolColumns = [
        {
            "field" : "number",
            "title" : '<span class="lang ru">Номер</span>'
        },{
            "field" : "code",
            "title" : '<span class="lang ru">Код</span'
        },{
            "field" : "symbol",
            "title" : '<span class="lang ru">Символ</span>'
        }
    ];
    let tableStrength = "table-strength";
    let tableStrengthColumns = [
        {
            "field" : "length",
            "title" : '<span class="lang ru">Длина</span>'
        },{
            "field" : "number",
            "title" : '<span class="lang ru">Полное число</span>'
        },{
            "field" : "average",
            "title" : '<span class="lang ru">Средное число</span>'
        },{
            "field" : "time",
            "title" : '<span class="lang ru">Средное время</span>'
        }
    ]
    function updateSizeBasicAlphabet(){
        let ks = [];
        $(".alphabet-options:checked").each( function() {
            let key = this.id;
            ks.push(key.replace("check-",""));
        })
        let baseAlphabet = getAlphabet(ks);
        let A = getCodeList(baseAlphabet);
        $(".size-basic-alphabet").html(A.length);
        $symbolsTable.bootstrapTable('load', A);

        //complexity region

        let ml = $("#maxlength").val() ? $("#maxlength").val() : $("#maxlength").prop("placeholder");
        let V = $("#hackspeed").val() ? $("#hackspeed").val() : $("#hackspeed").prop("placeholder");

        let complexityTableData = [];
        var K = 1;
        for(var n = 1; n < ml; n ++){
            complexityTableData.push(getComplexityData(A.length,n,K,V));
        }
        $complexityTable.bootstrapTable('load', complexityTableData);
        console.log(complexityTableData);
        
    }
    //alppabet options
    $(".alphabet-options, .calculate-complexity").on("click", updateSizeBasicAlphabet);
    let $symbolsTable = table(codesymbol,codesymbolColumns);
    let $complexityTable = table(tableStrength, tableStrengthColumns);

    //
})