import React from 'react'

const PrivacyPolicypage = () => {

   const policy = [
    {
      id: 1,
      description: `Your privacy is important to us. It is FrontendCoach's policy to respect your privacy
                    regarding any information we may collect 
                    from you across our website, https://frontendcoach.com, and other sites we own and operate.`
    },
    {
      id: 2,
      description: `We only ask for personal information when we truly need it to provide a service to you.
                    We collect it by fair and lawful means, with your knowledge and consent. 
                    We also let you know why we're collecting it and how it will be used.`
    },
    {
      id: 3,
      description: `We only retain collected information for as long as necessary to provide 
                    you with your requested service. What data we store, we'll protect within 
                    commercially acceptable means to prevent loss and theft, 
                    as well as unauthorised access, disclosure, copying, use or modification.`
    },
    {
      id: 4,
      description: `We don't share any personally 
                    identifying information publicly or with third-parties, except when required to by law.`
    },
    {
      id: 5,
      description:`Our website may link to external sites that are not operated by us.
                   Please be aware that we have no control over the content and practices 
                   of these sites, and cannot 
                  accept responsibility or liability for their respective privacy policies.`
    },
    {
      id: 6,
      description:`You are free to refuse our request for your personal information 
                   (such as your email), with the understanding
                    that we may be unable to provide you with some of your desired services.`
    },
    {
      id: 7,
      description:`Your continued use of our website will be regarded as acceptance of our practices
                   around privacy and personal information. If you have any questions about how we handle user 
                   data and personal information, feel free to contact us.`
    },
    {
      id: 8,
      description:`This policy is effective as of 25 April 2024.`
    }
   ]


  return (
    <div className='w-full h-full flex items-center justify-center'>
       <section className='w-full h-full md:w-[70%] lg:w-[55%] mt-10 flex flex-col gap-5 mb-12'>
           <h1 className='text-center text-zinc-200 text-5xl font-bold'>Privacy Policy</h1>
           <div className="w-full h-full flex flex-col justify-center gap-5">
              {
                policy.map(p=>(
                  <p key={p.id}
                   className='text-[16px] font-normal text-zinc-200'
                  >{p.description}</p>
                ))
              }
           </div>
       </section>
    </div>
  )
}

export default PrivacyPolicypage
