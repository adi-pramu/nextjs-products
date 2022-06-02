import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Meals.module.css"

export default function Foods({meals}) {
    console.log(meals);
    return (
        <div className={styles.detailPage}>
            <Head>
                <title>Detail Food</title>
                <meta name="description" content="Detail of selected food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.details}>
                <h1>Detail Food</h1>
                <br/>
                <h2>{meals[0].strMeal}</h2>
                <Image src={meals[0].strMealThumb} alt={meals.strMeal} width={400} height={400} />
                <p>{meals[0].strInstructions}</p>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const data = await res.json();
    const paths = data.meals.map((item) => {
        return {
            params: {id: item.idMeal.toString()}
        };
    });
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(ctx) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ctx.params.id}`)
    const data = await res.json()

    return {
        props: { meals: data.meals }
    }
}