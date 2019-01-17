function populateChars(charA, charZ){
    let res = [];
    for(var i = charA.charCodeAt(0); i <= charZ.charCodeAt(0); ++i){
        res.push(String.fromCharCode(i));
    }
    return res;
}
function getAlphabet(keys){
    const src = {
        "ll" : populateChars('a', 'z'),
        "lu" : populateChars('A', 'Z'),
        "rl" : populateChars('а', 'я'),
        "ru" : populateChars('А', 'Я'),
        "yo" : ["ё"],
        "you": ["Ё"],
        "n" : populateChars('0','9'),
        "sp" : populateChars('{', '~')
                    .concat(populateChars('[','`'))
                    .concat(populateChars('!','/'))
                    .concat(populateChars(':','@')),
    };
    var alphabet = [];
    for(var k = 0; k < keys.length; ++k){
        alphabet = alphabet.concat(src[keys[k]]);
    }
    return alphabet;
}
function getCodeList(alphabet){
    var i = 1;
    return alphabet.map(function(a){
       return {"number": i++,"code" : a.charCodeAt(0), "symbol" : a};
    });
}
function combination(n,k){
    var num = 1, den = 1;
    for(var i = n;  i >= (n-k+1); --i){
        num *= i;
    }
    for(var j = k; j >= 1; --j){
        den *= j;
    }
    return num/den;
}
function getComplexity(A,n, K){
    return {
        "complexity" : Math.pow(A*1.0,n*1.0),
        "threshold" : Math.abs(Math.log(K) / Math.log(A)) + 1
    };
}
function getAverageComplexity(A,n, K){
    return {
        "complexity" : (1.0 *getComplexity(A,n).complexity)/2.0,
        "threshold" : Math.abs(Math.log(2*K - 1) / Math.log(A)) + 1
    };
}
function getComplexityTime(A,n, V, K){
    return {
        "complexity" : (1.0 * getAverageComplexity(A,n).complexity)/ V,
        "threshold" : Math.abs(Math.log(2*V*K - 1) / Math.log(A)) + 1
    };
}
function getComplexityData(A,n,K,V){
    return {
        "length" : n,
        "number" : getComplexity(A,n,K).complexity,
        "average" : getAverageComplexity(A,n,K).complexity,
        "time" : getComplexityTime(A,n,K,V).complexity
    }
}
function getPasswordStrength(alphabet, password){
    const lp = password.length;
    const la = alphabet.length;
    //possible combinations
    const possibleCombinations = combination(la, lp);
    return {
        "possible" : possibleCombinations,
        "" : b,
        "" : c
    }
}


function main(){ 
    let keys = ["n", "yo", "you"];
    let baseAlphabet = getAlphabet(keys);
    let keySymbol = getCodeList(baseAlphabet);
    //console.log(combination(120,8));
}