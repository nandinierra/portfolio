import './index.css'
import { useState} from 'react'
import HeaderListItem from '../HeaderListItems'
import { Link } from 'react-router'
import {useNavigate} from 'react-router'
const listofItems=[
{id:1, name:"Home", to:"/", isactive:false},
{id:2, name:"About", to:"/about", isactive:false},
{id:3, name:"Skills", to:"/skills", isactive:false},
{id:4, name:"Projects", to:"/projects", isactive:false},
{id:5, name:"Contact", to:"/contact", isactive:false},
]
const Header=()=>{
    const [updatedList, setupdatedList]=useState(listofItems) 
    
    const navigate=useNavigate() 

    const onclickActivebtn=(ids)=>{
        const filteredListItems=  listofItems.map(eachItems=>{
          if(eachItems.id==ids){
              eachItems.isactive=!eachItems.isactive;
              return eachItems;
          }

          else{
             eachItems.isactive=false;
             return eachItems;
          }}) 
        setupdatedList(filteredListItems)
           
    }
    const onchangeOption=(event)=>{
            const selectedComponent=event.target.value
            navigate(selectedComponent)

    } 



    return(
       <>
          <nav>
            <Link to='/' className='Link'>
            <h1>Nandini Erra</h1>
            </Link>

            <ul className='nav-list-container'>
               
                 {updatedList.map(eachItem=>
                
                 <HeaderListItem eachItem={eachItem} key={eachItem.id} onclickActivebtn={onclickActivebtn}/>
                 
            )}
            
            </ul>

             <select onChange={onchangeOption} className='mobile-dropdown'>  
                {listofItems.map(eachoption=>
              <option value={eachoption.to} key={eachoption.id}>{eachoption.name}</option>)}

            {
            /*     
              <option>About</option>
              <option>Skills</option>
              <option>Projects</option>
              <option>Contact</option> */
            }  
                  
             </select>
          </nav>

        </>


    )
}
export default Header  

