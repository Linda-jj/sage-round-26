import '../home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Case() {
    return (<div>
 
        <div className='case-continer' id="case">
       
            <div className='tools'>
                <h2>Tools</h2>
                <p>I use modern tools like VS Code, Figma, Git, and GitHub to design and
                    build responsive web applications, and Dev-C++ to develop and practice C++ programming.</p>
                <div className='tools-link'>
                    <a className='tools-linkss'>Git and Github</a>
                    <a className='tools-linkss'>Vs Code</a>
                    <a className='tools-linkss'>Figma</a>
                    <a className='tools-linkss'>Dev C++</a>
                </div>
            </div>
            <div className='tools'>
                <h2>Front-end</h2>
                <p>I study front-end development using HTML, CSS, JavaScript, and React to build modern and responsive web applications.</p>
                <div>
                    <a className='tools-linkss'>HTML</a>
                    <a className='tools-linkss'>CSS</a>
                    <a className='tools-linkss'>React</a>
                    <a className='tools-linkss'>JavaScript</a>
                </div>
            </div>
            <div className='tools'>
                <h2>Back-end</h2>
                <p>Back-end studies focused on building APIs using Node.js and Express.js.</p>
                <div>
                    <a className='tools-linkss'>Node js</a>
                    <a className='tools-linkss'>Express js</a>

                </div>
            </div>
        </div>
    </div>

    )
}