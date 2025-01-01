import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularItem = () => {
    const [menu] = useMenu()
    const popularItem = menu.filter((item) => item.category === 'popular')
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         const popularItem = data.filter((item) => item.category === 'popular')
    //         setMenu(popularItem)
    //     })
    // }, [])
    return (
        <div className="mb-12">
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Item'}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                popularItem.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
        </div>
    );
};

export default PopularItem;