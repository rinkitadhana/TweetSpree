import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../parts/Footer";
import Post from "../parts/Post";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [content, setContent] = useState({
    quote: "",
    advice: "",
    funQuestion: "",
  });

  const fetchContent = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/random");
      setContent(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const shareOnTwitter = (text) => {
    const twitterBaseUrl = "https://twitter.com/intent/tweet?text=";
    const tweetText = encodeURIComponent(text);
    const url = `${twitterBaseUrl}${tweetText}`;
    window.open(url, "_blank");
  };
  return (
    <div className=" dark">
      <div className="flex justify-center md:flex-row flex-col text-white">
        <div className=" md:w-3/5  min-h-screen">
          <div className=" flex flex-row justify-between px-4 mt-8">
            <div className="  font-semibold text-3xl font-bricolage">Tweet</div>
            <div className=" flex flex-row gap-1 items-center bg-white/40 hover:bg-white/30 w-fit rounded-md p-1 px-2 text-sm font-semibold text-white hover:cursor-pointer">
              <FaStar className="text-yellow-400" />
              On Github
            </div>
          </div>
          <div>
            <div className=" font-bricolage md:text-6xl font-bold  md:mt-14 mt-8 text-3xl px-2 md:px-0   text-center">
              This <span className=" ">project</span> will generate{" "}
              <span className=" text-green-400">quotes</span>,{" "}
              <span className=" text-green-400">advice</span>, and{" "}
              <span className=" text-green-400">fun questions</span> to increase
              your <span className=" text-pink-500">Twitter engagement!</span>
            </div>
          </div>
          <div className=" flex justify-center mt-7">
            <div
              onClick={fetchContent}
              className=" mb-5 bg-blue-500 hover:bg-blue-400 w-fit rounded-md py-1 px-3 cursor-pointer font-semibold text-lg flex flex-row gap-1 items-center"
            >
              <BsStars className="text-yellow-400" />
              Generate
              <FaArrowRightLong className=" text-sm" />
            </div>
          </div>
          <Post
            des={content.quote}
            post={() => shareOnTwitter(`Quote: "${content.quote}"`)}
          />
          <Post
            des={content.advice}
            post={() => shareOnTwitter(`Advice: "${content.advice}"`)}
          />
          <Post
            des={content.funQuestion}
            post={() =>
              shareOnTwitter(`Fun Question: "${content.funQuestion}"`)
            }
          />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
