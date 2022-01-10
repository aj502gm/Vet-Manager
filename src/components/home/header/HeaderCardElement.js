import React from 'react'
import "../../../css/headerElements.css";
import {ProductCard} from "react-ui-cards"
function HeaderCardElement() {
    return (
        <ProductCard photos = {['https://i.imgur.com/t7DTziH.jpg','https://i.imgur.com/t7DTziH.jpg', 'https://i.imgur.com/t7DTziH.jpg' ]} price = "Q10" productName = "COLIN" description = "LOREM FDSFSDKAFHSDJAHFJSD" buttonText = "Change"></ProductCard>
    )
}

export default HeaderCardElement
