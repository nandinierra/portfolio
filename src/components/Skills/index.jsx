import './index.css'

const Skills=()=>{
  
 
    return(
    <div className='skills-container'>
      <h1 className='skills-container-h1'>My Skills</h1>
      <p className='skills-container-p'>Here are the tools and technologies I’ve been exploring and working with recently.</p> 
      <div className='skills-cards'>
        <div className='card'>
          <h1>Frontend</h1>
           <div className='percentile-bar'>
         <p >HTML</p>
        <p className='card-p'>98%</p>
           </div>

         <div className='skill-bar'>
          <div className='skill-bar-fill' style={{ width: '98%' }}></div>
          </div>
         <div className='percentile-bar'>
         <p>CSS</p>
        <p className='card-p'>98%</p>
         </div>


         <div className='skill-bar'><div className='skill-bar-fill' style={{ width: '98%' }}></div></div>

         <div className='percentile-bar'>
         <p>JavaScript</p>
        <p className='card-p'>95%</p>
         </div>
         <div className='skill-bar'><div className='skill-bar-fill' style={{ width: '95%' }}></div></div>
         
         <div className='percentile-bar'>
         <p>React.js</p>
        <p className='card-p'>95%</p>
        </div>
          <div className='skill-bar'><div className='skill-bar-fill' style={{ width: '95%' }}></div></div>
        
         <div className='percentile-bar'>
          <p>Tailwind CSS</p>
          <p className='card-p'>85%</p>
        </div>
         <div className='skill-bar'><div className='skill-bar-fill' style={{ width: '85%' }}></div></div> 
        </div>

        <div className='card'>
             <h1>Backend</h1>
             <div className='percentile-bar'>
            <p>Python</p>
             <p className='card-p'>88%</p>
             </div>
             <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'88%'}}></div>
             </div>
                <div className='percentile-bar'>
            <p>GIT</p>

             <p className='card-p'>95%</p>
            </div>
            <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'95%'}}></div>
                
              </div>
              
          </div>

          <div className='card'>
             <h1>Learning Tools</h1>
              <div className='percentile-bar'>
             <p>Node.js</p> 
              <p className='card-p'>80%</p>
             </div>
              <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'80%'}}></div>
               
              </div>
               <div className='percentile-bar'>
             <p>c++ DSA</p>
              <p className='card-p'>60%</p>
               </div>
              <div className='skill-bar'><div className='skill-bar-fill' style={{width:'60%'}}></div>
              
              </div>
               
          </div>

          <div className='card'>
             <h1>Soft Skills</h1>
             <div className='percentile-bar'>
             <p>Communication</p> 
             <p className='card-p'>89%</p>
             </div>
             <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'89%'}}></div>
               
             </div>
             <div className='percentile-bar'>
             <p>Teamwork</p>
              <p className='card-p'>85%</p>
             </div>
             <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'85%'}}></div>
             </div>
             <div className='percentile-bar'>
             <p>Problem Solving</p>
              <p className='card-p'>80%</p>
             </div>
             <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'80%'}}></div>
             </div>
             
             <div className='percentile-bar'>
             <p>Learning</p> 
              <p className='card-p'>100%</p>
             </div>
             
             <div className='skill-bar'>
              <div className='skill-bar-fill' style={{width:'100%'}}></div>
              
             </div>
             
          </div>

      </div>
    </div>   
       
     
    )
}
export default Skills
