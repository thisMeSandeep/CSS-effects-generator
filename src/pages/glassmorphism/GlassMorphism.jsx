import React from 'react'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import image from "../../assets/image.jpg"

const GlassMorphism = () => {

    const [glassmorphism, setGlassmorphism] = useState({
        backdropFilter: '3',
        background: '#C7AEAE',
        opacity: 0.2
    })


    // function to update galssmorphism

    const handleGlassEffect = (e) => {
        const { name, value } = e.target;

        const newValue = name === 'opacity' ? parseFloat(value) : value;

        setGlassmorphism((prev) => ({
            ...prev,
            [name]: newValue
        }));
    }


    // function to create styling

    function glassStyling() {

        const rgbaColor = `rgba(${parseInt(glassmorphism.background.slice(1, 3), 16)}, ${parseInt(glassmorphism.background.slice(3, 5), 16)}, ${parseInt(glassmorphism.background.slice(5, 7), 16)}, ${glassmorphism.opacity})`;

        return {
            backdropFilter: `blur(${glassmorphism.backdropFilter}px)`,
            backgroundColor: `${rgbaColor}`

        }
    }


    // function to copy css

    function copyCSS() {

        let styling = glassStyling();
        const text = `
        backdrop-filter:blur(${glassmorphism.backdropFilter}px)
        background-color:${styling.backgroundColor}
        `
        navigator.clipboard.writeText(text);
        alert('Copied');
    }

    return (
        <div className='h-full grid grid-cols-3 gap-5 place-items-center duration-300'>

            {/* controls */}

            <div className='col-span-3 lg:col-span-1 w-full p-8 rounded-md shadow-md flex flex-col justify-center gap-5'>

                {/* backdrop blur */}


                <div>
                    <label>Glass Effect</label>
                    <br />
                    <br />
                    <input
                        type="range"
                        value={glassmorphism.backdropFilter}
                        name="backdropFilter"
                        min="0"
                        max="30"
                        onChange={handleGlassEffect}
                        className='w-full'
                    />
                </div>

                {/* box color */}

                <div>
                    <label>Box Color</label>
                    <br />
                    <br />
                    <input
                        type="color"
                        value={glassmorphism.background}
                        name="background"
                        onChange={handleGlassEffect}
                        className=''
                    />
                </div>

                {/* opacity */}

                <div>
                    <label>Opacity</label>
                    <br />
                    <br />
                    <input
                        type="range"
                        value={glassmorphism.opacity}
                        name="opacity"
                        min="0.1"
                        max="1"
                        step="0.1"
                        onChange={handleGlassEffect}
                        className='w-full'
                    />
                </div>

            </div>


            {/* real time box */}

            <div className='col-span-3 lg:col-span-1 w-96 aspect-square flex items-center justify-center bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${image})` }}>

                <div className=' w-64 aspect-square bg-white rounded-2xl ' style={glassStyling()}>
                   
                </div>

            </div>


            {/* real time css */}

            <div className='w-fit  col-span-3 lg:col-span-1'>

                <FaCopy className='text-xl text-blue-600 cursor-pointer mt-2' title='copy css' onClick={copyCSS} />


                <div className='border p-4 bg-white  mt-2'>

                    {`backdrop-filter: ${glassStyling().backdropFilter};`}
                    <br />
                    {`background-color: ${glassStyling().backgroundColor};`}

                </div>

            </div>




        </div>
    )
}

export default GlassMorphism