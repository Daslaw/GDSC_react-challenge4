import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/imgd.jfif'

import myHtml from './images/htmlcopy.png'
import myCss from './images/csscopy.png'
import myJavascript from './images/jscopy.png'
import react from './images/reactcopy.png'


// JSX element, header
const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const country = 'Finland'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)


// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img className='size' src={myHtml} alt='Html' />
    <img className='size' src={myCss} alt='CSS' />
    <img  className='size' src={myJavascript} alt='Javascript' />
    <img  className='size' src={react} alt='React' />
  </div>
)



// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

// JSX element, header
const Profile = () =>(
  <section>
    <div className='header-wrapper'>
    <img className='profile' src={asabenehImage} alt='Html' />
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <h6>{title}, {country}</h6>
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
      <HexaColor />
    </div>

  </section>
)


// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <UserCard />
      <div className="container-sub">
          <h1>Subscribe</h1>
          <p> Sign up with your email address to receive new and updates </p>
          <div>
            <input type="text"  placeholder='First name'/>
            <input type="text"  placeholder='Last name'/>
            <input type="text" placeholder='Email'/>
          </div>
          <button className='subscribe'>Subscribe</button>
      </div>
      <Profile />
        {/* {personAge} */}
    </div>
  </main>
)

const copyRight = '2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)