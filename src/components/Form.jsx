import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Fromdata from './Context/Usecontext.js'


function Form() {

  const navigate = useNavigate()
       const [name,setname] = useState('')
       const [address,setaddress] = useState('')
      const [post,setpost] = useState('')
       const [pincode,setpincode] = useState('')
        const [contect,setcontect] = useState('')
       const [objective,setobjective] = useState('')
        const [high,sethigh] = useState('')
       const [inter,setinter] = useState('')
        const [graduate,setgraduate] = useState('')
       const [extra,setextra] = useState('')
        const [workexp,setworkexp] = useState('')
       const [fathername,setfathername] = useState('')
        const [mother,setmother] = useState('')
       const [status,setstatus] = useState('')
         const [date,setdate] = useState('')
        const [gender,setgender] = useState('')
       const [language,setlanguage] = useState('')


   const {setresume} = useContext(Fromdata)

  const submit = (e) => {
    e.preventDefault();
    setresume({
      name,
      address,
      post,
      pincode,
      contect,
      objective,
      high,
      inter,
      graduate,
      extra,
      workexp,
      fathername,
      mother,
      status,
      date,
      gender ,
      language
    })

    navigate("/resume")
  }




  return (
    <div>
      <section className='w-full min-h-screen bg-white flex items-center '>
         
         <div className='w-full max-w-6xl flex flex-col md:flex-row mt-15 gap-20'>

        <div className='w-full bg-white flex  flex-col p-10   pt-50 '>
         <h1 className=' text-4xl font-semibold mb-1'>Build a Professional <br /> Resume in Just  <span className=' mb-4 text-4xl text-purple-800 font-semibold '>2 <br /> Minutes</span></h1>
         <p className='text-gray-600 mt-2'>ATS-friendly. Interview-getting templates Instant export to PDF.</p>
         <div className=' max-w-full overflow-hidden  md:max-md:  flex justify-evenly items-center '>
    <img 
    className='mix-blend-darken w-full max-w-30   h-auto object-cover'
    src="https://media.licdn.com/dms/image/v2/D5610AQGSBiOzL80FwA/image-shrink_800/B56ZqVWQLzI4Ac-/0/1763442231914?e=2147483647&v=beta&t=mtDIjWITDQJRYCsCgNCLeMEAzHuX7Lh-W0Dn0llVmv8" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
    src="https://static.vecteezy.com/system/resources/thumbnails/021/514/726/small/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-30 mr-10 h-auto object-cover'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwVgT13iPSw0noeEF86-_pArXP2suISkZiA&s" alt="" />

     <img 
    className='mix-blend-darken w-full max-w-20 mr-10 mt-4 h-auto object-cover'
    src="https://dhjhkxawhe8q4.cloudfront.net/thomasnelson-wp/wp-content/uploads/sites/5/2024/07/15154418/amazon-logo-black-transparent-1.png" alt="" />
</div>
        </div>


       <div >
        <form action=""
        onSubmit={submit}
        className='bg-white w-full max-w-3xl rounded-xl shadow-lg p-6 md:p-8 '
        >
          <div className='flex flex-col items-start '>
          <h1 className='text-2xl font-bold mb-3'>Fill the form</h1>
          <label className='mb-1  font-bold'>Name</label>
          <input type="name" 
          value={name}
          onChange={(e) => setname(e.target.value)}
           className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
            placeholder='Enter your name'
          />
          <label className='mb-1 font-bold' >Address</label>
          <input type="address" 
            value={address}
          onChange={(e) => setaddress(e.target.value)}
           className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your adress'
          />
          <label className='mb-1 font-bold'>Post</label>
          <input type="post"
            value={post}
          onChange={(e) => setpost(e.target.value)}
           className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your post'
          />
          <label className='mb-1 font-bold' >Pincode</label>
          <input type="pincode"
            value={pincode}
          onChange={(e) => setpincode(e.target.value)}
           className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your pincode'
          />
          <label className='mb-1 font-bold'>contect</label>
          <input type="contect"
            value={contect}
          onChange={(e) => setcontect(e.target.value)}
           className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-8'
           placeholder='Enter your contect'
          />
            


            <label className='mb-2 font-bold ' >career objective</label>

            <select className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-8'  value={objective}
            onChange={(e) => setobjective(e.target.value)}
           >
              <option >Select objectives</option>
              <option value="To achive or organization aim using my skills and to devlop myself continuosly with a prospreious and sucessful career.">
             To achive or organization aim using my skills and to devlop myself continuosly with a prospreious and sucessful career.
              </option>
              <option value="Achive or organization aim using my skills and to devlop myself continuosly with a prospreious and sucessful career.">
                 Achive or organization aim using my skills and to devlop myself continuosly with a prospreious and sucessful career.
              </option>       
            </select>
           
           <label className='mb-3 font-bold'>Educational Qualification</label>

           <label className='mb-1 font-bold' >High school details</label>
           <input type="text"
             value={high}
            onChange={(e) => sethigh(e.target.value)}
             className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='High school details'
           />
           <label className='mb-1 font-bold'>Intermediate details</label>
           <input type="text"
            value={inter}
          onChange={(e) => setinter(e.target.value)}
             className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Intermediate details'
           />
           <label className='mb-1 font-bold' >garduation details</label>
           <input type="text" 
            value={graduate}
          onChange={(e) => setgraduate(e.target.value)}
             className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Graduation details'
           />


           <label className='mb-1 font-bold'>Extra Qualification</label>
           <input type="text"
            value={extra}
          onChange={(e) => setextra(e.target.value)}
             className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Extra Qalification '
           />

           <label className='mb-1 font-bold' >Do you have any work Exprience ?</label>
           <input type="text"
            value={workexp}
          onChange={(e) => setworkexp(e.target.value)}
             className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-5'
           placeholder='work exprience'
           />


         <label className='mb-3 font-bold'>Personal information</label>

         <label className='mb-1 font-bold' >Father,name</label>
         <input type="name" 
          value={fathername}
          onChange={(e) => setfathername(e.target.value)}
           className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your post'
         />
          <label className='mb-1 font-bold' >Mother,name</label>
         <input type="name"
          value={mother}
          onChange={(e) => setmother(e.target.value)}
           className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your post'
         />

          <label className='mb-1 font-bold'>Marital Status</label>

          <select className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-3' 
           value={status}
          onChange={(e) => setstatus(e.target.value)}
          >
            <option value="unmarried">unmarried</option>
          <option value="married">married</option>
          </select>
       
          <label className='mb-1 font-bold'>Date of Birth</label>
         <input type="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
           className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
         />
          <label className='mb-1 font-bold' >Gender</label>

        <select className=' w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-3' 
         value={gender}
          onChange={(e) => setgender(e.target.value)}
        >
         <option value="Male">Male</option>
         <option value="Female">Female</option>
        </select>
         
     

      <label className='mb-1 font-bold'>Language Know</label>
        <input type="text" 
         value={language}
          onChange={(e) => setlanguage(e.target.value)}
          className='w-full outline-none border rounded-xs p-1 border-gray-400 text-sm mb-2'
           placeholder='Enter your post'
        />

         <label className='mb-1 font-bold'>Declaration</label>
         <p>I here by declared that all the above entioned statements are true & correct to the best of my Knowlage.</p>

         <button  type='submit' className='flex items-center justify-center bg-purple-800 text-white w-60 rounded-sm h-9 mt-4 font-semibold ml-10'>Build Resume</button>

         </div>
        </form>
       </div>



    </div>
      </section>
    </div>
  )
}

export default Form