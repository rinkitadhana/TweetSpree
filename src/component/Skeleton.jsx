const Skeleton = () => {
  return (
    <div className=" animate-pulse">
      <div className=" flex justify-center md:flex-row flex-col cursor-pointer ">
        <div className=" md:w-2/3 mx-2 rounded-sm md:p-4 p-3 h-40 bg-white/15 ">
          <div className=" flex flex-col gap-3">
            <div className="h-4 w-3/5 rounded-lg bg-rose-100/20"></div>
            <div className="h-4 w-4/5 rounded-lg bg-rose-100/20"></div>
            <div className="h-4 w-9/2 rounded-lg bg-rose-100/20"></div>
            <div className="h-4 w-1/2 rounded-lg bg-rose-100/20"></div>
            <div className="h-4 w-2/5 rounded-lg bg-rose-100/20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
