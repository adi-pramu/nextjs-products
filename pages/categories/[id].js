
import { useLazyQuery } from "@apollo/client";
import { Box, Button, CircularProgress, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { GET_PRODUCT_BY_CATEGORY } from "../../helper/schema";
import { useStyles } from "../../helper/styles";

const Category = () => {
    const classes = useStyles();
    const router = useRouter();
    const { id } = router.query;

    const [getCategory, { loading, error, data }] = useLazyQuery(GET_PRODUCT_BY_CATEGORY);

    if (loading) return <CircularProgress/>;
    if (error) return `Error! ${error.message}`;
    return (
        <>
            <Box className={classes.backgroundColor}>
                <h1>Products</h1>

                <Button onClick={() => getCategory({ variables: { categoryId: id } })} variant="contained" color="primary">
                    Click Here
                </Button>

                {data &&
                    data.category.products.items.map((item) => (
                        <List component="nav" className={classes.root} aria-label="mailbox folders" key={item.sku}>
                            <Link href={`/categories/details/${item.sku}`}>
                                <ListItem button>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                            <Divider/>
                        </List>
                    ))
                }
            </Box>
        </>
    )
}
export default Category;