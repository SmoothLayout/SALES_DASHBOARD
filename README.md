# SALES DASHBOARD

## IMPORTANT CODING CONCEPTS TO REMEMBER FOR REACT
-`DRY`: _Dont Repeat Yourself_. Write a thing once, and then reuse it (is as relating to functions, components etc. especially components)

-`SRP`: _Single Responsibility_. Each piece of your code must do a specific thing, so there are no ambiguity. This sells the "modularized" coding flow, whereby removing one thing doesnt necessarily break the entire codebase.

`OCP`: _Open/Closed_. Open to extension, close to modification
`SOC`: _Seperation of Concerns_. Data, UI and styling must be kept apart. Components hold UI, hooks hold special functions etc.


XTICS OF A JSX FILE
You have your functions (js), styling (css-tailwind) and html written in 1 file
It's file extension is .jsx
You cannot return 2 elements in jsx functions
NB: What ever component you create no matter how complex or small it is, must always point back or be imported (in a way) to or inside the app.jsx for it to show on the page