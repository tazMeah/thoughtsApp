"use strict";
const socialPosts = {
  template: `
  <button ng-click="$ctrl.toggle()">New Thought</button>
  <post-form add-thought="$ctrl.addThought(newThought);"></post-form>
  <section>
  
  <post delete-thought="$ctrl.deleteThought(index);" thought="thought" index="$index" ng-repeat="thought in $ctrl.thoughts track by $index"></post>
  </section>
  
  `,
  controller: function() {
    const vm = this;
    vm.thoughts = [
      { 
        title: "::During", 
        thought: "Why are there no 'during' pictures?", 
      },
      { 
        title: "When I was younger...", 
        thought: "One time a guy handed me a picture. He said, 'Here's a picture of me when I was younger.' Every picture is of you when you were younger. 'Here's a picture of me when I'm older.' 'You son of ..., how'd you pull that off? Let me see that camera. What's it look like?'",   
      },
      {
          title: "Fooseball",
          thought: "I think fooseball is a combination of soccer and shishkabobs."
      },
      {
          title: "not that funny",
          thought: "So, I sit at the hotel at night and I think of something that's funny. Or, If the pen is too far away, I have to convince myself that what I thought of wasn't funny."
      },
      {
          title: "At Ease",
          thought: "I never joined the army because at ease was never that easy to me. Seemed rather uptight still. I don't relax by parting my legs slightly and putting my hands behind my back. That does not equal ease. At ease was not being in the military. I am at ease, bro, because I am not in the military."
      },
      {
          title: "Cloud 9",
          thought: "Why is Cloud 9 so amazing? What is wrong with Cloud 8?"
      },
      {
          title: "Dry Clean",
          thought: "This shirt is dry clean only. Which means... it's dirty."
      },
      {
          title: "WPM",
          thought: "If I had nine of my fingers missing I wouldn't type any slower."
      },
      {
          title: "Cartwheels",
          thought: "I'd like to get four people who do cart wheels very good, and make a cart."
      },
      {
          title: "SOS",
          thought: "I would imagine that if you could understand Morse code, a tap dancer would drive you crazy."
      },
      {
          title: "Like a water hose?",
          thought: "I like to hold the microphone cord like this, I pinch it together, then I let it go, then you hear a whole bunch of jokes at once."
      },
      {
          title: "Pens",
          thought: "I bought a seven-dollar pen because I always lose pens and I got sick of not caring."
      },
      {
          title: "Reading iz fundamintil",
          thought: "Every book is a children's book if the kid can read!"
      },
      {
          title: "Escalators",
          thought: "An escalator can never break: it can only become stairs. You should never see an Escalator Temporarily Out Of Order sign, just Escalator Temporarily Stairs. Sorry for the convenience."
      }


    ];
    vm.addThought = function (newThought) {
        if (document.querySelector("form input").value) {
            vm.thoughts.unshift(angular.copy(newThought));
            document.querySelector("form input").value = "";
            document.querySelector("form textarea").value = "";
            document.querySelector("post-form").classList.toggle("nowShowing")
        }
      
    };
    vm.deleteThought = function (index) {
      vm.thoughts.splice(index, 1);
    };
    vm.toggle = function() {
        document.querySelector("post-form").classList.toggle("nowShowing");
    }
  }
};

angular
  .module("App")
  .component("socialPosts", socialPosts);