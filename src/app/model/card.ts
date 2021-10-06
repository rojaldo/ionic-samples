export class Card {
    question = '';
    answers: string[] = [];
    correctAnswer = '';
    isAnswered = false;
    userAnswer = undefined;
    constructor(json: any) {
        this.question = json.question;
        this.answers = json.incorrect_answers
        this.answers.push(json.correct_answer);
        this.correctAnswer = json.correct_answer;
    }
}