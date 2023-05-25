 import React, {useState} from 'react';
 import "./style.css";
 import Menu from "./menuApi.js";
 import MenuCard from './menuCard';
 import Navbar from './Navbar';
 
const uniqueList = [
    ...new Set(                                             // spread operator
        Menu.map((currentElement) => {
            return currentElement.category;
        })
    ),
    "All",
];
console.log(uniqueList);

 const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenulist] = useState(uniqueList);
    const filterItem = (category) =>{
        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currentElement) =>{
            return currentElement.category === category;
        });
        setMenuData(updatedList); 
    };
   return (
   <> 
       <Navbar filterItem={filterItem} menuList={menuList} />  {/* calling navbar */} 
        <MenuCard menuData= {menuData} />
   </>
   );
 }
 
 export default Resturant
 