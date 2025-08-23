import './index.css' 

const TimelineCard=(props)=>{
    const {CardDetails} =props
    const {year, learned,learning, description}=CardDetails
  return(
      <div className="timeline-card">
      <h3 className="timeline-year">{year}</h3>
      <div className="timeline-content">
        <p><strong>Learned:</strong> {learned}</p>
        {learning && <p><strong>Learning:</strong> {learning}</p>}
        <p className="timeline-description">{description}</p>
      </div>
      </div>


  )
} 

export default TimelineCard