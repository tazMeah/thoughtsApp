"use strict";
const socialPosts = {
  template: `
  <button ng-click="$ctrl.toggle()">New Thought</button>
  <post-form add-thought="$ctrl.addThought(newThought);"></post-form>
  <post delete-thought="$ctrl.deleteThought(index);" thought="thought" index="$index" ng-repeat="thought in $ctrl.thoughts track by $index"></post>
  `,
  controller: function() {
    const vm = this;
    vm.thoughts = [
      { 
        title: "Tired", 
        thought: "I'm ready to go to bed. Hopefully, tomorrow I'll understand this a bit better.", 
      },
      { 
        title: "I hate angularjs right now", 
        thought: "As soon as I master this, I'm going to create my own documentation and probably make some videos as well.", 
        
      }
    ];
    vm.addThought = function (newThought) {
      vm.thoughts.push(angular.copy(newThought));
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