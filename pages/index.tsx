
import Head from "next/head";
import Login from"./login.js"
import Image from "next/image.js";
import {AiOutlineSearch,AiOutlineLike,AiTwotonePieChart,AiFillSchedule} from 'react-icons/ai'
import {HiOutlineBell} from 'react-icons/hi'
import {RiRadio2Line} from "react-icons/ri"
import {BsTagsFill} from 'react-icons/bs'
import {TbUsers} from 'react-icons/tb'
import {FaUserPlus} from 'react-icons/fa'
import {MdSettings} from 'react-icons/md'
import {GrSchedulePlay} from 'react-icons/gr'

import AuthUser from '../components/AuthUser.js'

import { useSession, getSession,signOut} from "next-auth/react"



export default function Home() {
function handleSignout(){

  signOut();

}

  const { data: session } = useSession()

  return (
    <div >

      <Head>
        <title>Home Page</title>
      </Head>
     
      {session ? (<AuthUser session={session} handleSignout={handleSignout}/>):(UnAuthUser())}
      
    </div>
  )
}


function UnAuthUser(){
  return(
    <div>
      <Login></Login>
    </div>
  )
}




export async function getServerSideProps({ req }){
  const session = await getSession({req});

  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }

  return {
    props:{session}
  }
}