var replaceAll = function(string, search, replacement) {
    var target = string;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function owonify(string = 'undefined', level = 5) {
    //level 1: minor letter replacement
    if(level >= 1) {
        string = replaceAll(string, "(?!you)^r$", "w")
        string = replaceAll(string, "l", "w")
        string = replaceAll(string, "v", "w")
        string = replaceAll(string, "(?!\s)^c$", "s")
    }

    //level 2: adding unnecessary owo's and uwu's, you => u, fully lowercase
    if(level >= 2) {
        string = string.toLowerCase()
        string = replaceAll(string, "\\!", ", owo!")
        string = replaceAll(string, "\\.", " uwu ")
        string = replaceAll(string, "youre", "ur")
        string = replaceAll(string, "your", "ur")
        string = replaceAll(string, "you", "u")
    }

    //level 3: replace any sort of punctation still present and some other stuff
    if(level >= 3) {
        string = replaceAll(string, "'", "")
        string = replaceAll(string, "\"", "")
        string = replaceAll(string, "\`", "")
        string = replaceAll(string, " u ", "uwu")
        string = replaceAll(string, "![w]o![w]", "owo")
        string = replaceAll(string, "d", "t")
        string = replaceAll(string, "h", "w")
        string = replaceAll(string, "no", "nyo")
        string = replaceAll(string, "[^wy\n\s]o", "wo")
    }

    //end it all
    return string
}

module.exports = owonify