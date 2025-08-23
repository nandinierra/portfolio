import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Header from './components/Header'
import './App.css'
import {Routes, Route} from 'react-router'
const App=()=>{

return(
  <>
    <Header/> 
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
    </Routes>
  
  
  </>
)


}
  
 

export default App
