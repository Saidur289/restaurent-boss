import { Helmet } from "react-helmet-async";
import Cover from "../../../../Shared/Cover/Cover";
import menuImg from '../../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../../hooks/useMenu";
import desertImg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu] = useMenu()
    const offers = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Shop'}></Cover>
            <SectionTitle subHeading='Don Not Miss' heading='Today Offer'></SectionTitle>
            {/* offers */}
            <MenuCategory items={offers}></MenuCategory>
             {/* desserts */}
             <MenuCategory items={desserts} title={'dessert'} img={desertImg}></MenuCategory>
             {/* pizza */}
             <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
             {/* soup */}
             <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
             {/* salad */}
             <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;