import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { RiRepeatLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";

const Post = () => {
  return (
    <div className=" mt-3">
      <div className=" flex justify-center cursor-pointer">
        <div className=" md:w-2/3 border mx-2 border-gray-600 rounded-sm md:p-4 p-3 ">
          <div className="flex flex-row gap-3 items-start">
            <img
              className=" rounded-full size-10 border border-gray-600 "
              src="https://media.licdn.com/dms/image/v2/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=EPGRytuEOVPFLctZkKdIxLl_1W7QhVFrLeS-GwWjJj0"
              alt="profile-pic"
            />

            <div className=" flex flex-col gap-1">
              <div className=" flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <div className=" text-[1.110rem] font-semibold">
                    Rinkit Adhana
                  </div>
                  <div className=" text-gray-400">@rnkktt</div>
                  {"."}
                  <div className=" text-gray-400">Aug 7</div>
                </div>
                <div className=" font-semibold flex justify-center text-sm gap-1 items-center border rounded-xl cursor-pointer  px-2 hover:bg-white/20">
                  <FiShare />
                  Post
                </div>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                sequi totam vitae magnam inventore culpa accusamus obcaecati
                quod ipsum cupiditate! Quo, maxime.
              </div>
              <div className="mt-2">
                <div className=" flex flex-row justify-between ">
                  <div className=" flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
                    <FaRegComment /> <div className="text-base"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center gap-1 hover:text-green-400 cursor-pointer">
                    <RiRepeatLine /> <div className="text-base"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center gap-1 hover:text-pink-500 cursor-pointer">
                    <FaRegHeart /> <div className="text-base"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
                    <VscGraph /> <div className="text-base"> 1.2k</div>
                  </div>
                  <div className=" flex flex-row items-center gap-1 hover:text-blue-400 cursor-pointer">
                    <FaRegBookmark /> <div className="text-base"> 1.2k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
