import { BsStars } from "react-icons/bs"
import { FaArrowRightLong } from "react-icons/fa6"
import Footer from "./Footer"
import Post from "./Post"
import React, { useEffect, useState } from "react"
import Skeleton from "./Skeleton"
import Dummies from "../parts/Data"
import Header from "./Header"
import { FaSpinner } from "react-icons/fa"
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [randomQuestions, setRandomQuestions] = useState([])

  const generateRandomQuestions = () => {
    const shuffledQuestions = Dummies.sort(() => 0.5 - Math.random())
    const selectedQuestions = shuffledQuestions.slice(0, 5)
    setRandomQuestions(selectedQuestions)
  }

  useEffect(() => {
    generateRandomQuestions()
  }, [])

  const showDiv = () => {
    setLoading(true)
    setIsVisible(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)

    generateRandomQuestions()
  }

  const shareOnTwitter = (text) => {
    const twitterBaseUrl = "https://twitter.com/intent/tweet?text="
    const tweetText = encodeURIComponent(text)
    const url = `${twitterBaseUrl}${tweetText}`
    window.open(url, "_blank")
  }
  return (
    <div className=" dark">
      <div className="flex justify-center md:flex-row flex-col text-white">
        <div className=" md:w-3/5  min-h-screen">
          <Header />
          <div>
            <div className=" font-bricolage md:text-6xl font-bold  mt-10 text-4xl px-2 md:px-0   text-center">
              Get <span className=" text-green-400">facts</span>,{" "}
              <span className=" text-green-400">advice</span>, and{" "}
              <span className=" text-green-400">fun questions</span> about
              programing to boost your{" "}
              <span className=" text-pink-500">Twitter engagement!</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center md:px-36 px-2 text-sm md:text-base mt-4 tracking-tight font-bricolage">
                Click generate, post, and watch your Twitter blow up! No more
                guesswork—just instant results that make your feed stand out..🔥
              </div>
              <div className=" px-4  flex   justify-center">
                <div className=" flex gap-1 text-center items-center  font-semibold text-purple-400    text-xs md:text-base">
                  All the posts are generated from stored data, sourced from
                  various sites, and AI ✨
                </div>
              </div>

              <div className=" select-none flex justify-center ">
                <button
                  onClick={showDiv}
                  className=" group  bg-blue-500 hover:bg-blue-400 w-fit rounded-md py-1 px-3 cursor-pointer font-semibold text-lg "
                >
                  {loading ? (
                    <div className="flex flex-row gap-2 items-center">
                      <BsStars className="text-yellow-400" />
                      <div>Generating</div>
                      <FaSpinner className="animate-spin " />
                    </div>
                  ) : (
                    <div className="flex flex-row gap-1 items-center">
                      <BsStars className="text-yellow-400" />
                      Generate
                      <FaArrowRightLong className=" text-sm group-hover:-rotate-45 transition-all delay-75" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isVisible && (
            <div className="flex flex-col gap-2 my-5">
              {randomQuestions.map((question, index) => (
                <div key={index}>
                  {loading ? (
                    <Skeleton />
                  ) : (
                    <Post
                      des={question}
                      post={() => shareOnTwitter(`${question}`)}
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
  )
}

export default Home
