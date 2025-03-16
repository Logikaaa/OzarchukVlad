let sing = ["+", "-", "*", "/"]
let quetion_field = document.querySelector('.question')
let ans_btn = document.querySelectorAll('.ans')

function randint(min,max){
    return Math.round(Math.random()* (max - min) + min)
}

function getRandomSind(){
    return sing[randint(0,3)]
}

class question{
    constructor(){
        let a = randint(1,30)
        let b = randint(1,30)
        let sing = getRandomSind()
        this.question = `${a} ${sing} ${b}`
        if (sind == '+'){
            this.correct = a + b
        }

        if (sind == '+'){
            this.correct = a + b
        }

        if (sind == '-'){
            this.correct = a - b
        }

        if (sind == '*'){
            this.correct = a * b
        }

        if (sind == '/'){
            this.correct = a / b
        }

        this.answers = [
            randint(this.correct - 15, this.correct - 1),
            randint(this.correct - 15, this.correct - 1),
            this.correct,
            randint(this.correct + 1, this.correct + 15),
            randint(this.correct + 1, this.correct + 15)
        ]

    }
    display(){
        quetion_field.innerHTML = this.question
        for (let i =0; i < this.answers.length; i += 1){
            ans_btn[i].innerHTML = this.answers[i]
        }
    }
}


let curent_question = new question()
curent_question.display()