import React from 'react'
import { useState } from 'react'
import { FaCopy } from "react-icons/fa";

const BorderRadius = () => {

    const [radius, setRadius] = useState({
        allBordersRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderWidth: 0,
        borderType: 'solid',
        borderColor: '#000',
        boxColor: '#E208DB',
        boxBackground: '#f8f1f1',
    });

    // handle radius values

    function handleRadiusValues(e) {
        e.preventDefault();
        const { name, value } = e.target;

        setRadius(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // function to create style

    function borderRadiusStyling(radius) {
        return {
            borderWidth: `${radius.borderWidth}px`,
            borderStyle: `${radius.borderType}`,
            borderColor: `${radius.borderColor}`,
            borderTopLeftRadius: `${radius.borderTopLeftRadius}%`,
            borderTopRightRadius: `${radius.borderTopRightRadius}%`,
            borderBottomLeftRadius: `${radius.borderBottomLeftRadius}%`,
            borderBottomRightRadius: `${radius.borderBottomRightRadius}%`,
            borderRadius: `${radius.allBordersRadius}%`,
            backgroundColor: `${radius.boxColor}`,
        };
    }


    //   copy css

    function copyCSS() {
        const cssText = `
            border-width: ${radius.borderWidth}px;
            border-style: ${radius.borderType};
            border-color: ${radius.borderColor};
            border-top-left-radius: ${radius.borderTopLeftRadius}%;
            border-top-right-radius: ${radius.borderTopRightRadius}%;
            border-bottom-left-radius: ${radius.borderBottomLeftRadius}%;
            border-bottom-right-radius: ${radius.borderBottomRightRadius}%;
            border-radius: ${radius.allBordersRadius}%;
            background-color: ${radius.boxColor};
        `;

        navigator.clipboard.writeText(cssText)
        alert('copied');
    }



    return (

        <div className='h-full grid grid-cols-3 gap-5 place-items-center'>

            {/* controls */}

            <div className='col-span-3 lg:col-span-1 w-full p-8 rounded-md shadow-md flex flex-col justify-center gap-5'>

                {/* all border radius */}
                <div>
                    <label>Border Radius</label>
                    <br />
                    <input
                        type="range"
                        value={radius.allBordersRadius}
                        name='allBordersRadius'
                        min='1'
                        max='50'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border top left radius */}

                <div>
                    <label>Border Top Left Radius</label>
                    <br />
                    <input
                        type="range"
                        value={radius.borderTopLeftRadius}
                        name='borderTopLeftRadius'
                        min='0'
                        max='100'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border top right radius */}

                <div>
                    <label>Border Top Right Radius</label>
                    <br />
                    <input
                        type="range"
                        value={radius.borderTopRightRadius}
                        name='borderTopRightRadius'
                        min='0'
                        max='100'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border bottom right radius */}

                <div>
                    <label>Border Bottom Right Radius</label>
                    <br />
                    <input
                        type="range"
                        value={radius.borderBottomRightRadius}
                        name='borderBottomRightRadius'
                        min='0'
                        max='100'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border bottom left radius */}

                <div>
                    <label>Border Bottom Left Radius</label>
                    <br />
                    <input
                        type="range"
                        value={radius.borderBottomLeftRadius}
                        name='borderBottomLeftRadius'
                        min='0'
                        max='100'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border width */}

                <div>
                    <label>Border Width</label>
                    <br />
                    <input
                        type="range"
                        value={radius.borderWidth}
                        name='borderWidth'
                        min='0'
                        max='50'
                        onChange={handleRadiusValues}
                        className='w-full'
                    />
                </div>

                {/* border type */}

                <div>
                    <label>Border Type</label>
                    <br />
                    <select
                        name="borderType"
                        value={radius.borderType} // Corrected from 'borderType' to radius.borderType
                        onChange={handleRadiusValues}
                        className='w-full outline-none border border-[rgba(0,0,0,0.09)] shadow-md'>
                        <option value="none">none</option>
                        <option value="solid">solid</option>
                        <option value="dotted">dotted</option>
                        <option value="dashed">dashed</option>
                        <option value="groove">groove</option>
                        <option value="ridge">ridge</option>
                        <option value="inset">inset</option>
                    </select>
                </div>

                {/* color selection */}

                <div className='flex items-center gap-10'>
                    <div className='w-full'>
                        <label className='text-nowrap'>Border Color</label>
                        <br />
                        <input
                            type="color"
                            name="borderColor"
                            value={radius.borderColor}
                            onChange={handleRadiusValues}
                        />
                    </div>

                    <div className='w-full'>
                        <label className='text-nowrap'>Box Color</label>
                        <br />
                        <input
                            type="color"
                            name="boxColor"
                            value={radius.boxColor}
                            onChange={handleRadiusValues}
                        />
                    </div>

                    <div className='w-full'>
                        <label className='text-nowrap'>Box Background</label>
                        <br />
                        <input
                            type="color"
                            name="boxBackground"
                            value={radius.boxBackground}
                            onChange={handleRadiusValues}
                        />
                    </div>
                </div>
            </div>

            {/* realtime box */}

            <div
                className='col-span-3 lg:col-span-1 w-96 aspect-square  flex items-center justify-center'
                style={{ background: radius.boxBackground }}
            >
                <div
                    className=' w-64 aspect-square'
                    style={borderRadiusStyling(radius)} // Added radius parameter
                ></div>
            </div>



            {/* realtime css */}

            <div className='w-fit  col-span-3 lg:col-span-1'>

                < FaCopy className='text-xl text-blue-600 cursor-pointer mt-2' title='copy css'
                    onClick={copyCSS}
                />

                <div className='border p-4 bg-white  mt-2'>

                    {`border-Width: ${radius.borderWidth}px;`}
                    <br />
                    {` border-Style: ${radius.borderType};`}
                    <br />
                    {`border-Color: ${radius.borderColor};`}
                    <br />
                    {`border-Top-Left-Radius: ${radius.borderTopLeftRadius}%;`}
                    <br />
                    {`border-Top-Right-Radius: ${radius.borderTopRightRadius}%;`}
                    <br />
                    {`border-Bottom-Left-Radius: ${radius.borderBottomLeftRadius}%;`}
                    <br />
                    {`border-Bottom-Right-Radius: ${radius.borderBottomRightRadius}%;`}
                    <br />
                    {`border-Radius: ${radius.allBordersRadius}%;`}
                    <br />
                    {`background-Color: ${radius.boxColor};`}

                </div>


            </div>



        </div>
    )
}

export default BorderRadius


