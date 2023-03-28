import React from 'react'
import './home.css'
const Home = () => {
  return (
  <>
  <div style={{height:'100vh',width:'100%',backgroundColor:'#B8B8B8'}}>

   <div className="my-5 box shadow p-5 mb-5" style={{background:'linear-gradient(to bottom right ,#909090 50%, 	#E8E8E8 50%)'}}>
    <div className=" my-5  d-flex flex-column justify-content-center align-items-center" style={{height:'30vh',width:'100%',}}>
      <h1 style={{fontFamily:"'Alkatra', cursive",color:'#202020'}} >Hello There!</h1>
      <h1 style={{fontFamily:"'Alkatra', cursive",color:'#202020'}} >I Am Akshay Kumar</h1>
      <h1 style={{fontFamily:"'Alkatra', cursive",color:'#202020'}} >Welcome To My PortFolio Website</h1>
      <h1 style={{fontFamily:"'Alkatra', cursive",color:'#202020'}} >Watch Out My Work!</h1>
      </div>
   </div>
 
   <div className=" d-flex flex-column shadow p-5 mb-5" style={{backgroundColor:'#E8E8E8'}}>
   <h1 className=" mx-3" style={{color:'#ED1C24',fontFamily:"'Alkatra', cursive"}}>About Me</h1>

    <div className="my-2 mx-3" >
      <p style={{color:'#101010',fontFamily:"'Alkatra', cursive"}}>Hello! My Name Is <b>Akshay Kumar</b>, And I'm A Computer Science Student At<b> University Institute Of Technology, Shimla</b>. I Am A Web Developer, And I Have Experience With HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJs, MongoDB. In Addition To This I Had Done <b>Artificial Intelligece Course From C-DAC Mohali</b>. So I Also Have  Experience With Artificial Intelligence Algorithms. </p>
    </div>
  
   </div>

  </div>

   
  </>
  )
}

export default Home
