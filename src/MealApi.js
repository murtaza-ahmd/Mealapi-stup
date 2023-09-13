import { useEffect, useState } from "react";
import axios from "axios";
import "./MealApi.css";

function Mealapi() {
    const [Items, setItems] = useState([]);
    useEffect(() => {
        axios.get("https:/WWW.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res =>{
            setItems(res.data.meals)
            // console.log(res)
        }).catch((err)=>{
            console.log(err);
        })
    }, []);
    
    const itemsList = Items.map(({strMeal,strMealThumb,idMeal})=>{
        return(
            <section class="card">
                <img src={strMealThumb} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })

    return <div className="items-container">{itemsList}</div>


}

export default Mealapi;
