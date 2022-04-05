import React from "react";

const Blogs = () => {
  return (
    <div className="container my-4">
      <h2>Q1: What is context API?</h2>
      <h5>Answer:</h5>
      <article>
        <p>
          Context API is a feature of React that allows us to share state across
          the entire app without "prop drilling". Earlier, to share state from
          grandparent to grandchild, we first have share the state with parent.
          Then parent would share the state with child. So everyone in this path
          would get what passed by grandparent. This is called "prop drilling".
        </p>
        <p>
          But when context API comes, we can pass any state to any child without
          "prop drilling". To create a context we use a function named
          "createContext()" with a default value and export it. The format is
          export const UserContext = createContext('One'); Now we wrap the
          component which we wanted to provide context by "ContextName.Provider"
          and pass the value. The format is " UserContext.Provider value="Two"
          Children UserContext.Provider". To receive context we use
          useContext(ContextName). the format is const
          userValue=useContext(UserContext). Now by using context API we can use
          this value without prop drilling.
        </p>
      </article>

      <h2 className="mt-5">Q2: What is semantic tag?</h2>
      <h5>Answer:</h5>
      <article>
        <p>
          Semantic elements in HTML are those that clearly describe their
          meaning in a human and machine readable way. The tag used to create
          semantic element is called semantic tag. For example "header",
          "footer" and "article" are all considered semantic because they
          clearly describe the purpose of the element and the type of content
          that is inside them.
        </p>
        <p>
          Semantic code is easier to read and programmer can easily understand
          what inside the tag is. For example "header" is generally used at the
          top of a document and normally used as a navigation container.
          "section" is used as the groping of a particular content. "aside" is
          used as a sidebar of main content and used show extra information of
          the page. "footer" generally found at the bottom of a document. It
          generally contain information about author, legal information,links to
          related information etc. Semantic tag also increase the accessibility
          of website by search engine. Search engines are able to better
          understand the context and content of website, meaning a better
          experience for users.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
