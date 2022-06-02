import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Meals.module.css'

export async function getServerSideProps() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const data = await res.json()
  
    return { props: { data } }
}

export default function SSRPage({data}) {

    return (
        <>
            <h1>Seafoods</h1>
            {
                
                data.meals && data.meals.length > 0 ? (
                    <div className={styles.gridContainer}>
                        {
                            data.meals.map(food => (
                                <ul className={styles.gridItem} key={food.idMeal}>
                                    <Link href={{
                                        pathname: `/meals/${food.idMeal}`
                                    }}
                                    as= {`/meals/${food.idMeal}`}>
                                        <li>
                                            <Image src={food.strMealThumb} alt={food.strMeal} width={200} height={200} />
                                            <h4>{food.strMeal}</h4>
                                        </li>
                                    </Link>
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