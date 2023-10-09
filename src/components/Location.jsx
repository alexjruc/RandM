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
        <section className="py-10 px-2 flex flex-col gap-12">
            <form onSubmit={handleSubmit} className="w-full text-white flex justify-center border-[#8EFF8B] max-w-[720px] border-2"> 
                <input name="idLocation" type="text" placeholder="Type a location ID..." className="text-center outline-none text-black"/>
                <button type="submit" className="flex gap-1">
                    Search <IconSearch />
                </button>
            </form>

            <div className="border-[#8EFF8B] text-white max-w-[800px] border-2 flex flex-col justify-center items-center py-4 px-10">
                <h3 className="text-[#8EFF8B]">Welcome to {location?.name}!</h3>
                <ul className="hidden md:flex md:gap-4">
                    <li>Type: {location?.type}</li>
                    <li>Dimension: {location?.dimension}</li>
                    <li>Population: {location?.residents.length}</li>
                </ul>
            </div>
        </section>
    );
};
export default Location;
