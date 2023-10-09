import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const idLocation = e.target.idLocation.value;

        axios
            .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(({ data }) => setLocation(data))
            .catch((error) => console.log(error))
    }


    return (
        <section className="text-sm py-10 px-2 flex flex-col gap-12">
            <form onSubmit={handleSubmit} className="text-white flex justify-center"> 
                <input name="idLocation" type="text" placeholder=" Type a location ID..." className="bg-transparent outline-none text-white border-[#8EFF8B]  border-2 p-2"/>
                <button type="submit" className="bg-[#8EFF8B] flex items-center gap-1 px-2">
                    <IconSearch />
                </button>
            </form>

            <div className="border-[#8EFF8B] font-medium text-white text-center max-w-[1000px] mx-auto border-2 flex flex-col justify-center items-center px-10 py-4 gap-4">
                <h3 className="text-[#8EFF8B] text-xl">Welcome to {location?.name}!</h3>
                <ul className="text-[#938686] w-full flex flex-col font-normal text-sm md:flex-row md:gap-8 ">
                    <li>Type: {location?.type}</li>
                    <li>Dimension: {location?.dimension}</li>
                    <li>Population: {location?.residents.length}</li>
                </ul>
            </div>
        </section>
    );
};
export default Location;
