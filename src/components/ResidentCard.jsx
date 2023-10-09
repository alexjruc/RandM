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
            <div className="p-4 text-white flex flex-col gap-6">
                <h3 className="text-center font-bold text-lg">{residentInfo?.name}</h3>
                <ul className="text-[#938686] text-sm font-normal flex flex-col gap-4">
                    <li className="flex gap-16">Specie <span className="font-medium text-white">{residentInfo?.species}</span></li>
                    <li className="flex gap-16">Origin <span className="font-medium text-white">{residentInfo?.origin.name}</span></li>
                    <li className="flex gap-3">Times appear <span className="font-medium text-white">{residentInfo?.episode.length} times</span></li>
                </ul>
            </div>
        </article>
    )
}
export default ResidentCard