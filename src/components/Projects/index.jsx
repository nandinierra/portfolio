import './index.css'
const Projects=()=>{
    const projectLink1=()=>{
        window.open("https://static-spark-t.vercel.app/first.html")
    }
    const projectLink3=()=>{
        window.open("https://app--agri-saathi-3331c957.base44.app/")
    }
    return(
     <div className='project-container'>
       <h1 className='project-heading'>My Projects</h1> 
       <p className='project-paragraph'>Here are some projects I've built with passion and dedication. Each one taught me something new and brought me joy to create!</p> 
       <div className='project-cards'>
        <div className='card1'>
            <img src='https://clikcloud.net/wp-content/uploads/2020/06/a27a5928a1cf7b333cac3f86788efad1.jpg' />
            <h1 className='card-heading'>Building LinkedIn Awareness</h1> 
            <p className='card-paragraph'>A visually engaging page crafted to raise LinkedIn awareness, featuring impactful visuals and a clean layout.</p>
            <ul className='ul'>
                <li className='li'>HTML</li>
                <li className='li'>CSS</li>
            </ul>
            <div className='btn-container'>
            <button className='live-demo' onClick={projectLink1}>Live Demo</button></div>
        </div>
          <div className='card1'>
            <img src='https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002323/img/en/a0002323_main.jpg' />
            <h1 className='card-heading'>Hassle-Free Luggage Transport</h1> 
            <p className='card-paragraph'>A visually engaging page crafted to raise LinkedIn awareness, featuring impactful visuals and a clean layout.</p>
            <ul className='ul'>
                <li className='li'>HTML</li>
                <li className='li'>CSS</li>
                <li className='li'>AI Integration</li>
                <li className='li'>React-js</li>
               
            </ul>
            <div className='btn-container'>
            <button className='live-demo' >Live Demo</button></div>
        </div>
          <div className='card1'>
            <img src='https://media.istockphoto.com/id/1469639791/photo/farmer-using-digital-tablet-in-corn-crop-cultivated-field-with-smart-farming-interface-icons.jpg?s=612x612&w=0&k=20&c=CEnLHATfACNoH_N3Ru5KoTOmAc5SbufJozvV_kcuwc4=' />
            <h1 className='card-heading'>PantaBandhu!</h1> 
            <p className='card-paragraph'>PantaBandhu is a bilingual (Telugu & English) AI-powered app designed to support farmers with voice assistance, weather alerts, and real-time market data.</p>
            <ul className='ul'>
                <li className='li'>HTML</li>
                <li className='li'>CSS</li>
            </ul>
            <div className='btn-container'>
                <div className='Live-demo-container'>
            <button className='live-demo' onClick={projectLink3}>Live Demo</button>
            </div>
            </div>

        </div>
       
       </div>
    
    </div>

)
}
export default Projects
