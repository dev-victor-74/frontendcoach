import React from 'react'

const Termspage = () => {
  const term =[
    {
      id:1,
      label:"Acceptance of Terms",
      desc:`By accessing or using the services provided by FrontendCoach, you agree to abide by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.`
    },
    {
      id:2,
      label:"Use License:",
      desc:`FrontendCoach grants users a limited license to access and use the materials provided on this website for personal, non-commercial transitory viewing only. This license does not include the right to modify or copy the materials, use them for any commercial purpose, or remove any copyright or other proprietary notations from the materials.`
    },
    {
      id:3,
      label:"User Account",
      desc: "Users may be required to create an account to access certain features or services on FrontendCoach. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when creating an account and to update your information as necessary to keep it accurate and current."
    },
    {
      id:4,
      label:"User Conduct",
      desc:` Users are prohibited from engaging in any conduct that may disrupt or interfere with the operation of FrontendCoach or the experience of other users. This includes but is not limited to

      uploading or transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.`
    },
    {
      id:5,
      label:"Intellectual Property",
      desc:` The materials and content provided on FrontendCoach, including but not limited to text, graphics, logos, images, and software, are owned by or licensed to FrontendCoach and are protected by copyright and other intellectual property laws. Users may not reproduce, distribute, modify, transmit, display, or otherwise use any materials or content from FrontendCoach without the prior written consent of FrontendCoach.`
    }
    ,
    {
      id:6,
      label:"Limitation of Liability",
      desc:` FrontendCoach and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of or inability to use FrontendCoach, even if FrontendCoach has been advised of the possibility of such damages.`
    }
  ]
  return (
    <div className='w-full h-full flex items-center justify-center px-4'>
    <section className='w-full h-full md:w-[70%] lg:w-[55%] mt-10 flex flex-col gap-5 mb-12'>
      <div className="w-full flex flex-col gap-4">
        <h1 className='text-center text-zinc-200 text-5xl font-bold'>
          Terms and Conditions
        </h1>
        <p className='text-[16px] text-center text-zinc-200 font-semibold'>
        These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing FrontendCoach, you accept these terms and conditions in full.
        </p>
      </div>
        <div className="w-full h-full flex flex-col justify-center gap-5 mt-8">
        {
                term.map(t=>(
                  <div className="w-full flex justify-center flex-col" key={t.id}>
                    <div className="flex items-center gap-3">
                       <h4 className='text-sm font-normal text-zinc-300'>{t.id}.</h4>
                      <h2 className='text-[18px] tracking-wide text-zinc-200 font-bold'>{t.label}</h2>
                    </div>
                    <p 
                    className='text-[15px] font-normal text-zinc-200'
                    >{t.desc}
                    </p>
                   </div>
                ))
              }
        </div>
    </section>
 </div>
  )
}

export default Termspage
