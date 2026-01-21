import React, { useContext } from 'react'
import Fromdata from './Context/Usecontext'
import html2pdf from 'html2pdf.js'

function Resume() {

const {resume} = useContext(Fromdata)

const domloadpdf = () => {
  const ele =document.getElementById("resume-pdf");
  const option = {
    filename: "resumepdf",
    image: {
      type: "jpeg", quality: 0.98
    },
    html2canvas : { scale: 2},
    jsPDF:{unit:"mm", format: "a4", orientation: "portrait"},
    
  }

  html2pdf().set(option).from(ele).
  save();
}

  return (
    <div>
<section className="w-full min-h-screen bg-white flex justify-center items-start px-2 sm:px-4">


<div className='w-full  p-12 flex flex-col mt-10 overflow-x-auto pr-12 justify-center items-center gap-15 '>




<div id='resume-pdf' style={{width:"794px",Height:"1123px", overflow:"hidden",margin:"auto",padding:"30px",fontFamily:"Arial",boxSizing:"border-box"}} className="
    bg-white rounded-xl shadow-lg
    w-full  max-w-198
    max-auto
    text-xs sm:text-sm
    p-4 sm:p-6 md:p-8
    box-border
  ">


  <div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center"> Resume</h1>
  </div>


<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-12 mb-6 p-3">
  <div>
   <h1 className="text-xl sm:text-2xl font-bold">{resume?.name}</h1>
  </div>
<div className="text-xs sm:text-sm">
  <p>address: {resume?.address}</p>
  <p>post: {resume?.post}</p>
  <p>pincode: {resume?.pincode}</p>
  <p>contect: {resume?.contect}</p>
  </div>
</div>


<div className='mb-8'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-2 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className='text-md font-bold '>Profesional Summary-:</h1>
  </div>
  <p>A highly motivated and goal-oriented professional with a strong work ethic and the ability to adapt to fast-paced environments. Committed to contributing to organizational growth through my problem-solving skills and dedication. A quick learner and a team player seeking an opportunity to utilize my skills to achieve company objectives.</p>
</div>

<div className='mb-4'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className="text-sm  sm:text-md font-bold ">CAREER OBJECTIVE -:</h1>
  </div>
  <p className="leading-relaxed">{resume?.objective}</p>
</div>

<div className='mb-4'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-2 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className="text-sm sm:text-md font-bold ">EDUCATION QALIFICATINS -:</h1>
  </div>
  <p className='mb-2'>high school: {resume?.high}</p>
  <p className='mb-2' >Intermediate: {resume?.inter}</p>
  <p>graduate: {resume?.graduate}</p>
</div>

<div className='mb-4'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-2 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }} >
  <h1 className='text-md font-bold '>EXTRA QALIFICATION -:</h1>
  </div>
  <p>{resume?.extra}</p>
</div>

<div className='mb-4'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-2 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className='text-md font-bold '>WORK EXPRIENCE -:</h1>
  </div>
  <p>{resume?.workexp}</p>
</div>

<div className='mb-6'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-5 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className=" grid grid-cols-1 font-semibold sm:grid-cols-2 gap-y-1 gap-x-6">PERSONAL DETAILS -:</h1>
  </div>
  <p>father name : {resume?.fathername}</p>
  <p>mother name : {resume?.mother}</p>
  <p>Mataril status : {resume?.status}</p>
  <p>Date of birth : {resume?.date}</p>
  <p>Gender : {resume?.gender}</p>
  <p >Languages : {resume?.language}</p>
</div>

<div className='mb-8'>
  <div className='flex items-center justify-start p-2 rounded-4xl h-auto mb-2 sm:mb-3' style={{backgroundColor:"#ECECEC"
  }}>
  <h1 className='text-md font-bold '>DECLARATION -:</h1>
  </div>
  <p>I here by declared that all the above entioned statements are true & correct to the best of my Knowlage.</p>
</div>









</div>
<button onClick={domloadpdf} className="w-full sm:w-40 h-10 bg-purple-800 text-white font-semibold rounded-sm mt-6">Domload PDF</button>
</div>

</section>
    </div>
  )
}

export default Resume