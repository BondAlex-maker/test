const matrix = [[1,2,3,2,7,1,2,3,2,7], [4,5,6,8,1,4,5,6,8,1],[7,8,9,4,5,7,8,9,4,5]];

function checker (arr){
    let arrOfMatrixThreeOnThree = [];
    let result = [];
    for (let m = 0; m<arr[0].length - 2; m++){
    for(let i = 0; i<arr.length; i++){
            if(!arrOfMatrixThreeOnThree.includes(arr[i][m])){
                arrOfMatrixThreeOnThree.push(arr[i][m])
            }
            if(!arrOfMatrixThreeOnThree.includes(arr[i][m+1])){
                arrOfMatrixThreeOnThree.push(arr[i][m+1])
            }
            if(!arrOfMatrixThreeOnThree.includes(arr[i][m+2])){
                arrOfMatrixThreeOnThree.push(arr[i][m+2])
            }
        }
    if(arrOfMatrixThreeOnThree.length === 9){
        result.push(true);
        arrOfMatrixThreeOnThree = [];
    }else{
        result.push(false);
        arrOfMatrixThreeOnThree = [];
    }

    }

    return result;
}

console.log(checker(matrix));