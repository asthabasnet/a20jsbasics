const arr1 =[1,2,3];
const arr2 =[4,5,6];
//console.log(arr1 + arr2);

//spread operator 

const mergedArr = [...arr1, ...arr2];
//console.log(mergedArr);

//const mergedArray=(a,b)=> {
   // const result=[...a, ...b];
 //   return result;
//};
const mergedArray=(a,b) => [...a, ...b];
//console.log(mergedArray(arr1,arr2,arr1,arr2));

const person={
    name: "astha",
    age:17,
};

const newPerson={
    ...person,
    age:18,
};
console.log(newPerson);

const personDetail =(name,age) => {
    const person ={
        name:name,
        age:age,
    };
    return person;
};
console.log(personDetail("astha",18));

