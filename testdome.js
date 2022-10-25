function sortByPriceAscending(jsonString) {
    var jsonObject = JSON.parse(jsonString);
    jsonObject.sort(function (a, b) {
        var sortPrice = parseFloat(a.price) - parseFloat(b.price);
        var sortName = a.name.localeCompare(b.name);
        return (sortPrice === 0) ? sortName : sortPrice;
    });
    return JSON.stringify(jsonObject);
}

// console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));
// 

function getParagraph(getPolicyNumber, paragraph) {
    if (getPolicyNumber[3].length > 4)
        getPolicyNumber[3] = getPolicyNumber[3].substring(0, 4);
    var oldPolicyNumber = `${getPolicyNumber[1]}-${getPolicyNumber[2]}-${getPolicyNumber[3]}`;
    var newPolicyNumber = `${getPolicyNumber[1]}/${getPolicyNumber[3]}/${getPolicyNumber[2]}`;
    paragraph = paragraph.replace(oldPolicyNumber, newPolicyNumber);
    var regex = paragraph.match('^.*?([0-9.]+)-([0-9.]+)-([0-9.]+)\..*$');

    if (regex?.length == 4)
        return getParagraph(regex, paragraph)
    else return paragraph
}

function changeFormat(paragraph) {
    var getPolicyNumber = paragraph.match('^.*?([0-9.]+)-([0-9.]+)-([0-9.]+)\..*$')
    return getParagraph(getPolicyNumber, paragraph);
}

// console.log(changeFormat("Please quote your policy number: 112-39-8552, Please quote your policy number: 222-49-9082,Please quote your policy number: 112-39-8552, Please quote your policy number: 222-49-9082.,Please quote your policy number: 112-39-8552, Please quote your policy number: 222-49-9082. -Please quote your policy number: 112-39-8552, Please quote your policy number: 222-49-9082.-sa -Please quote your policy number: 112-39-8552, Please quote your policy number: 222-49-9082."));


var error = [];
function wrap(execute) {
    return function () {
        try {
            if (error.indexOf(execute) < 0) {
                var result = execute();
                return result;
            } else return null;
        } catch {
            error.push(execute)
            return null;
        }
    }
}

var execute1 = function () {
    console.log("ds")
    throw new Error('Error');
};
var errorExec = wrap(execute1);
var errorExec1 = wrap(execute1);
var resultExec = wrap(function () {
    return "Result";
});
// console.log(typeof errorExec === "function" && errorExec()); // Should output null
// console.log(typeof resultExec === "function" && resultExec()); // Should output "Result"
// console.log(typeof errorExec === "function" && errorExec()); // Should output null
// console.log(typeof errorExec1 === "function" && errorExec1()); // Should output null




function validate(username) {
    var alphaNumericUnderScore = username.match(/^[a-z0-9_]+$/i) !== null;
    var singleUnderScore = username.split("_").length < 3;
    var firstIsLetter = isNaN(parseInt(username.substring(0, 1))) && username.substring(0, 1) !== "_";
    var lastIsNotUnderscore = username.substring(username.length - 1, username.length) !== "_";
    return (username.length > 3 && lastIsNotUnderscore && firstIsLetter && alphaNumericUnderScore && singleUnderScore);
}

console.log(validate('Mike__Standish')); // Valid username
console.log(validate('Ai_e')); // Invalid username