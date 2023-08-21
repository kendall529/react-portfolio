import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

import projects from '../projects';
import proficiencies from '../proficiencies';

export default function Header() {
    const [currentComponent, handleChange] = useState('About');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio projects={projects} />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume proficiencies={proficiencies} />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <Navbar 
                currentComponent={currentComponent}
                handleChange={handleChange}
            />
            <main>
                <div>
                    {renderComponent(currentComponent)}
                </div>
            </main>
        </div>
    )
}