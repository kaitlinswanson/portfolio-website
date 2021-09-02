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
                <div id="github"><i className="fab fa-github"></i></div> 
                <div id="linkedin"><i className="fab fa-linkedin"></i></div>
                <div id="twitter"><i className="fab fa-twitter"></i></div>
                </div>
            </div>
            <img id="profile-pic" src="profile-pic.png" alt="profile pic"></img>
            </div>
            </main>
            <div className="content-class" id="content1">
                <div className="projct-title">Memory Game</div>
            </div>
            <div className="content-class" id="content2">Content 2</div>
            <div className="content-class" id="content3">Content 3</div>
            <footer id="footer">Footer</footer>
        </div>
        
    )
}

export default Main; 