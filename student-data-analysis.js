const data = [
  { firstName: "Tirth", lastName: "shah", age: 23 },
  { firstName: "Abhishek", lastName: "pathak", age: 25 },
  { firstName: "Riya", lastName: "patel", age: 24 },
  { firstName: "Bhala", lastName: "batuk", age: 18 },
  { firstName: "Khalnayak", lastName: "Kalia", age: 24 },
  { firstName: "Manthan", lastName: "Landage", age: 25 },
  { firstName: "khaby", lastName: "Laby", age: 34 },
  { firstName: "Tappu", lastName: "Gada", age: 21 },
  { firstName: "Gogi", lastName: "Sodi", age: 14 },
  { firstName: "Jethalal", lastName: "Gada", age: 34 },
  { firstName: "Samay", lastName: "Raina", age: 30 },
  { firstName: "Sonu", lastName: "Bhide", age: 19 },
  { firstName: "Aniket", lastName: "Katkar", age: 28 },
  { firstName: "Bharat", lastName: "Karda", age: 25 },
  { firstName: "Kapil", lastName: "Ranpise", age: 22 },
  { firstName: "Subhash", lastName: "Rane", age: 29 },
  { firstName: "Rishabh", lastName: "Mantri", age: 26 },
  { firstName: "Ram", lastName: "Agrawal", age: 29 },
  { firstName: "Monu", lastName: "Bhide", age: 18 },
  { firstName: "Utkarsha", lastName: "Tayade", age: 25 },
  { firstName: "Love", lastName: "Singhania", age: 21 },
];
const arrayLength = data.length;
// console.log(typeof data[0].age);
function getStudents() {
  const inputText = document.getElementById("age-input");

  //Removing the existing data
  const parentTag = document.getElementById("table-body");
  const tdTagsToRemove = document
    .getElementById("table-body")
    .getElementsByTagName("tr");
  while (tdTagsToRemove.length) {
    parentTag.removeChild(tdTagsToRemove[0]);
  }

  var index = 1;
  for (student of data) {
    if (student.age >= parseInt(inputText.value)) {
      var row = document.createElement("tr");
      var body = document.getElementById("table-body");
      row.innerHTML = `<td>${index}</td><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.age}</td>`;
      body.appendChild(row);
      index++;
    }
  }
}
