import Image from "next/image";
import React from "react";
import styles from '../styles/Meals.module.css'

export default function CSRPage() {
    const [foods, setFoods] = React.useState([]);

    const fetchData = async() => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        const result = await data.json();
        setFoods(result.meals);
    }

    React.useEffect(()=>{
        fetchData();
    })

    return (
        <>
            <h1>Seafoods</h1>

            {
                foods && foods.length > 0 ? (
                    <div className={styles.gridContainer}>
                        {
                            foods.map(food => (
                                <ul className={styles.gridItem} key={food.idMeal}>
                                    <Image src={food.strMealThumb} alt={food.strMeal} width={200} height={200} />
                                    <h4>{food.strMeal}</h4>
                                </ul>
                            ))
                        }
                    </div>
                ) : (
                    <h1>LOADING...</h1>
                )
            }
        </>
    )
}