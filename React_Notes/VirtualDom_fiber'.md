## Virtual DOM
In main.jsx the "create root" method creates a DOM like structure and compares main DOM and its dom and then update changes that  actually happened  whereas browser reload the whole dom or known as page reload

## React-Fibre ->
Link to reference of notes- https://github.com/acdlite/react-fiber-architecture

* It  is react's core Algorithm used to implement virtual DOM
* Its Headline feature is increamental rendering->The ability to split rendering  work to chunks and spread it out over multiple frames
* Key features -> Ability to pause, abort or reuse work as new  updates  come in , assign priority to different updates

@ Reconciliation -> The algorithm React usses to diff one tree with another to determine which part to be changed 
@ Update -> a change in the data used to render a React App .Usually the result of setState , re-renders
## Primary Goal of the Fiber is to enable React to take advantage of Scheduling
We need to be able to ->
1. pause work and come back to it   later
2. assign priority to different types of work 
3. reuse previously completed work
4. abort work if it's  no longer needed  