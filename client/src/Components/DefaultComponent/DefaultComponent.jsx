import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({children}) => {
  return (
    <div className='appContainer-fluid'>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
    </div>
  )
}

export default DefaultComponent