import React, {useState} from 'react'

const AssignCertificate = () => {
    const [assignCertificate,setAssignCertificate] = useState({
        student:"",
        metadata:""
    })

    const handleChange = (fieldname, e)=>{
        setAssignCertificate({
            ...assignCertificate, [fieldname]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(assignCertificate)
    }
    return (
        <>
            <div
                className="w-[50%] mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
            >
                <h2 className="text-2xl font-bold text-white mb-6">Assign Certificate</h2>

                <form method="post" action="#">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="student"
                        >Student Name</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            type="text" onChange={(e)=>{handleChange('student',e)}}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300" htmlFor="metadata"
                        >Certificate Metadata</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                            type="text" onChange={(e)=>{handleChange('metadata',e)}}
                        />
                    </div>

                    
                    <div className="flex justify-end">
                        <button
                            className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                            type="submit" onClick={(e)=>{handleSubmit(e)}}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
  )
}

export default AssignCertificate