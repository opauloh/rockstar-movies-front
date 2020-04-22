import React from 'react';
import { Header } from '../Header';
import Footer from '../Footer';
import './styles.css';

export const Container = ({ children }) => (
    <>
        <Header />
        <main>
            <div className="container">
                {children}
            </div>
        </main>
        <Footer />
    </>
)

export default Container;