import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../parts/Footer";
import Post from "../parts/Post";
import Data from "../parts/Data";
import React, { useEffect, useState } from "react";
import Skeleton from "../parts/Skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const generateRandomQuestions = () => {
    const shuffledQuestions = Data.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    setRandomQuestions(selectedQuestions);
  };

  useEffect(() => {
    generateRandomQuestions(); // Generate questions when the component first mounts
  }, []);

  const showDiv = () => {
    setIsVisible(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setLoading(true);
    generateRandomQuestions();
  };

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
            <div className="  font-semibold text-3xl font-bricolage">
              Tweet<span className="text-pink-500">Spree</span>
            </div>
            <div className=" flex flex-row gap-1 items-center bg-white/40 hover:bg-white/30 w-fit rounded-md p-1 px-2 text-sm font-semibold text-white hover:cursor-pointer">
              <FaStar className="text-yellow-400" />
              On Github
            </div>
          </div>
          <div>
            <div className=" font-bricolage md:text-6xl font-bold  mt-10 text-4xl px-2 md:px-0   text-center">
              This <span className=" ">project</span> will generate{" "}
              <span className=" text-green-400">facts</span>,{" "}
              <span className=" text-green-400">advice</span>, and{" "}
              <span className=" text-green-400">fun questions</span> about
              programing to boost your{" "}
              <span className=" text-pink-500">Twitter engagement!</span>
            </div>
            <div className="text-center md:px-36 px-2 text-sm md:text-base mt-4 tracking-tight font-bricolage">
              Get 100% engagement guaranteed. Click generate, post, and watch
              your Twitter blow up! No more guesswork—just instant results that
              make your feed stand out..🔥
            </div>
            <div className=" flex justify-center">
              <div className="font-semibold text-purple-400 mt-2 flex flex-row gap-1 items-center">
                All posts are generated with the assistance of AI{" "}
                <BsStars className="text-yellow-400" />
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-7">
            <div
              onClick={showDiv}
              className=" mb-5 bg-blue-500 hover:bg-blue-400 w-fit rounded-md py-1 px-3 cursor-pointer font-semibold text-lg flex flex-row gap-1 items-center"
            >
              <BsStars className="text-yellow-400" />
              Generate
              <FaArrowRightLong className=" text-sm" />
            </div>
          </div>
          {isVisible && (
            <div>
              {randomQuestions.map((question, index) => (
                <div key={index}>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <Post
                      des={question}
                      post={() =>
                        shareOnTwitter(
                          `${question} - Created with TweetSpree[therinkit-tweetspree.vercel.app]`
                        )
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
