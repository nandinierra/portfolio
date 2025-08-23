import './index.css'
import TimelineCard from '../TimelineCard'
const timeLineCards=[{
  id:1,
    year:"2024",
    learned:"HTML, CSS, Python",
    description:"Started my journey into web development by learning the core building blocks: HTML & CSS. Also explored Python to strengthen my programming fundamentals."

},
{
        id:2,
        year:"2025",
        learned:"JavaScript, React",
        learning:"C++, DSA, MERN Stack",
        description:"This year, I took my development skills to the next level with JavaScript and React. I’m now diving deeper into backend and core CS fundamentals with C++, DSA, and the full MERN stack."


}]
const About=()=>{
   return(
    <>
    <div className='container'>
      <div className='about-container'>
        <h1>About Me</h1>
          <p className='about-description'>I'm a first-year student at NIAT with a passion for technology-driven solutions. Currently, I'm exploring Python to strengthen my foundational skills. I’m eager to expand my knowledge in AI and web development, with a goal of building robust, efficient applications. I look forward to connecting with professionals and like-minded peers to learn and grow in the tech field.</p>
          <div className='about-timeline-cards'>
                  {timeLineCards.map(eachCard=>{
                          return <TimelineCard CardDetails={eachCard} key={eachCard.id}/>
                    })}
          </div>
        
      </div>
      </div>
  
    </>
   )
}
export default About
