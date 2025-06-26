import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";


export default function Topnav({handletoggle}) {
    const [darkMode, setDarkMode] = useState(false);
    const handleToggle = (event) => {
        setDarkMode(event.target.checked);
        handletoggle(event.target.checked)
    };
    const onButtonClick = () => {
        const pdfUrl = "Soniya Sharma_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Soniya Sharma CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div style={{position:"sticky",top:'0',backdropFilter:"blur(45px)", paddingLeft: '3%',backgroundColor: "White", height: "400%", width: "100%", color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black' : 'white' }}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
                    <div style={{ color: "black", fontSize: "18px", display: "flex", alignItems: "center"
                        


                    }}>
                        <a href="#home" style={{ marginRight: "52px", textDecoration: "none" }}>Home</a>
                        <a href="#skills" style={{ marginRight: "52px", textDecoration: "none" }}>Skills</a>
                        <a href="#projects" style={{ marginRight: "52px", textDecoration: "none" }}>Projects</a>
                        <a href="#contact" style={{ marginRight: "22px", textDecoration: "none" }}>Contact</a>
                        <Form style={{ marginRight: "20px" }}>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                checked={darkMode}
                                onChange={handleToggle}
                                title="Toggle Dark Mode"
                            />
                        </Form>
                        <Button variant="primary" style={{marginLeft:'605px'}} onClick={onButtonClick}>Download CV</Button>
                    </div>
                </div>
            </div>
        </>
    );

}