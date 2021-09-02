import React from 'react'; 

function Main() { 

    return (
        <div className="main-holder">
            <nav id="nav">
                <div className="name">Kaitlin Swanson</div>
                </nav>
            <main id="main">
            <div className="welcome">
            <div id="welcome-message">Hi, I'm Kaitlin!</div>
            <img id="profile-pic" src="animated-pic.gif" alt="profile pic"></img>
            </div>
            </main>
            <div id="content1">Content 1</div>
            <div id="content2">Content 2</div>
            <div id="content3">Content 3</div>
            <footer id="footer">Footer</footer>
        </div>
        
    )
}

export default Main; 