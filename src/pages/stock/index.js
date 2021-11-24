import React, {useState} from 'react';
import { AsideBar } from '../../components';
// import {Search, Delete, Brush} from '@mui/icons-material'
import {Search,Delete,Brush} from '@material-ui/icons'
// import SearchIcon from '@mui/icons-material/Search';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BrushIcon from '@mui/icons-material/Brush';

import './styles.css';

export default function Stock(){

    let Item = {
        cod:"1",
        desc:"lajota pesada",
        price:25,
        qty:5,
        client:"lajotas",
        stock:"lajoteiro"
    }

    return(
        <div className='stock_page'>
            <AsideBar/>
            <div className="stock_background">
                <div className='stock_geral'>
                    <h2>Estoque Disponível</h2>
                    <div className="stock_block_header">
                        <div className='invisible_block'></div>
                        <span>Cod</span>
                        <span>Descr</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Client</span>
                        <span>Stock</span>
                        <div className='invisible_block'></div>
                    </div>
                    <div className='itens_list'>
                        <div className='item_block'>
                            <div className='blue_bar'></div>
                            <div className='item_block_atribute'>
                                <p>Cod</p>
                                <span>{Item.cod}</span>
                            </div>
                            <div className='item_block_atribute_desc'>
                                <p>Desc</p>
                                <span>{Item.desc}</span>
                            </div>
                            <div className='item_block_atribute'>
                                <p>Price</p>
                                <span>{Item.price}</span>
                            </div>
                            <div className='item_block_atribute'>
                                <p>Qty</p>
                                <span>{Item.qty}</span>
                            </div>
                            <div className='item_block_atribute'>
                                <p>Client</p>
                                <span>{Item.client}</span>
                            </div>
                            <div className='item_block_atribute'>
                                <p>Stock</p>
                                <span>{Item.stock}</span>
                            </div>
                            <div className='item_block_buttons_div'>
                                <button className='item_block_button'><Delete/></button>
                                <button className='item_block_button'><Brush/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}