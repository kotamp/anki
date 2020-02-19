class Model {
  constructor() {
    this.lists = [{
      keys:
      values:
      name:
      lastAppear:
      progress:
      lastFailed:
    }];

    this.state = "menu"; // "quiz"
    this.currentList = 0;
    this.currentQuestion = 0;
    this.history = [];
  }
}
