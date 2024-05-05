import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import '../../App.scss'
const DefaultComponent = ({children}) => {
  return (
    <div className='appContainer-fluid'>
        <HeaderComponent/>
        <div className="appcontainer">
          {children}
        </div>
        <FooterComponent/>
    </div>
  )
}

export default DefaultComponent