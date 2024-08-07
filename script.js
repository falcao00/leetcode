//const strs = ["flower","flow","flight"]
//const strs = ["dog","racecar","car"]
//const strs = ["a"]
//const strs = ["cir","car"]
//const strs = ["aaa","aa","aaa"]

var longestCommonPrefix = function(strs) {
    let fistword = strs[0];
    let numbElements = strs.length;
    let prefix = "";
    let prefixfinal = "";

    for(var i = 0; i < numbElements; i++){ //varre o numero de elementos do array
        for(var j = 0; j < strs[i].length; j++){ //varre a string do elemento do array selecionado
            if(fistword.at(j) == strs[i].at(j)){
                prefix += strs[i].at(j);
            } else {
                break;
            }
        }
        prefixfinal = prefix;
        fistword = prefix;
        prefix = "";
    }
    //console.log(prefixfinal);

    return prefixfinal;
};


longestCommonPrefix(strs);