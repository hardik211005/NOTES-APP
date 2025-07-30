import React from 'react'

const Signup = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState ('')  

    return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
    <div className='border shadow p-6 w-80 bg-white'>
        <h2 className='text-2xl font-bold mb-4'>signup</h2>
        <form>
            <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input type ="text" 
            onChange={(e) => setName(e.target.value)}
            className='w-full px-3 py-2 border'
            placeholder='Enter Name' 
            required />
            </div>
            <div className='mb-4'> 
                <label className='block text-gray-700'>Email</label>
                <input type = "email" 
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border'
                placeholder='Enter Email' 
                required />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input type = "password"
                onChange={(e) => setName(e.target.value)}
                className='w-full px-3 py-2 border'
                placeholder='Enter Password' required />
            </div>
            <div className='mb-4'>
                <button
                type="submit"
                className='w-full bg-teal-600 text-white py-2' >
                    Signup
                </button>
            <p className='text-center'>
                Already Have Account? <a href ="" >Login</a>
            </p>
            </div>
        </form>
        </div>
        </div>
)
}

export default Signup