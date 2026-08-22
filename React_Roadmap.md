## Why to Learn react->
* hype, job market , trend , build ui
* Makes easy to manage adn build complex frontend

## when should learn JS 
* after mastering JS
## Why React Created 
* To solve phantom message problem 

State managed by JS -> State - Js &
UI Managed by dom  -> Ui-> dom

there was no consistency in  ui 

## React Learning Process 
1. Go in depth which understanding every topic 
2. Via projects onw topic at a time 

## React Is A library 

## Topics To learn 
-> Core of react -> (State or UI manipulation ,jsx )
-> component reusabilty
-> Reusing of component (props)
-> How to Propogate change (hooks)

##addtional Addon TO react 
-> Router as react don't have routers
-> State Management -> Redux , redux toolkit , zustand ,context api 
-> Class based Component 
-> BAAS(backend as a service ) apps

## After React->
We should learn Next.Js , setsby ,remix 

## React Library 
It contains attachment like React -dom and React-native

npm- node package manager -> used as downloaded in system
npx - nodepacket executer -> used directly without installing 

package.json -> It is the entry point  
## create-react-app
it is a utility which is used to add react in project and it is  a bulky utility and  install multiple heavy node modules and used less now a days 

## with react we get programming capabilties 
react-scripts in package.json  and behind injects the js in html in basic react
## we we meant to render a component we need to make the name uppercase  whether with vite or create react and name should also from capital and should give filename with .jsx

** In a function we can return only one tag so as to solve this we use 
div tag or <>.....</>empty tag 

## React app is a single page applications as in this we use only one html page and inject other components to it just  to let user  feel they are on different pages

## If we want to use react in browser then we use react-dom and  for mobile app we use react-native

## Method to get a render to work ->
function customrender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
} // it is basic and given is more better approach
function customrender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if(prop ==='Children')continue;
        domElement.setAttribute(prop ,reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

## Every react use a bundeler -> it do behind the scene works like syntax correcter by doing parsing  
