import Image from "next/image";
import styles from "../styles/Meals.module.css"

export default function FoodComponent({meals}) {
    return (
        <>
            <div className={styles.details}>
                <h1>Detail Food Dynamic</h1>
                <br/>
                <h2>{meals[0].strMeal}</h2>
                <Image src={meals[0].strMealThumb} alt={meals.strMeal} width={400} height={400} />
                <h4>Instructions</h4>
                <p>{meals[0].strInstructions}</p>
            </div>
        </>
    );
}