const arr = [1,3,5,4,5,7];
function filter(arr){
    let result = [];
    for(let i = 0; i<arr.length -2; i++){
        if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2] || arr[i]<arr[i+1] && arr[i+1]>arr[i+2] ){
            result.push(1);

        }else{
            result.push(0);
        }
    }
    return result;

}

console.log(filter(arr));