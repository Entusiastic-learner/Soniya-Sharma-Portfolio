import Img from './MyImage3.png'
import React from 'react';

export default function Banner({ darkmode }) {
    console.log(darkmode)
    return (
        <div>
            <div style={{ backgroundColor: "#D7D7D7", display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'auto'}} id="home">
                <div >
                    <h5 style={{ marginLeft: '329px' }}>I'M <h1 style={{color:"#0D6EFD"}}>Soniya Sharma</h1></h5>
                    <h5 style={{ marginLeft: '332px' }}>Software and Web Developer</h5>
                </div>
                <div>
                    <img src={Img} style={{ width: '45%', height: '50%', zIndex: '1', marginRight: '159px' }} alt="Portfolio"></img>
                </div>

            </div>

        </div>

    );
}