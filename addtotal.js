//计算和为num的所有序列和

function getArr(a,b){
    let ans=[]
    for(let i=a;i<a+b;i++){
        ans.push(i)
    }
    return ans
}

function addTotal(num){
    let ans=[]
    mid=Math.ceil(num/2)
    for(let i=1;i<mid;i++){
        for(let j=2;;j++){
            total=(i+i+j-1)*(j)/2
            if(total>num)break;
            else if(total==num){
                ans.push(getArr(i,j))
            }
        }
    }
    return ans
}

console.log(addTotal(15))