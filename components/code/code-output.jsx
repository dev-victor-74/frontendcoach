"use client"


const CodeOutput = ({code,id}) => {
  return (
    <div className="flex items-center h-full w-full">
        <iframe srcDoc={code} className="w-full h-full bg-slate-50" marginHeight='0' marginWidth='0'  id={id}/>
    </div>
  )
}

export default CodeOutput
