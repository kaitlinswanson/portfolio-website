import React from 'react'; 


function Main() { 

    return (
        <div className="main-holder">
            <nav id="nav">
                <div className="name"></div>
                </nav>
            <main id="main">
            <div className="welcome">
            <div className="title">
            <div id="welcome-message">Hi, I'm Kaitlin!</div>
            <div id="info">I'm a self-taught software developer. I have experience building projects using HTML, CSS, JavaScript and React.js. Below are a few of my recent projects.
            I've completed over 20 projects which are available to view on my GitHub! </div>
            <div className="socials-holder">
                <a href="https://github.com/kaitlinswanson" id="github"><i className="fab fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/kaitlinnswanson/" id="linkedin"><i className="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/KaitlinSwan9" id="twitter"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            <img id="profile-pic" src="profile-pic.png" alt="profile pic"></img>
            </div>
            </main>
            <div className="content-class" id="content1">
                <div className="content-holder">
                <div className="projct-title"></div>
                <img src="memory-game-image.jpeg" alt="memory-game" className="project-photos" id="memory-game-img"></img>
                <button className="more-buttons" id="memory-game-button">Click For More</button>
                </div>
            </div>
            <div className="content-class" id="content2">
                <div className="content-holder">
                <div className="projct-title"></div>
                <img src="readit-image.png" alt="reddit clone" className="project-photos" id="readit-img"></img>
                <button className="more-buttons" id="readit-button">Click For More</button>
                </div>
            </div>
            <div className="content-class" id="content3">
            <div className="content-holder">
                <div className="projct-title"></div>
                <img src="weather-app.png" alt="weather app" className="project-photos" id="weather-img"></img>
                <button className="more-buttons" id="weather-button">Click For More</button>
                </div>
            </div>
            <footer id="footer">
                <div id="logos">
                <div className="logo" id="js-icon"><i class="fab fa-js-square"></i></div>
                <div className="logo" id="css-icon"><i class="fab fa-css3-alt"></i></div>
                <div className="logo" id="html-icon"><i class="fab fa-html5"></i></div>
                <div className="logo" id="react-icon"><i class="fab fa-react"></i></div>

                </div>
            </footer>
        </div>
        
    )
}
 
export default Main; 