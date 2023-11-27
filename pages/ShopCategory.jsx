import React from 'react'
import './CSS/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

import Item from '../components/Item/Item'

const ShopCategory=(props)=>{
    const {all_product}=useContext(ShopContext);
    return(
        <div className='shop-category'>
           <img  className='shopcategory-banner' src={props.banner} alt=""/> 
           <div className='shopcategory-indexSort'>
           
           </div>
           <div className='shopcategory-products'>
            {all_product.map((item,i)=>{
                if(props.category===item.category){
                    return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />    
                }
                else{
                    return null;
                }
            })}
           </div>
        </div>
    )
}

export default ShopCategory;
