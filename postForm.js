"use strict";

const postForm = {
    template: `
    <form>
        <label>Title
            <input ng-model="forminput">
        </label>
        <label>Thought
            <textarea ng-model="formtextarea"></textarea>
        </label>
        <button type="button" id="addPost" ng-click="$ctrl.onSubmit(forminput, formtextarea)">Add Post</button>
    </form>
    
    `,
    bindings: {
        
    },
    controller: function(){
        const vm = this;
        vm.thoughts = [{
            title: "Today's thought.",
            thought: "I want to be able to eat ice cream, but dairy in the US is sickening."
        },{
            title: "Good morning",
            thought: "If it weren't for Donald Trump, I wouldn't be mad every time someone says 'president'."
        }];
        vm.onSubmit = function (forminput, formtextarea) {
            console.log(`onSubmitting here. the ${forminput} and here is the ${formtextarea}`);


        }
    }

};

angular.module("thoughts")
    .component("postForm", postForm)