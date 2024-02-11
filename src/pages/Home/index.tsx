import React from 'react'
import Header from '../../components/templates/Header'
import Footer from '../../components/templates/Footer'
import Home from './Home'
import { Helmet } from 'react-helmet-async'

const HomeLayout: React.FC = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default HomeLayout