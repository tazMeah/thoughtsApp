"use strict";
const postForm = {
    bindings: {
    addThought: "&"
    },
  template: `

  <form ng-submit="$ctrl.addThought({ newThought: $ctrl.newPost });">
    <label>Title:
        <input type="text" ng-model="$ctrl.newPost.title" placeholder="Post title"  ng-focus="fsize=16" ng-blur="fsize=12" ng-init="fsize = 12"> 
        <style>input {font-size: {{fsize}}px;}textarea {font-size: {{tsize}}px;}</style>
    </label>
    <label>Thought:
        <textarea ng-model="$ctrl.newPost.thought" placeholder="share your thoughts..." ng-focus="tsize=16" ng-blur="tsize=12" ng-init="tsize = 12"></textarea>
    </label>
    
    <button>Add Post</button> 
  </form>


  `
};

angular
  .module("App")
  .component("postForm", postForm);