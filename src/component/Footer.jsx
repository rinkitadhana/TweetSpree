import { BsTwitterX } from "react-icons/bs"

const Footer = () => {
  return (
    <div className=" select-none my-6">
      <div className="flex flex-col gap-3 items-center font-semibold text-white">
        <div className="flex flex-col items-center">
          <div>©2024 TweetSpree</div>
          <div>
            Made by{" "}
            <a
              href="https://github.com/rinkitadhana"
              target=" _blank"
              className="text-green-500"
            >
              Rinkit Adhana
            </a>
          </div>
        </div>

        <div>
          <a
            href="https://twitter.com/intent/follow?screen_name=damnGruz"
            target="_blank"
            className=" flex gap-1 items-center border rounded-full px-3 py-1 animate-pulse hover:bg-white hover:text-black transition-all hover:animate-none"
          >
            <BsTwitterX />
            Follow Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
