import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import myImage from './images/imgd.jfif'
import myHtml from './images/htmlcopy.png'
import myCss from './images/csscopy.png'
import myJavascript from './images/jscopy.png'
import react from './images/reactcopy.png'


const user = (
  <div className='image_div'>
    {/* <img src={myImage} alt='asabeneh profile' /> */}
    <img className='size' src={myHtml} alt='Html' />
    <img className='size' src={myCss} alt='CSS' />
    <img  className='size' src={myJavascript} alt='Javascript' />
    <img  className='size' src={react} alt='React' />
  </div>
)

const main = (
  <header>
    <div className='header-wrapper'>
      <h1>Subscribe</h1>
      <p> Sign up with your email address to receive new and updates </p>
      <div>
        <input type="text"  placeholder='First name'/>
        <input type="text"  placeholder='Last name'/>
        <input type="text" placeholder='Email'/>
      </div>
      <button className='subscribe'>Subscribe</button>
    </div>
  </header>
)

// JSX element, header

const title = 'Software Developer'
const country = 'Finland'
const author = {
  firstName: 'Asabeneh',
  lastName: 'S. Yetayeh',
}

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
    <img className='profile' src={myImage} alt='Html' />
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <h1>{title}, {country}</h1>
      <h3>Skills</h3>
      <div>
        <button className='skill'>HTML</button>
        <button className='skill'>CSS</button>
        <button className='skill'>SASS</button>
        <button className='skill'>JS</button>
        <button className='skill'>REACT</button>
        <button className='skill'>REDUX</button>
        <button className='skill'>NODE</button>
        <button className='skill'>MONGODB</button>
        <button className='skill'>PYTHON</button>
        <button className='skill'>FLASK</button>
        <button className='skill'>DJANGO</button>
        <button className='skill'>NUMPY</button>
        <button className='skill'>PANDAS</button>
        <button className='skill'>DATA ANALYSIS</button>
      </div>
      <div className='second-div'>
        <button className='skill'>MYSQL</button>
        <button className='skill'>GRAPHQL</button>
        <button className='skill'>D3.JS</button>
        <button className='skill'>GATSBY</button>
        <button className='skill'>DOCKER</button>
        <button className='skill'>HEROKU</button>
        <button className='skill'>GIT</button>
      </div>
    </div>

  </header>
)
const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {main}
    {user}
    {header}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)