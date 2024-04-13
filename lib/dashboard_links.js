

import { MdArticle, MdDashboard,MdDocumentScanner} from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { IoPricetagsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";


export const links = [

    {
        id: 1,
        label:"Dashboard",
        href: "/dashboard",
        Icon: MdDashboard,
    },

    {
      id:2,
      label:"Profile",
      href:"/profile",
      Icon: RxAvatar
    },

    {
        id: 3,
        label:"Challenges",
        href: "/challenges",
        Icon: VscProject
    },
    {
        id: 4,
        label:"Submissions",
        href: "/submissions",
        Icon:  AiOutlineFileDone
    },
    {
        id: 5,
        label:"Completed Challenges ",
        href: "/projects",
        Icon:  FaTasks
    },
    
    {
      id: 8,
      label:"Get Pro",
      href: "/pricing",
      Icon: IoPricetagsOutline
    },
 
]