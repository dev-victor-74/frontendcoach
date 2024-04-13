
import {MdOutlineMessage,MdDashboard} from "react-icons/md";
import { AiOutlineUser, AiOutlinePlusCircle,AiOutlineFileDone } from "react-icons/ai";
import { VscProject } from "react-icons/vsc";
import { IoPricetagsOutline } from "react-icons/io5";



export const links = [

    {
        id: 1,
        label:"Dashboard",
        href: "/admin/dashboard",
        Icon: MdDashboard,
    },

    {
      id:2,
      label:"Users",
      href:"/admin/users",
      Icon: AiOutlineUser
    },

    {
        id: 3,
        label:"AddChallenge",
        href: "/admin/addChallenge",
        Icon:  AiOutlinePlusCircle
    },
    {
        id: 4,
        label:"Messages",
        href: "/admin/messages",
        Icon:  MdOutlineMessage
    },
    {
        id: 5,
        label:"Challenges ",
        href: "/challenges",
        Icon:  VscProject
    },
    {
      id: 6,
      label:"Submission",
      href: "/submissions",
      Icon:  AiOutlineFileDone
    }, 
    
    {
      id: 7,
      label:"Pricing",
      href: "/pricing",
      Icon: IoPricetagsOutline
    },
]

