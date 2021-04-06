// function arr_opp(arr){
//     let i=0,j=arr.length-1
//     let tmp;
//     while(i<j){
//         tmp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=tmp
//         i+=1
//         j-=1
//   }
//     let index=0
//     let pre_index=0
//     while(index<arr.length){
//         if(arr[index]!=" " && index!=arr.length-1){
//             index++;
//             continue;
//         }
//         let start=pre_index;
//         let ending=index-1;
//         if(index==arr.length-1){
//             ending=index            
//         }
//         while(start<ending){
//             tmp=arr[start]
//             arr[start]=arr[ending]
//             arr[ending]=tmp
//             start+=1
//             ending-=1
//         }
//         pre_index=index+1
//         index+=1
//     }
//     return arr
// }

// let arr="my dog like barking";
// str=arr.split("")
// console.log(arr_opp(str));  




// function merge(arr1,arr2){
//     let ans=[];
//     while(arr1.length>0 && arr2.length>0){
//         if (arr1[0]>arr2[0]){
//             ans.push(arr2.shift())
//         }else{
//             ans.push(arr1.shift())
//         }
//     }
//     return ans.concat(arr1).concat(arr2)
  

// let i=0;
    // let j=0;
    // while(i<arr1.length && j<arr2.length){
    //     if(arr1[i]<arr2[j]){
    //         ans.push(arr1[i])
    //         i++;
    //     }else{
    //         ans.push(arr2[j])
    //         j++;
    //     }
    // }
    // return ans.concat(arr1.slice(i,arr1.length)).concat(arr2.slice(j,arr2.length))
// }


// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let arr1=mergeSort(arr.slice(0,mid))
//     let arr2=mergeSort(arr.slice(mid))
//     let ans= merge(arr1,arr2)
//     return ans
// }
// console.log(mergeSort([32,12,56,78,76,45,36]));



// function merge(leftArr, rightArr){  
//     var result = [];  
//     while (leftArr.length > 0 && rightArr.length > 0){  
//       if (leftArr[0] < rightArr[0])  
//         result.push(leftArr.shift()); //把最小的最先取出，放到结果集中   
//       else   
//         result.push(rightArr.shift());  
//     }   
//     return result.concat(leftArr).concat(rightArr);  //剩下的就是合并，这样就排好序了  
// }  

// function mergeSort(array){  
//     if (array.length == 1) return array;  
//     var middle = Math.floor(array.length / 2);       //求出中点  
//     var left = array.slice(0, middle);               //分割数组  
//     var right = array.slice(middle);  
//     return merge(mergeSort(left), mergeSort(right)); //递归合并与排序  
// }  

// var arr = mergeSort([32,12,56,78,76,45,36]);
// console.log(arr);   // [12, 32, 36, 45, 56, 76, 78]


// function　merge(arr1, arr2){
//     var　result=[];
//     while(arr1.length>0 && arr2.length>0){
//         if(arr1[0]<arr2[0]){
//               /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
//             result.push(arr1.shift());
//         }else{
//             result.push(arr2.shift());
//         }
//     }
//     console.log(result);
//     return　result.concat(arr1).concat(arr2);
// }

// function mergeSort(arr){
//     let lengthArr = arr.length;
//     if(lengthArr <2){
//      return [];
//     }
//     let arr1=[],arr2=[]
//     while(arr.length > 1){
//      arr1.push(arr.shift());
//      arr2.push(arr.shift());
//      let mergeArr = merge(arr1, arr2);
//     }
//     return mergeArr;
// }


// console.log(mergeSort([4,5,6,1,2]));


// var arr =  new Array(10);   //表格有10行
// for(var i = 0;i < arr.length; i++){
//    arr[i] = new Array(10);    //每行有10列
// }
// for(let i=0;i<arr.length;i++){
//     for (let j=0;j<arr[0].length;j++){
//         arr[i][j]=false
//     }
// }

// console.log(arr);

// var a = {
//     user:"掘金",
//     fn:function(){
//         console.log(this.user);
//     }
// }
// var b = a.fn;
// var c = b.bind(a);
// c(); //此时会吧函数打印出来

// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// let flat=(arr)=>{
//     return arr.reduce((prev,cur)=>{
//         return prev.concat(Array.isArray(cur)?flat(cur):cur)
//     },[])
// }
// console.log(flat(arr));

// //[['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]

// let flat2=(arr)=>{
//     return arr.reduce((prev,cur)=>{
//         let tmp=[]
//         for(const i of prev){
//             for(const j of cur){
//                 tmp.push(i+j)
//             }
//         }
//         return tmp
//     },[""])
// }

// console.log(flat2([['a', 'b'], ['n', 'm'], ['0', '1']]));

//数组去重
let array=[12,23,12,15,25,23,25,14,16]

let dic={}
for(let num of array){
    if(!(num in dic)){
        dic[num]=num;
    }
}
let ans=[]
console.log(dic);
for(let num of Object.keys(dic))ans.push(parseInt(num))
console.log(ans);


// let set=new Set(array)
// let ans=[...set]
// let ans1=Array.from(set)
// console.log(ans1);

// for(let i=0;i<array.length-1;i++){
//     let item=array[i],
//         tmp=array.slice(i+1);
//         if(tmp.includes(item)){
//             array[i]=null
//         }    
// }

// ans=array.filter((ele)=>ele!==null)

// console.log('1' != 1);

