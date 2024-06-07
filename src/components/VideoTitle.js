

const VideoTitle = ({title, overview})=>{
    
    return <div className="absolute pt-56 w-screen aspect-video pl-10 bg-gradient-to-r from-black">
        <h1 className="font-bold text-2xl text-white">{title}</h1>
        <p className=" mt-4 text-white w-1/4">{overview}</p>
        <div className="my-4">
            <button className="px-7 py-1 bg-white text-lg mr-2 rounded-lg hover:bg-opacity-80">▶ Play</button>
            <button className="px-7 py-1 bg-gray-600 text-lg rounded-lg">More Info</button>
        </div>
    </div>
}

export default VideoTitle;