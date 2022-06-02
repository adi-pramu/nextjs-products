import Button from "@/components/button";
import dynamic from "next/dynamic"
import Head from "next/head";
import styles from "../../styles/Meals.module.css"

const FoodComponent = dynamic(
    () => import('@/components/details'),
    { loading: ()=> <h1>SABAR</h1>, ssr: true }    
)

export default function Foods({meals}) {
    return (
        <div className={styles.detailPage}>
            <Head>
                <title>Detail Food</title>
                <meta name="description" content="Detail of selected food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <FoodComponent meals={meals} />
            <Button/>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ctx.params.id}`)
    const data = await res.json()

    return {
        props: { meals: data.meals }
    }
}