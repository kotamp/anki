/*
;(function(){
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

  let names, count, lists;

  $("fail").addEventListener("click", (e) => onFail(e));
  $("hard").addEventListener("click", (e) => onHard(e));
  $("good").addEventListener("click", (e) => onGood(e));
  $("easy").addEventListener("click", (e) => onEasy(e));
  
  $("reveal").addEventListener("click", (e) => onReveal(e));

  $("title").addEventListener("click", (e) => onTitle(e));

  const createListItem = function(text) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const text = document.createTextNode('' + text);
    button.appendChild(text);
    li.appendChild(button);
    return li;
  };
  
  (function(){}(
    fetch("dict.json")
    .then((r) => r.json())
    .then(function(dict){ 
      names = dict.names;
      count = dict.count ? dict.count : 0;
      lists = dict.lists;
      const mainList = $("main-list");
      
      names.map(createListItem).forEach(function(e){
        mainList.appendChild(e);
      });
      
    });
  ));
}());
*/
(function(){
  class App {
    constructor() {
      const $ = function(id) {
        return document.getElementById(id); 
      };
      
      this.mainList = $("main-list");
      
      fetch("dict.json")
      .then((r) => r.json())
      .then((dict) => {
        this.names = dict.names;
        this.count = dict.count;
        this.lists = dict.lists;
        
        this.renderMainPage();
      });
    }
    
    renderMainPage() {
      let res = '<header><h1 class="title not-select">Japanese</h1></header>';
      this._mainPage.innerHTML = res;
  
      const ul = document.createElement("ul");
      prepareMenu().forEach((e) => ul.appendChild(e));
  
      this._mainPage.appendChild(ul);
    }
     
    
    prepareMenuItem(name) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      const text = document.createTextNode('' + name);
      
      button.addEventListener("click", (e) => this.onClick(name));
  
      button.appendChild(text); 
      li.appendChild(button);
      return li;
    }
  
    prepareMenu() {
      this.names
      .map((e) => this.prepareMenuItem(e));
    };
  }
}());
