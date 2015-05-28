(function () {
    'use strict';

    // Example of switching from recursive to stack iterative coding.

    function flatten(input) {
        var tracker = {},
            stack = [input],  // Prime the stack with the initial value
            items = [],
            i;

        // Begin the stack loop, only iterating when there's at least one item in the stack
        while (stack.length > 0) {
            input = stack.pop();
            if (input instanceof Array) {
                // if the current item is an array, we'll unravel it
                if (!tracker[input]) {
                    // if the element hasn't been seen before, the tracker[input] value will be undefined
                    tracker[input] = true; // set it to true, so it isn't undefined any longer
                    i = input.length;
                    while (i--) {
                        stack.push(input(i)); // Add each of the items to the stack
                    }
                }
            } else {
                // When the current item is not an array, add it to an array that will be returned (the flattened version)
                items.push(input);
            }
        }

        return items;
    }


}).call(this);