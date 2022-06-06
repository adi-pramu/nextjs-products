import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Image from "next/image";
import { useRouter } from "next/router";
import { useStyles } from "../../../helper/styles";

const { useQuery } = require("@apollo/client");
const { GET_PRODUCT_DETAIL_BY_SKU } = require("../../../helper/schema");

const Product = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL_BY_SKU, {
        variables: { sku: id }
    });

    // if (loading) return <h1>Loading...</h1>;

    if (loading) return (
        <>
            <Box className={classes.backgroundColor}>
                <>
                    <h1><Skeleton variant="text" /></h1>
                    <Skeleton variant="rect" width={250} height={300}/>
                    <Skeleton variant="rect" width="auto" height={400}/>
                    <h3><Skeleton variant="text" /></h3>
                </>
            </Box>
        </>
    )

    if (error) {   
        return `Error! ${error.message}`;
    }

    return (
        <>  
            <Box className={classes.backgroundColor}>
                {data && 
                    data.products.items.map((item)=>(
                        <>
                            <h1>{item.name}</h1>  
                            <Image src={item.image.url} alt="Gambar" width={250} height={300}/>
                            <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
                            <h3>Price : Rp.{item.price_range.maximum_price.final_price.value}</h3>
                        </>
                    ))
                }
            </Box>
        </>
    )
}

export default Product;