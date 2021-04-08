let arr=[
    [1,2,2],
    [3,4,5,5],
    [6,7,8,9,[11,12,13,[15]],10]
]


function flat(arr){
    let ans=[]
    for(let ele of arr){
        if(Array.isArray(ele)){
            ans.append(...flat(ele))
        }else{
            ans.append(ele)
        }
    }
    return ans
}
console.log(flat(arr))



//3
// let ans=[...arr];
// while(ans.some((num)=>Array.isArray(num))){
//     ans=[].concat(...ans)
// }
// console.log(ans)


//2
// console.log(arr.toString().split(',').map((num)=>parseInt(num)))

//1
// console.log(arr.flat(Infinity))
