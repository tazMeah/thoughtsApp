"use strict";

const post = {
    bindings: {
        post: "&"
    },
    template: `
    <li >
        <h2>h2 from post</h2>
        <p>p from post</p>
    </li>
    `,
    controller: function() {
        const vm = this;

    }
};


angular.module("thoughts")
    .component("post", post)