import './index.css'
import {Link} from 'react-router'
const HeaderListItem=(props)=> {
  const {eachItem, onclickActivebtn}=props
  const {id, name, isactive, to}=eachItem
  console.log(isactive)
  const onclickListItem=()=>{
       onclickActivebtn(id)
  } 
  const btnclass=isactive?'header-btn-onclick':''
  return (
    <>
    <li className='header-list-item'>
      <Link to={to} onClick={onclickListItem} className={`header-btn ${btnclass}`}>
      {name}
    </Link>
    </li>
  
    </>
  )
}


export default HeaderListItem 
