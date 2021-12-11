import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog,  Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'
import {change} from '../../data/themeData.js'
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
        
            <Navbar />        
            <Landing />
            <change />
            <About />
       
            <Skills />
           
            <Projects />
         
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
