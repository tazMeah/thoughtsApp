"use strict";

const socialPosts = {
    template: `
    <button>New Thought</button>
    <section>
        <ul>
            <post></post>
        </ul>
    </section>
    
    `,
    controller: function() {
        const vm = this;
         this.post = function() {
            console.log("This is from the socialPosts.js file.")
        }
    }
};


angular.module("thoughts")
    .component("socialPosts", socialPosts)