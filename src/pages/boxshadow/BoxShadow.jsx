import React, { useState, useEffect } from 'react';
import { FaCopy } from "react-icons/fa";

const BoxShadow = () => {

    const [shadow, setShadow] = useState({
        horizontal: 5,
        vertical: 5,
        blur: 10,
        spread: 5,
        color: '#000000',
        opacity: 0.2,
        boxBg: '#ffffff',
        background: '#f8f1f1'
    });

    // Handle value changes 

    const handleShadowChange = (e) => {
        const { name, value } = e.target;

        const newValue = name === 'opacity' ? parseFloat(value) : value;

        setShadow(prev => ({
            ...prev,
            [name]: newValue
        }));
    };


    // Function to generate box-shadow 

    function boxShadowStyle() {

        const rgbaColor = `rgba(${parseInt(shadow.color.slice(1, 3), 16)}, ${parseInt(shadow.color.slice(3, 5), 16)}, ${parseInt(shadow.color.slice(5, 7), 16)}, ${shadow.opacity})`;

        return {
            boxShadow: `${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${rgbaColor}`,
            backgroundColor: `${shadow.boxBg}`
        };
    }

    // function to copy css

    function copyCSS() {

        const styles = boxShadowStyle();
        const { boxShadow, backgroundColor } = styles;
        const cssText = `box-shadow: ${boxShadow};\nbackground-color: ${backgroundColor};`;

        navigator.clipboard.writeText(cssText)
        alert("Copied")
    }



    return (

        <div className='h-full grid grid-cols-3 gap-5  place-items-center duration-300'>


            {/* Controls */}

            <div className=' col-span-3 lg:col-span-1  w-full p-8 rounded-md shadow-md flex flex-col justify-center gap-5'>

                {/* Horizontal Length */}

                <div>
                    <label>Horizontal Length</label>
                    <br />
                    <input
                        type="range"
                        value={shadow.horizontal}
                        name="horizontal"
                        min="-50"
                        max="50"
                        onChange={handleShadowChange}
                        className='w-full custom-range'
                    />
                </div>

                {/* Vertical Length */}

                <div>
                    <label>Vertical Length</label>
                    <br />
                    <input
                        type="range"
                        value={shadow.vertical}
                        name="vertical"
                        min="-50"
                        max="50"
                        onChange={handleShadowChange}
                        className='w-full'
                    />
                </div>

                {/* Blur */}
                <div>
                    <label>Blur</label>
                    <br />
                    <input
                        type="range"
                        value={shadow.blur}
                        name="blur"
                        min="0"
                        max="50"
                        onChange={handleShadowChange}
                        className='w-full'
                    />
                </div>

                {/* Spread */}

                <div>
                    <label>Spread</label>
                    <br />
                    <input
                        type="range"
                        value={shadow.spread}
                        name="spread"
                        min="0"
                        max="50"
                        onChange={handleShadowChange}
                        className='w-full'
                    />
                </div>

                {/* Color */}
                <div>
                    <label>Shadow Color</label>
                    <br />
                    <input
                        type="color"
                        value={shadow.color}
                        name="color"
                        onChange={handleShadowChange}
                    />
                </div>

                {/* Opacity */}
                <div>
                    <label>Shadow Opacity</label>
                    <br />
                    <input
                        type="range"
                        value={shadow.opacity}
                        name="opacity"
                        min="0.1"
                        max="1"
                        step="0.1"
                        onChange={handleShadowChange}
                        className='w-full'
                    />
                </div>

                {/* box color*/}

                <div className='flex gap-5'>
                    <div>
                        <label>Box Color</label>
                        <br />
                        <input
                            type="color"
                            value={shadow.boxBg}
                            name="boxBg"
                            onChange={handleShadowChange}
                        />
                    </div>


                    {/* box background */}

                    <div>
                        <label>Background</label>
                        <br />
                        <input
                            type="color"
                            value={shadow.background}
                            name="background"
                            onChange={handleShadowChange}
                        />
                    </div>
                </div>



            </div>


            {/* Real-time box */}


            <div className='col-span-3 lg:col-span-1 w-96 aspect-square flex items-center justify-center' style={{ background: shadow.background }}>


                <div className=' w-64 aspect-square bg-white rounded-2xl ' style={boxShadowStyle()} ></div>

            </div>


            {/* real time css */}

            <div className='w-fit  col-span-3 lg:col-span-1'>

                < FaCopy className='text-xl text-blue-600 cursor-pointer mt-2' onClick={copyCSS} title='copy css' />

                <div className='border p-4 bg-white  mt-2'>
                    {`box-shadow: ${boxShadowStyle().boxShadow};`}
                    <br />
                    {`background-color: ${boxShadowStyle().backgroundColor};`}
                </div>
            </div>

        </div>
    );
};


export default BoxShadow;
