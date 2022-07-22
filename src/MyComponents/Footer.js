import React from 'react';
// import './footer.css'
export const Footer = () => {

 let footerStyle={
    position: 'reletive',
    width: '100%',
    top: '10vh',

  }


  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; sourabhLearning.com</p>






    </footer>
  )
}
