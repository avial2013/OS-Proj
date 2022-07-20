export default class Question {

  constructor(questionNum,questionStr,isTrue,category,grade = 0) {
    this.questionNum = questionNum;
    this.questionStr = questionStr;
    this.isTrue = isTrue;
    this.category = category;
    this.grade = grade;

  }
}
