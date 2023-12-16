let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for( let i=0; i<data.length;i++){
    if(data[i].profession=="developer"){
      console.log(data[i])
    }
  }
}

// 2. Add Data
function addData() {
  let obj1 = {
    name: "", age:"" , profession: "" 
  }
  obj1.name=prompt("enter the name");
  obj1.age=Number(prompt("enter the age"))
  obj1.profession=prompt("enter the profession")
  data.push(obj1)
}

// 3. Remove Admins
function removeAdmin() {
  for( let i=0; i<data.length;i++){
    if(data[i].profession=="admin"){
      data.splice(i, 1)
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  let arr1=[1,2,3]
  console.log(arr1)
  let arr2=[4,5,6]
  console.log(arr2)
  let arr3=[...arr1,...arr2]
  console.log(arr3)
}

// 5. Average Age
function averageAge() {
  let avg =0,count=0
  let totalage=0
  for(let i=0;i<data.length;i++){
    totalage+=data[i].age
    count++
  }
  avg=totalage/count;
  console.log(avg)

  
}

// 6. Age Check
function checkAgeAbove25() {
  let isther= false
  for(let i=0;i<data.length;i++){
   if(data[i].age>25){
    isther=true
   }
  }
  if(isther=false){
    console.log("there is no person above the age of 25")
  }
  else{
    console.log("there is a person above the age of 25")
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let arrprof =[]
  for(let i=0;i<data.length;i++){
    let chkvar = arrprof.includes(data[i].profession)
    if(chkvar){
       continue;
    }
    else{
      arrprof.push(data[i].profession);
    }
  }
  for(let i=0 ;i<arrprof.length;i++){
    console.log(arrprof[i]);
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => a.age-b.age);
}

// 9. Update Profession
function updateJohnsProfession() {
  data[0].profession="manager";
  for(let i=0 ;i<data.length;i++){
    console.log(data[i]);
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let arrprof =[]
  for(let i=0;i<data.length;i++){
    let chkvar = arrprof.includes(data[i].profession)
    if(chkvar){
       continue;
    }
    else{
      arrprof.push(data[i].profession);
    }
  }
console.log(arrprof.length);
}
