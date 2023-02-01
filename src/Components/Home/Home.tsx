import React from 'react';
import Footer from '../Templates/Footer';
import Header from '../Templates/Header';
import { motion } from 'framer-motion';
function Home() {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div id="homePageContainer">
                    <Header />
                    <section className="landingPageImage">


                    </section>
                    <Footer />
                </div>
            </motion.div>
        </>
    )
}

export default Home