function studentData(firstName, lastName, age, marksArray, ...hobbies) {
  return {
    fullName:`${firstName} ${lastName}`,
    age:age,
    hobbies:hobbies,
    
    getInfo: function (){
     return `${this.fullName}'s age is ${this.age}.`
    },
    getResult:function(){
      const totalMarks = marksArray.reduce((acc, mark) => acc + mark, 0);//  here the accumulator is zero +

      const averageMarks = totalMarks / marksArray.length;
      return averageMarks >= 50 ? 'Result: PASS' : 'Result: FAIL';
    }

  }

}

export {
  studentData
}