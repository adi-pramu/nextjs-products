import Image from "next/image";
import styles from '../styles/Meals.module.css'

export default function SSGPage ({meals}) {
    return (
        <>
            <h1>Seafood</h1>
            <div className={styles.gridContainer}>
            
                {meals.map((meal)=>(
                    <ul className={styles.gridItem} key={meal.idMeal}>
                        <Image src={meal.strMealThumb} alt={meal.strMeal} width={200} height={200} />
                        <h4>{meal.strMeal}</h4>
                    </ul>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()

    return {
        props: { 
            meals: data.meals
        },
        revalidate: 5
    };
}