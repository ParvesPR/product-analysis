import React from 'react';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <Header></Header>
            <article className='semantic-tag'>
                <h2>What is Semantic Tag?</h2>
                <p>A semantic element clearly describes its meaning to both the browser and the developer.These tags tell the browser how to display the content on the page.By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page. For users who are blind or visually impaired and rely on screen readers to verbally describe what is on a page, proper use of HTML5 semantic elements will allow screen readers to more accurately communicate your content by making the visual audible.Examples of non-semantic elements: div and span - Tells nothing about its content. Examples of semantic elements: form , table , and article - Clearly defines its content.</p>
            </article>
            <article className='context-api'>
                <h2>React Context API</h2> <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. It returns a consumer and a provider. If we have three components in our app, A->B->C where A is the parent of B and B is the parent of C. To change a state from C and pass it to A, keep the state of A in a store, then extract the state from store and use it in C. This completely eliminates the necessity of the state to pass through B. So the flow is like A->C.</p>
            </article>
        </div>
    );
};

export default Blog;