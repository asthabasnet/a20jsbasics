const collegeName =["astha","pari","pariz"];
const name ={
    id: 1,
    firstName:"astha",
    colleges: collegeName,
};
console.log(collegeName[2]);
console.log(name.colleges[2]);

const students =["astha","pasta","nasta","rasta"];
console.log(students.length);
 const collegeDetails={
    name:"techspire",
    section:20,
    students:students,
    award:null,
 };
 console.log(collegeDetails.students[3]);

 function getStudentName(){
    console.log("i am normal func");
 }
 getStudentName();

const getColleName = () => {
    console.log("am arrow func");
};


const getName=(name)=>{
    console.log(`hi,${name}"`);
};
getName("astha");