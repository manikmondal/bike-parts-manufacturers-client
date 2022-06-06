import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>

            <div class="modal-box w-11/12 max-w-5xl m-6">
                <h3 class="font-bold text-2xl text-green-600">1. How will you improve the performance of a React Application?!</h3>
                <p class="py-4">Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques!</p>
            </div>

            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-2xl text-green-600">2. What are the different ways to manage a state in a React application?!</h3>
                <p class="py-3">There are four main types of state you need to properly manage in your React apps:1.Local state 2.Global state 3.Server state 4.URL state!
                    1. Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                    2. Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    3. Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    4. URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                </p>
            </div>
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-2xl text-green-600">3. How does prototypical inheritance work?!</h3>
                <p class="py-3">JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.JavaScript prototypes are different from other inheritance methodologies in that they allow for objects to inherit directly from other objects. This means that you can create a chain of objects, with each object inheriting from the object before it.A prototype is an object that is used as a blueprint for creating other objects. When an object is created using a prototype, the new object inherits all of the properties and methods of the prototype.

                </p>
            </div>
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-2xl text-green-600">4. Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?!</h3>
                <p class="py-3">If you find that useState / setState are not updating immediately, the answer is simple: they're just queues. React useState and setState don't make changes directly to the state object; they create queues to optimize performance, which is why the changes don't update immediately.I am trying to learn hooks and the useState method has made me confused. I am assigning an initial value to a state in the form of an array. The set method in useState is not working for me, both with and without the spread syntax.Also, the main issue here is not just the asynchronous nature but the fact that state values are used by functions based on their current closures, and state updates will reflect in the next re-render by which the existing closures are not affected, but new ones are created.

                </p>
            </div>
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-2xl text-green-600">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? !</h3>
                <p class="py-3">
                    If you need the index of the found element in the array, use findIndex().
                    If you need to find the index of a value, use Array.prototype.indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
                    If you need to find if a value exists in an array, use Array.prototype.includes(). Again, it checks each element for equality with the value instead of using a testing function.
                    If you need to find if any element satisfies the provided testing function, use Array.prototype.some().

                </p>
            </div>
            <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-2xl text-green-600">6. What is a unit test? Why should write unit tests?
                </h3>
                <p class="py-3">
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    Tests protect your code. Writing tests is crucial in an environment where the code base is shared and everyone gets to modify, expand and improve other people's code. ...
                    Tests make you a better software engineer. ...
                    Tests make you better at managing your pull requests (PRs).
                    Unit testing is testing the smallest testable unit of an application. It is done during the coding phase by the developers. To perform unit testing, a developer writes a piece of code (unit tests) to verify the code to be tested (unit) is correct.

                </p>
            </div>
            <Footer></Footer>
        </div >

    );
};

export default Blogs;