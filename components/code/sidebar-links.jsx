import React from 'react'

const SideBarLinks = ({icon, label,onClick}) => {
  return (
    <div onClick={onClick} className= "group px-[4px] cursor-pointer bg-[#16161f] flex items-center py-[4px]  relative rounded-sm hover:bg-slate-900">
           {icon}
         <span className="hidden -right-[46px] w-max absolute
          bg-black text-zinc-200 group-hover:flex px-3 py-1 font-medium rounded-[3px] text-xs ">
             {label}
         </span>
    </div>
  )
}

export default SideBarLinks
