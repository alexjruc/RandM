import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentsList = ({residents}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const{ pages,residentsInPage} = paginationLogic(currentPage, residents)

    useEffect(() => {
        setCurrentPage(1);
    },[residents])
    
    return (
        <section>
            <section className="bg-transparent max-w-5xl mx-auto grid grid-cols-[repeat(auto-fit,_280px)] gap-6 place-content-center py-10">
                {
                    residentsInPage.map ((resident) => (
                        <ResidentCard key={resident}  residentEndpoint={resident}/>
                    ))
                }
            </section>
            <ul className="text-white flex flex-wrap justify-center p-4">
                {pages.map((page) => (
                    <li key={page}>
                        <button className= {`${page === currentPage && "bg-[#062226]"} w-16 aspect-square hover:bg-[#062226]`} onClick={() =>{setCurrentPage(page)}}>{page}</button>
                    </li>
                ))
                }
            </ul>

        </section>
    )
}
export default ResidentsList