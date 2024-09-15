import React from 'react'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa";

const Textglow = () => {

    const [textglow, setTextglow] = useState({
        horizontal: 0,
        vertical: 0,
        spread: 50,
        glowColor: '#00FFFB',
        fontSize: 5,
        textColor: '#FFEEF9',
        background: '#030601',

    });


    // function to update textGlow

    const handleTextGlow = (e) => {
        const { name, value } = e.target;
        setTextglow(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    };


    // function to create Style

    function textGlowStyle(textGlow) {
        return {
            textShadow: `${textGlow.horizontal}px ${textGlow.vertical}px ${textGlow.spread}px ${textGlow.glowColor}`,
            color: `${textGlow.textColor}`,
            fontSize: `${textGlow.fontSize}rem`
        }
    }


    // function to copy css

    function copyCSS() {
        const result=textGlowStyle(textglow);
        const text = `
        box-shadow:${result.textShadow};
        color:${result.color};
        font-size:${result.fontSize};
        `
        navigator.clipboard.writeText(text);
        alert('Copied');
    }


    return (


        <div className='h-full grid grid-cols-3 gap-5 place-items-center duration-300'>

            {/* controls */}

            <div className='col-span-3 lg:col-span-1 w-full p-8 rounded-md shadow-md flex flex-col justify-center gap-5'>


                {/* Horizontal Length */}

                <div>
                    <label>Horizontal Length</label>
                    <br />
                    <input
                        type="range"
                        value={textglow.horizontal}
                        name="horizontal"
                        min="-50"
                        max="50"
                        onChange={handleTextGlow}
                        className='w-full'
                    />
                </div>

                {/* Vertical Length */}

                <div>
                    <label>Vertical Length</label>
                    <br />
                    <input
                        type="range"
                        value={textglow.vertical}
                        name="vertical"
                        min="-50"
                        max="50"
                        onChange={handleTextGlow}
                        className='w-full'
                    />
                </div>


                {/* Spread */}

                <div>
                    <label>Spread</label>
                    <br />
                    <input
                        type="range"
                        value={textglow.spread}
                        name="spread"
                        min="0"
                        max="80"
                        onChange={handleTextGlow}
                        className='w-full'
                    />
                </div>

                {/* font size */}

                <div>
                    <label>Font Size</label>
                    <br />
                    <input
                        type="range"
                        value={textglow.fontSize}
                        name="fontSize"
                        min="1"
                        max="10"
                        step='0.1'
                        onChange={handleTextGlow}
                        className='w-full'
                    />
                </div>


                {/* color selection */}

                <div className='flex gap-5'>

                    {/* Glow  Color */}


                    <div>
                        <label>Glow Color</label>
                        <br />
                        <input
                            type="color"
                            value={textglow.glowColor}
                            name="glowColor"
                            onChange={handleTextGlow}
                        />
                    </div>

                    {/* Text  Color */}


                    <div>
                        <label>Text Color</label>
                        <br />
                        <input
                            type="color"
                            value={textglow.textColor}
                            name="textColor"
                            onChange={handleTextGlow}
                        />
                    </div>

                    {/* background color */}


                    <div>
                        <label>Background Color</label>
                        <br />
                        <input
                            type="color"
                            value={textglow.background}
                            name="background"
                            onChange={handleTextGlow}
                        />
                    </div>


                </div>



            </div>




            {/* real time box */}

            <div className='col-span-3 lg:col-span-1 w-96 aspect-square flex items-center justify-center bg-no-repeat bg-center bg-cover overflow-hidden' style={{ background: textglow.background }}>

                <p className='font-semibold text-center font-playwrite' style={textGlowStyle(textglow)}>Text Glow</p>

            </div>



            {/* real time css */}

            <div className='w-fit  col-span-3 lg:col-span-1'>

                <FaCopy className='text-xl text-blue-600 cursor-pointer mt-2' title='copy css' onClick={copyCSS} />


                <div className='border p-4 bg-white  mt-2'>

                    {`text-shadow:${textGlowStyle(textglow).textShadow};`}
                    <br />
                    {`color:${textGlowStyle(textglow).color};`}
                    <br />
                    {`font-size:${textGlowStyle(textglow).fontSize};`}


                </div>

            </div>


        </div>
    )
}

export default Textglow