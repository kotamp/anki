class View {
  constructor(model) {
    const $ = function(id){
      return document.getElementById(id);
    };

    this.model = model;

    this.menu  = $("menu");
    this.quiz  = $("quiz");

    this.question = $('question');
    this.answer   = $('answer');

    this.questionButtons = $('answer-buttons');
    this.answerButtons   = $('reveal-buttons');

    this.menuList = $('menu-list');

    this.quizButtons =
      this.model.lists.map((e, index) => {
        const name   = e.name;
        const text   = document.createTextNode(name);
        const button = document.createElement('button');
        const li     = document.createElement('li');

        button.appendChild(text);
        li.appendChild(button);
        this.menuList.appendChild(li);

        return button;
      });

    }

    updateState() {
      newState= this.model.state;
      if (this.displayedState !== newState) {
        if (newState === 'menu') {
          hide(this.quiz);
          show(this.menu);
        } else {
          hide(this.menu);
          show(this.quiz);
        }
      }
    }

    updateQuestion() {
      const m = this.model;

      listIndex   = m.currentList;
      pairIndex   = m.currentQuestion;
      currentQuiz = m.lists[listIndex];

      questionText = currentQuiz.keys[pairIndex];
      answerText   = currentQuiz.values[pairIndex];

      hide(this.answer);
      show(this.questionButtons);
      hide(this.answerButtons);

      this.question.innerText = questionText;
      this.answer.innerText   = answerText;
    }

    hide(el) {
      el.classList.add('hidden');
    }

    show(el) {
      el.classList.remove('hidden');
    }


  }
}
