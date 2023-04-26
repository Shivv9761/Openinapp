import React from "react";
import Image from 'next/image'
import {
  AiOutlineSearch,
  AiOutlineLike,
  AiTwotonePieChart,
  AiFillSchedule,
} from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { RiRadio2Line } from "react-icons/ri";
import { BsTagsFill } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { GrSchedulePlay } from "react-icons/gr";
import { LineChart } from "recharts";
import LineChartUser from "../components/LineChartUser";
import PieChartUser from "./PieChartUser";
function AuthUser({ session, handleSignout }) {
  return (
    <div className=" bg-[#DDDDDD] flex   p-6 rounded-2xl">
      <div className="bg-black  w-[280px] rounded-3xl min-h-[100vh]">
        <div>
          <h1 className=" text-center text-white ml-5  text-4xl font-bold mt-16">
            Board.
          </h1>
        </div>

        <div className="flex flex-col justify-between items-center min-h-[80%]">
          <div className="ml-2 mt-14 gap-16 flex flex-col">
            <div className="flex items-center gap-3">
              <AiTwotonePieChart className="w-12 h-8" color="white" />
              <h1 className="text-white text-[18px]">Dashboard</h1>
            </div>
            <div className="flex opacity-70 items-center gap-3">
              <BsTagsFill className="w-12 h-8" color="white" />
              <h1 className="text-white text-[18px]">Transactions</h1>
            </div>
            <div className="flex opacity-70  items-center gap-3">
              <AiFillSchedule className="w-12 h-8" color="white" />
              <h1 className="text-white   text-[18px]">Schedules</h1>
            </div>
            <div className="flex opacity-70  items-center gap-3">
              <FaUserPlus className="w-12 h-8" color="white" />
              <h1 className="text-white text-[18px]">Users</h1>
            </div>
            <div className="flex opacity-70  items-center gap-3">
              <MdSettings className="w-12 h-8" color="white" />
              <h1 className="text-white text-[18px]">Settings</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-3 opacity-70">
            <p className="text-white">Help</p>
            <p className="text-white">Contact Us</p>
            <p className="text-white  cursor-pointer" onClick={handleSignout}>
              Log Out
            </p>
          </div>
        </div>
      </div>

      <div className="grid   border-blue-700 grid-rows-[1fr_4fr_450px_300px] gap-[40px]  p-7 rounded-2xl">
        <div className=" flex items-center w-full  justify-between">
          <div className="font-bold text-[24px]">Dashboard</div>
          <div className="flex justify-between align-baseline gap-3">
            <div className="relative">
              <input
                placeholder="search.."
                className="w-[180px] px-4 py-[1px] rounded-[10px]"
              />

              <div>
                <AiOutlineSearch className="right-1 top-1 absolute  " />
              </div>
            </div>
            <HiOutlineBell className="relative top-1" />
            <img
              alt="image"
              src={`${session.user.image}`}
              width={25}
              height={10}
              className="rounded-full mr-2"
            />
          </div>
        </div>
        <div className="flex w-full  gap-8  justify-between">
          <div className="bg-[#DDEFE0] w-full rounded-[20px] relative h-[160px]">
            <RiRadio2Line className="absolute top-4 right-7 w-10 h-14" />
            <div className="relative top-20 left-6">
              <h1 className="font-semibold">Total Revenues</h1>
              <p className="text-2xl font-bold">{`$2,129,430`}</p>
            </div>
          </div>
          <div className="bg-[#F4ECDD] w-full relative rounded-[20px] h-[160px]">
            <BsTagsFill className="absolute top-4 right-7 w-10 h-14" />
            <div className="relative top-20 left-6">
              <h1 className="font-semibold">Total Transactions</h1>
              <p className="text-2xl font-bold">{`1,520`}</p>
            </div>
          </div>
          <div className="bg-[#EFDADA] w-full rounded-[20px] relative h-[160px]">
            <AiOutlineLike className="absolute top-4 right-7 w-10 h-14" />
            <div className="relative top-20 left-6">
              <h1 className="font-semibold">Total Likes</h1>
              <p className="text-2xl font-bold">{`9,721`}</p>
            </div>
          </div>
          <div className="bg-[#DEE0EF] w-full relative rounded-[20px] h-[160px]">
            <TbUsers className="absolute top-4 right-7 w-10 h-14" />
            <div className="relative top-20 left-6">
              <h1 className="font-semibold">Total Users</h1>
              <p className="text-2xl font-bold">{`892`}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 w-full  rounded-[20px] ">
          <LineChartUser />
        </div>
        <div className=" gap-9 w-full flex ">
          <div className="bg-white  rounded-[20px]">
            <PieChartUser />
          </div>

          <div className="bg-white   rounded-[20px]  flex flex-col gap-7 p-9">
            <div className=" w-full flex justify-between">
              <h1 className="font-bold text-2xl">Today&#39;s Schedule</h1>
              <p className="opacity-70">{`See All >`}</p>
            </div>

            <div className="flex w-full gap-4">
              <div className="bg-[#9BDD7C] h-[70px] w-[20px]"></div>
              <div>
                <h1 className="font-semibold">
                  Meeting With Suppliers of Kutta Bali
                </h1>
                <p>14:00 - 15:00</p>
                <p>at Sunset Road, Kutabali</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#6972C3] h-[70px] w-[20px]"></div>
              <div>
                <h1 className="font-semibold">
                  Check Operation at Giga Factory 1
                </h1>
                <p>18:00 - 20:00</p>
                <p>at Central Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthUser;
