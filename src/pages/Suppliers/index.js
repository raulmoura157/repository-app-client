import React, {useState} from 'react';
import { AsideBar } from '../../components';
// import {Search, Delete, Brush} from '@mui/icons-material'
import {Search,Delete,Brush} from '@material-ui/icons'
// import SearchIcon from '@mui/icons-material/Search';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BrushIcon from '@mui/icons-material/Brush';

import './styles.css';

export default function Suppliers(){

    let Sup = {
        name:"Vendedor de lajotas",
        mail:"lajotas@lajoteiro.com",
        phone:"(19) 998521-4532"
    }

    return(
        <div className='suppliers'>
            <AsideBar/>
            <div className="sup_background">
                <div className='sup_geral'>
                    <div className="sup_block_header">
                        <button className='search_Button'><Search/></button>
                        <input placeholder='Pesquise o nome do fornecedor' className='search_input'></input>
                    </div>
                    <div className='sup_list'>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                        <div className='sup_block'>
                            <div className='blue_bar'></div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Name</p>
                                <span>{Sup.name}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Email</p>
                                <span>{Sup.mail}</span>
                            </div>
                            <div className='sup_block_atribute'>
                                <p>Supplier Phone</p>
                                <span>{Sup.phone}</span>
                            </div>
                            <div className='sup_block_buttons_div'>
                                <button className='sup_block_button'><Delete/></button>
                                <button className='sup_block_button'><Brush/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}