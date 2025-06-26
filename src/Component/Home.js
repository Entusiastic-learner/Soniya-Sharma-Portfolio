import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
export default function Home({ darkMode }) {
console.log(darkMode);
    return (
        <>
            {/* <div style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black' : 'white', height: '100vh', padding: '20px'}}> */}
          <div style={{paddingLeft: '3%', paddingRight: '3%',color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black' : 'white' }}>
          <br></br>
            <div id="home">
                <h3 style={{ color: '#0D6EFD', textAlign: 'justify' }}>About</h3>
                <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    I’m a React developer with around 4 years of experience building dynamic and responsive web applications. I specialize in React and have strong skills in TypeScript, JavaScript, HTML, and CSS. On the backend, I’ve worked with ASP.NET Web API and SQL, crafting clean, efficient code and user-friendly interfaces that perform well under real-world conditions.
                    <br></br>
                    <br></br>
                    <h4>📌 MNC Experience</h4>
                    <ul>
                        <li><strong>Infosys:</strong> Collaborated in Agile teams to deliver enterprise-grade React applications for clients in pharmaceutical and BFSI sectors. Contributed to UI module design, Redux state management, and integration with RESTful services.</li>
                        <li><strong>LTIMindtree:</strong> As part of LTIMindtree’s digital transformation initiatives, I worked on cloud-powered React + TypeScript front-end applications. This included building scalable user interfaces, collaborating closely with UX teams, and ensuring optimal cross-browser performance. I also gained exposure to cloud integration on platforms like AWS.</li>
                    </ul>
                </p>
            </div>
            <div  id="skills">
                <h3 style={{ color: '#0D6EFD', textAlign: 'justify' }}>My Skills</h3>
                <br></br>
                <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: '50px' }} title='React' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{ width: '50px' }} title='TypeScript' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{ width: '50px' }} title='JavaScript' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{ width: '50px' }} title='HTML' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{ width: '50px' }} title='CSS' /></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.NET Web API" style={{ width: '50px' }} title='ASP.NET Web API' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" style={{ width: '50px' }} title='SQL' /></td>
                            <td><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: '50px' }} title='GitHub' /></td>
                            <td><img src="https://logohistory.net/wp-content/uploads/2023/06/AWS-Emblem.png" alt="AWS" style={{ width: '50px' }} title='AWS' /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div id="projects">
                <h3 style={{ color: '#0D6EFD', textAlign: 'justify' }}>Projects</h3>
                <br></br>
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>FinOpsX</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>FinOpsX is a cloud cost optimization platform built using React, designed to track and manage cloud expenditures efficiently. It includes key functionalities such as tag management for precise cost allocation and GenAI-driven recommendations to help reduce unnecessary cloud spend. I worked as the React Frontend Developer on this project, where I was responsible for bringing the entire UI/UX to life — from interpreting design mockups to developing and integrating all frontend functionalities end-to-end.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Connexus</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Connexus is a comprehensive web application developed for a leading pharmaceutical client, aimed at helping Key Account Managers and stakeholders manage hospitals, drugs, and regional operations across multiple geographies. Built using React, the application provided centralized access to crucial data, streamlined workflows for drug management, and enabled real-time insights into hospital-specific interactions. As the React Frontend Developer, I was responsible for the entire UI implementation—from design translation to building reusable components and integrating complex workflows—ensuring a responsive and intuitive experience for end users.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>Data Encryption</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Data Encryption was a critical data security project focused on the encryption of sensitive data across multiple enterprise applications developed in .NET. My role involved identifying and encrypting Personally Identifiable Information (PII) and other sensitive fields across all .NET-based systems to ensure compliance with security standards and data protection regulations. Additionally, I developed secure and scalable RESTful APIs using ASP.NET Core Web API for one of the key applications, enabling encrypted data exchange and seamless integration with other services.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><strong>Product Landing Page</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Developed responsive landing page using React to provide a clean and engaging first impression of the product. It features smooth navigation, optimized performance, and a user-friendly layout tailored for showcasing key app features effectively.

                                I designed and developed this page from scratch, focusing on performance, UI/UX principles, and code reusability to ensure a high-quality user experience.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <br></br>
           
            <div style={{ display: 'center', listStyleType: 'none'}} id="contact">
                <h3 style={{ color: '#0D6EFD', textAlign: 'center' }}>Contact</h3>

                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0, justifyContent: 'space-around' }}>
                    <li style={{ display: 'center', alignItems: 'center', margin: '10px' }}>

                        <a href="https://www.linkedin.com/in/soniya-sharma-61017918a/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '40px', marginRight: '20px' }} /></a>

                        <a href="https://www.instagram.com/tra.velwithsoniya?igsh=eDVieGUwbGpqcGpt&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src="https://th.bing.com/th/id/OIP.xd3sxnfRDdSuGpIWv3Xf9wHaHZ?r=0&rs=1&pid=ImgDetMain" alt="Instagram" style={{ width: '40px', marginRight: '20px' }} /></a>

                        <a href="mailto:Soniyasharma7678@gmail.com"><img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" style={{ width: '40px', marginRight: '20px' }} /></a>
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone" style={{ width: '40px', marginRight: '20px' }} title='+91 6260401640' />

                    </li>

                </ul>
            </div>
            </div>
           
        </>
    )

}
