;(function(){}(
  const $ = function(id) {
    return document.getElementById(id); 
  };
  
  const wrapInnerText = function(el) {
    let f = function(value) {
      el.innerText = value; 
      return f;
    };

    return f;
  };

  class ClassWrap {
    constructor(el) {
      this._el = el;
    }
    
    set(args) {
      this._el.add.apply(null, args);
    }
    
    remove(args) {
      this._el.remove.apply(null, args);
    }
    
    toogle(arg) {
      this._el.toogle(arg);
    }
  }

  const title    = wrapInnerText($("title"));
  const question = wrapInnerText($("question"));
  const answer   = wrapInnerText($("answer"));

  const mainPageClass = new ClassWrap($('main-page'));
  const quizPageClass = new ClassWrap($('quiz-page'));
  const answerClass =   new ClassWrap($('answer'));
  const revealButtonsClass = new ClassWrap($('reveal-buttons'));
  const answerButtonsClass = new ClassWrap($('answer-buttons'));

   
  
  {
    obj: document.getElementById("title"),
    key: "innerText",
    state: "title"
  }
));