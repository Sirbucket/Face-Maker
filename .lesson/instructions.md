# OO Character Builder

Welcome to my Character Builder, in an Object-Oriented style in TypeScript.

This is a pretty common way to build OO code in JavaScript. We use the class constructor, which is syntactic sugar around JavaScript's constructor pattern.

A good place to start reading is probably this [handbook to classes in TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)
You can also read the [official documentation on JavaScript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 

## Step 1: Getting Your Feet Wet
Then take a look at the code in this file and try...

1. Create a new type of control to let you input a number (use <input type="range">). You'll want to start by making a new file inside of controls for it, then working from the `checkbox.ts` as a template.
2. Create one of those controls for each eye (left and right).
3. Extend the drawing in `drawing/index.ts` so it has a method for setting the eye size.
4. Connect up your control to the new eye-size-setting method so the user can change the size of the eyes.

## Step 2: Build Something of Your Own...

Step 2 will be to actually create a little "character builder" of your own that you enjoy. You should have at least:

1. 4 types of control objects (can include a "meta" object like an expander that shows/hides other controls).
2. An output that responds in real time to changes in controls.
3. Something delightful and enjoyable.