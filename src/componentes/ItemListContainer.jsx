import React from 'react'
import ItemList from './ItemList'
import "./componetes-css/ItemListContainer.css"

function ItemListContainer() {
const Saludo = " Hola ";

    return (
<>
<ItemList Saludo={Saludo}   />
</>
    )
}

export default ItemListContainer