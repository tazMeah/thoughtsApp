"use strict";
const postForm = {
    bindings: {
    addThought: "&"
    },
  template: `

  <form ng-submit="$ctrl.addThought({ newThought: $ctrl.newPost });">
    <label>Title:
        <input type="text" ng-model="$ctrl.newPost.title"> 
    </label>
    <label>Thought:
        <textarea ng-model="$ctrl.newPost.thought"></textarea>
    </label>
    
    <button>Add Post</button> 
  </form>


  `
};

angular
  .module("App")
  .component("postForm", postForm);