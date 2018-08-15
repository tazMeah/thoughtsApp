"use strict";
const post = {
  bindings: {
    thought: "<",
    deleteThought: "&",
    index: "<"
  },
  template: `<h2> {{ $ctrl.thought.title }}</h2>
  <i class="fas fa-times" ng-click="$ctrl.deleteThought({index: $ctrl.index})"></i>
  <p>{{ $ctrl.thought.thought }}</p>
  <button ng-click="$ctrl.deleteThought({ index: $ctrl.index });">Delete</button>`
};

angular
  .module("App")
  .component("post", post);