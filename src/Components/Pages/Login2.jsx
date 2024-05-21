import React, { useEffect, useState } from 'react'

const Login2 = () => {
    const [loggedIn, setLoggedIn] = useState("Connect")
    const [designation, setDesignation] = useState("")

    const onButtonClick = async () => {
        if (typeof window.ethereum !== undefined) {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            setLoggedIn("Connected")
            window.location.href = `${designation}`
            console.log("Clicked")
        }
        else {
            setLoggedIn("Install Metamask")
        }
    }

    return (
        <div className={'mainContainer '}>
            <div className={'titleContainer'}>
                <div>Connect to Metamask</div>
            </div>


            {/* Radio button for designation */}
            <div
                className="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none"
            >
                <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                    <input
                        type="radio"
                        name="radio"
                        value="admin"
                        className="peer hidden"
                        onChange={()=>{setDesignation("admin")}}
                    />
                    <span
                        className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
                    >Admin</span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                    <input type="radio" name="radio" value="teacher" className="peer hidden" onChange={()=>{setDesignation("teacher")}}/>
                    <span
                        className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
                    >Teacher</span>
                </label>

                <label
                    className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer">
                    <input type="radio" name="radio" value="student" className="peer hidden" onChange={()=>{setDesignation("student")}}/>
                    <span
                        className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
                    >Student</span>
                </label>
            </div>


            {/* Login button */}
            <div className={'inputContainer'}>
                <button
                    className='bg-purple-400 z-10 hover:bg-purple-300 text-white font-medium py-2 px-4 rounded-lg shadow-lg sticky'
                    type="button"
                    onClick={onButtonClick}>
                    {loggedIn}
                </button>
            </div>
        </div>
    )
}

export default Login2