const goalArr = [
    ["Hello", "World"],
    ["Brad", "came", "to","dinner","with", "us"],
    ['LALALA', 'lala', "lalal", 'lslsls', "slalege"],
    ["He", "loves", 'tacos']
];

const ruleArr = ["LEFT","RIGHT","LEFT", "LEFT"];

function checkLength (goalArr, ruleArr){

    let insideArr = [];
    let result = [];
    let outerArr = [];
    let index;
    let ruleResultArr = [];

    for(let i = 0; i<goalArr.length; i++) {
        let str = goalArr[i].join(' ');
        index = [i];
        if (str.length > 16) {
            insideArr = str.match(/.{1,16}\b/g);
            for (let i = 0; i < insideArr.length; i++) {
                outerArr.push([insideArr[i].trim()]);
            }
            for (let j = 0; j < insideArr.length; j++) {
                ruleResultArr.push(ruleArr[i]);
            }

        }
        if (str.length < 16) {
            outerArr.push([str]);
            ruleResultArr.push(ruleArr[i]);


        }

    }
    result.push(outerArr, ruleResultArr);

    return result;
        }
function formatting(resultArr){
    let arrOfQueries = [...resultArr[1]];
    let arrOfStrings = [...resultArr[0]];

    let result = [];
    let arr = [];
    let firstLastStringArr = ["******************"];


    result.push(firstLastStringArr);


        for(let i = 0; i<arrOfStrings.length; i++){
        let numOfSpaces = 16 - arrOfStrings[i][0].length;
            let str = arrOfStrings[i][0];
        if (arrOfQueries[i] === "LEFT") {

            arr.push('*');

            arr.push(str)
            for (let i = 0; i < numOfSpaces; i++) {

                arr.push(' ');
            }
        arr.push('*')
            str = arr.join('');
            arr = [];
            arr.push(str);
            result.push(arr);
            arr = [];
        }


        if(arrOfQueries[i] === "RIGHT"){
            for (let i = 0; i < numOfSpaces; i++) {
                arr.unshift(' ');
            }
            arr.unshift('*');
            arr.push(str + '*');
            str = arr.join('');
            arr = [];
            arr.push(str);
            result.push(arr)
            arr=[];
        }
        }
    result.push(firstLastStringArr);
        result= result.join(`,\n`)
    return result;
    }

let arr = checkLength(goalArr, ruleArr);
console.log(formatting(arr));