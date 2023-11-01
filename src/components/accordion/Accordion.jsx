import React, { useState } from "react";
import "./Accordion.css"

const AccordionSection = ({section, isActiveSection, setActiveSection, sectionIndex}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveSection(nextIndex);
    }
    
    return (
    <div>
        <div className="section-title" onClick={toggleSection}>
            <h4>{section.title}</h4>
            <div className="isactive">{isActiveSection ? "-" : "+"}</div>
        </div>
        {isActiveSection && <div className="section-text">{section.text}</div>}
    </div>);
}

const Accordion = ({sections}) => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div className="accordion">
            {sections.map((section, index) => (
                <AccordionSection 
                section={section} 
                key={index} 
                isActiveSection={index === activeSection}
                setActiveSection = {setActiveSection}
                sectionIndex = {index}/>
            ))}
        </div>
    )
}

export default Accordion;