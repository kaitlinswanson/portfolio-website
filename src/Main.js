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
                <img src="memory-game-image.jpeg" alt="memory-game" id="memory-game-img"></img>
                <button id="memory-game-button">Click For More</button>
                </div>
            </div>
            <div className="content-class" id="content2">Reddit Clone</div>
            <div className="content-class" id="content3">Weather App</div>
            <footer id="footer">Footer</footer>
        </div>
        
    )
}

export default Main; 