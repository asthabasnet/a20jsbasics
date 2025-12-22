const arr=["astha","pasta","nasta","rasta","khasta"]

const printNames=(name)=>{
   /// const name="nasta"
  //  arr.map((name)=>
        if(arr.includes("nasta")){
            console.log("Hello my name is "+name)
    
    }
} 
printNames("nasta")

const numb=[9,9,9,8]
console.log(numb.filter((num)=>num ===2))
console.log(numb.find((num)=>num ===2))
//console.log(numb.includes(2))
console.log(numb.every(num=>num%2==0))