import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({residentEndpoint}) => {
    const status = {
        Alive :"bg-green-600",
        Dead :"bg-red-600",
        unknown:"bg-slate-500",
    }

    const [residentInfo, setResidentInfo] = useState(null)

    useEffect(() => {
        axios
            .get(residentEndpoint)
            .then(({ data }) => setResidentInfo(data))
            .catch((error) => console.log(error))
    },[])

    return (
        <article className="border-green-600 border-2">
            <picture className="relative">
                <img src={residentInfo?.image} alt="" />
                <div className="absolute bottom-5 right-[80px] flex justify-center items-center gap-2 border bg-black/80 text-white px-6 py-1 border-green-600">
                    <div className={`${status[residentInfo?.status]} w-3.5 h-3.5 rounded-full`}></div>
                    <span>{residentInfo?.status}</span>
                </div>
            </picture>
            <div className="p-4 text-white">
                <h3 className="text-center font-bold">{residentInfo?.name}</h3>
                <ul>
                    <li>Specie <span className="font-bold">{residentInfo?.species}</span></li>
                    <li>Origin <span className="font-bold">{residentInfo?.origin.name}</span></li>
                    <li>Times appear <span className="font-bold">{residentInfo?.episode.length} times</span></li>
                </ul>
            </div>
        </article>
    )
}
export default ResidentCard