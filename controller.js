class Controller {
  constructor(model, view) {
    this.model = model;
    this.view  = view;

    this.daysC = 1.5;
    this.learningC = 1.2;

    'reveal easy good hard fail back'
    .split(' ')
    .map((e) =>
      $(e).addEventListener('click', () => this.click(e)));

    this.model.forEach((e, i) =>
      button.addEventListener('click', () => this.click('' + i)));

    this.conditions = {
      'reveal': function() {
        this.view.releaseAnswer();
      },
      'back': function() {
        this.model.state = 'menu';
        this.view.updateState();
      }
    };

    let words = 'fail easy good hard'.split(' ');
    [0, 1, 2, 3].forEach((e, i) =>
      this.conditions[words[i]] = processAnswer(e));
  }

  click(name) {
    if (this.conditions[name] == null) {
      const v = parseInt(name);
      if (v === v) { // NaN check
        this.model.state = 'quiz';
        this.currentList = v;
        this.generateQuestion();
      }
    } else {
      this.conditions[name]();
    }
  }

  calculateRating(lid, qid) {
    const currentDate = new Date.valueOf();
    const item        = this.model.lists[lid];
    const lastAppear  = item.lastAppear[qid];

    const days = Math.floor((currentDate - lastAppear) / (1000 * 60 * 60 * 24));
    const timeC = Math.pow(this.daysC, -days);

    return timeC * item.rating[qid];
  }

  updateRating(lid, qid, coef) {
    this.model.lists[lid].rating[qid] *= coef;
  }

  generateQuestion() {}

  processAnswer(coef) {
    return function() {
      const m = this.model;
      const lid = m.currentList;
      const qid = m.currentQuestion;
      const list = m.lists[lid];

      m.history.push(lid);

      

    }
  }
}
