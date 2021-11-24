# simple-react-example

This is a simple react application, the application is a webpage with header, some description text and then a movie list.  

The purpose of this project is to introduce class components (TODO: Possibly make these function components), the parent child relationship of components, reusability and props. 

There are 4 class components in this project, 

- ParentClass 

  - ReusableParagraphBox 

  - MovieList 

    - MovieItem 

 

## *ParentClass* 

This is the main component, linked to the base `ReactDOM.render()`. It holds the `ReusableParagraphBox` and the `MovieList`.  

This component provides an example of:  

  - how to set a variable and pass it down to a child component as a prop 

  - Adding components to HTML Element 

 

## *ReusableParagraphBox*

This is a simple component that just returns a `<p>` tag. Though this isn't necessarily practical to do, it’s a great example of: 

  - How to call a prop that has been passed to a component by a parent 

  - How a single component can be reused with different values as needed 


## *MovieList*  

This component by itself is an empty ordered list, it holds the `MovieItems` as children and provides an example of: 

  - Separating a list/table and its items, then programmatically adding list items/rows by passing down props 

 

## *MovieItem* 

A movie item is a configurable list item and another example of a reusable component 

  - Movie items get added to a movie list and a movie name gets passed down via a prop 
