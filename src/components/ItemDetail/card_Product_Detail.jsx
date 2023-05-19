import { useState } from "react"
import {Quantity_Button} from "./quantity_Button"
import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from "firebase/firestore"


export const Item_Detail = ({products}) => {

    const {Id, Category, Name, Size, Price, Brand, Stock, Picture } = products
        
    const [principalPicture, setPrincipalPicture] = useState(Picture[0])

    const { addToCart } = useContext(CartContext);
    
    const onAdd = (quantity) => {
        addToCart( {...products, quantity} )
    }

    return(
        <div className="border-4 border-black shadow-2xl shadow-black h-full w-2/3 bg-emerald-200 mt-10 mb-10 ml-20 mr-20">

            <div className="flex">
                <img className="w-[410px] p-1 justify-col" src={principalPicture}></img>
                <ul className="justify-bewteen items-center">
                    <li><h1 className="text-5xl font-sans underline">{Name}</h1></li>
                    <li><h1 className="text-4xl mt-6 mb-4">Precio: ${Price}</h1></li>
                    <Quantity_Button stock={Stock} onAdd={onAdd}/>
                    <li><h2 className="text-2xl mt-4">Marca: {Brand}</h2></li>
                    <li><h2 className="text-2xl mt-4">Categoria: {Category}</h2></li>
                </ul>
            </div>
            <div className="flex items-center justify-col w-[75px] p-1">
                <img onClick={() => setPrincipalPicture(Picture[0])} src={Picture[0]} className="hover:border-4 border-black"></img>
                <img onClick={() => setPrincipalPicture(Picture[1])} src={Picture[1]} className="hover:border-4 border-black"></img>
                <img onClick={() => setPrincipalPicture(Picture[2])} src={Picture[2]} className="hover:border-4 border-black"></img>
                <img onClick={() => setPrincipalPicture(Picture[3])} src={Picture[3]} className="hover:border-4 border-black"></img>
                <img onClick={() => setPrincipalPicture(Picture[4])} src={Picture[4]} className="hover:border-4 border-black"></img>
                <img onClick={() => setPrincipalPicture(Picture[5])} src={Picture[5]} className="hover:border-4 border-black"></img>
            </div>
        </div>
    )
}