

const VideoTitle = ({title, overview})=>{
    
    return <div className="absolute pt-24 md:pt-36 w-screen aspect-video pl-5 md:pl-10 bg-gradient-to-r from-black">
        <h1 className="font-bold w-40 md:w-64 text-md  md:text-2xl text-white">{title}</h1>
        <p className=" hidden md:block mt-4 text-white w-1/4">{overview}</p>
        <div className="my-2 md:my-4">
            <button className="px-3 md:px-7 py-0 md:py-1  bg-white text-md md:text-lg mr-2 rounded-lg hover:bg-opacity-80">▶ Play</button>
            <button className="hidden md:inline-block px-7 py-1 bg-gray-600 text-lg rounded-lg">More Info</button>
        </div>
    </div>
}

export default VideoTitle;