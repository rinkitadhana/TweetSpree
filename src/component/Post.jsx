import { useState } from "react"
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { FiShare } from "react-icons/fi"
import { GrUpload } from "react-icons/gr"
import { HiOutlineUpload } from "react-icons/hi"
import { IoShareOutline } from "react-icons/io5"
import { RiRepeatLine } from "react-icons/ri"
import { RxUpload } from "react-icons/rx"
import { TbUpload } from "react-icons/tb"
import { TfiUpload } from "react-icons/tfi"
import { VscGraph } from "react-icons/vsc"

const Post = (props) => {
  const [like, setLike] = useState(false)
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const date = new Date()
  const todayDate = date.getDate()
  const todayMonth = month[date.getMonth()]
  return (
    <div>
      <div className=" flex justify-center md:flex-row flex-col cursor-pointer">
        <div className="  md:w-2/3 border mx-2 border-gray-600 rounded-sm  p-3 ">
          <div className="flex flex-row gap-3 items-start">
            <div className=" select-none rounded-full size-11 ">
              <img
                className=" rounded-full size-10"
                src="./userIMG/dp.jpeg"
                alt="profile-pic"
              />
            </div>

            <div className="   flex flex-col gap-1 w-full">
              <div className=" flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                  <div className=" md:text-[1.110rem] font-semibold hover:underline">
                    Gruz
                  </div>
                  <div className=" text-gray-400">@damnGruz ·</div>
                  <div className="block text-gray-400  hover:underline">
                    {todayMonth} {todayDate}
                  </div>
                </div>
                <div
                  onClick={props.post}
                  className=" select-none font-semibold flex justify-center text-sm gap-1 items-center border rounded-full cursor-pointer  px-2 py-0.5 hover:bg-white/20 transition-all duration-200"
                >
                  <FiShare />
                  Post
                </div>
              </div>
              <div>{props.des}</div>
              <div className=" mt-2 md:mt-0.5 select-none">
                <div className=" flex flex-row justify-between text-xs md:text-base">
                  <div className=" transition-all duration-200 group flex gap-1 md:gap-0 flex-row items-center md:hover:text-blue-400 hover:text-gray-400 cursor-pointer">
                    <div className="md:group-hover:bg-blue-400/15 rounded-full md:size-8 flex justify-center items-center ">
                      <FaRegComment className="size-4" />
                    </div>
                    <div className="md:text-base text-sm"> 99</div>
                  </div>
                  <div className=" transition-all duration-200 group flex gap-1 md:gap-0 flex-row items-center md:hover:text-green-400 hover:text-gray-400 cursor-pointer">
                    <div className="md:group-hover:bg-green-400/15 rounded-full md:size-8 flex justify-center items-center ">
                      <RiRepeatLine className="size-4" />
                    </div>
                    <div className="md:text-base text-sm"> 20</div>
                  </div>
                  <div
                    onClick={() => setLike((prev) => !prev)}
                    className={` ${
                      like ? "text-pink-500" : ""
                    } transition-all duration-200 group flex gap-1 md:gap-0 flex-row items-center md:hover:text-pink-500  cursor-pointer`}
                  >
                    <div className="md:group-hover:bg-pink-500/15 rounded-full md:size-8 flex justify-center items-center ">
                      {like ? (
                        <FaHeart className="size-4" />
                      ) : (
                        <FaRegHeart className="size-4" />
                      )}
                    </div>
                    <div className="md:text-base text-sm"> 6.9k</div>
                  </div>
                  <div className=" transition-all duration-200 group flex gap-1 md:gap-0 flex-row items-center md:hover:text-blue-400 hover:text-gray-400 cursor-pointer">
                    <div className="md:group-hover:bg-blue-400/15 rounded-full md:size-8 flex justify-center items-center ">
                      <VscGraph className="size-4" />
                    </div>
                    <div className="md:text-base text-sm"> 69k</div>
                  </div>

                  <div className="flex flex-row items-center md:gap-0 gap-2">
                    <div className=" md:flex flex-row   hover:text-blue-400 hover:bg-blue-400/15 rounded-full md:size-8 flex justify-center items-center cursor-pointer transition-all duration-200">
                      <FaRegBookmark className="size-4" />
                    </div>
                    <div className=" md:flex flex-row   hover:text-blue-400 hover:bg-blue-400/15 rounded-full md:size-8 flex justify-center items-center cursor-pointer transition-all duration-200">
                      <HiOutlineUpload className="  size-5 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
