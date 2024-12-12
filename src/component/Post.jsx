import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa"
import { FiShare } from "react-icons/fi"
import { RiRepeatLine } from "react-icons/ri"
import { VscGraph } from "react-icons/vsc"

const Post = (props) => {
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
    <div className="">
      <div className=" flex justify-center md:flex-row flex-col cursor-pointer">
        <div className=" md:w-2/3 border mx-2 border-gray-600 rounded-sm  p-3 ">
          <div className="flex flex-row gap-3 items-start">
            <div className=" rounded-full size-11 ">
              <img
                className=" rounded-full size-10"
                src="./userIMG/dp.jpeg"
                alt="profile-pic"
              />
            </div>

            <div className=" flex flex-col gap-1 w-full">
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
                  className=" font-semibold flex justify-center text-sm gap-1 items-center border rounded-full cursor-pointer  px-2 py-0.5 hover:bg-white/20"
                >
                  <FiShare />
                  Post
                </div>
              </div>
              <div>{props.des}</div>
              <div className="mt-2">
                <div className=" flex flex-row justify-between text-xs md:text-base">
                  <div className=" flex flex-row items-center md:gap-1 gap-0.5 hover:text-blue-400 cursor-pointer">
                    <FaRegComment />{" "}
                    <div className="md:text-base text-sm"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center md:gap-1 gap-0.5 hover:text-green-400 cursor-pointer">
                    <RiRepeatLine />{" "}
                    <div className="md:text-base text-sm"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center md:gap-1 gap-0.5 hover:text-pink-500 cursor-pointer">
                    <FaRegHeart />{" "}
                    <div className="md:text-base text-sm"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center md:gap-1 gap-0.5 hover:text-blue-400 cursor-pointer">
                    <VscGraph />{" "}
                    <div className="md:text-base text-sm"> 1.2k</div>
                  </div>
                  <div className="flex flex-row items-center  md:gap-3.5 gap-2">
                    <div className=" md:flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
                      <FaRegBookmark />
                    </div>
                    <div className=" md:flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
                      <FiShare />
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
