import  React from 'react';
import logo from './logo.png';

const Header=()=>{
  return(
    <div className='container'>
        <div className="nav">
        <img src={logo} style={{width:'120px',height:'90px'}} alt='logo'></img>
        <div className='home'>Home</div>
        </div>
    </div>
  )
}

export default Header;