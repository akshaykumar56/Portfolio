import React from 'react'
import IMG from './Akshay.jpg'
const Contact = () => {
  return (

    <div className="container my-5 d-flex flex-column justify-content-center align-items-center shadow p-3 mb-5  rounded" style={{background:'linear-gradient(to bottom right ,#E8E8E8, #D3D3D3, #505050,#303030 )'}}>
      <div  className="d-flex flex-row justify-content-center align-items-center" style={{height:"auto",width:'100%'}}>

     <img src={IMG} alt="Akshay" style={{height:"200px",width:'200px', borderRadius:"20px"}}/>
      </div>
      <br/>
      <h3 style={{color:'white'}}>Contact Me</h3>
      <h4 style={{color:'white'}}>AKSHAY KUMAR</h4>
      <h4 className='d-flex flex-row justify-content-center align-items-center'style={{color:'white'}}><span className="material-symbols-outlined" style={{color:'white'}} >call</span>&nbsp;8894055729</h4>
      <h4 className='d-flex flex-row justify-content-center align-items-center'style={{color:'white'}}><span className ="material-symbols-outlined" style={{color:'white'}}>mail</span>&nbsp;kshykumr@gmail.com</h4>
    </div>
  )
}

export default Contact
