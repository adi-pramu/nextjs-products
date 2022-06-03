import { useQuery } from "@apollo/client";
import { Box, CircularProgress, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { GET_CATEGORIES } from "../../helper/schema";
import { useStyles } from "../../helper/styles";

const Categories = () => {
    const classes = useStyles();
    const title = "Category";

    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <CircularProgress/>;
    if (error) {   
        return `Error! ${error.message}`;
    }

    return (
        <>
            <Box className={classes.backgroundColor}>
                <h1>{title}</h1>

                <div>
                    {data.categories.items.map((val, idx) => (
                        <List component="nav" className={classes.root} aria-label="mailbox folders" key={idx}>
                            <Link href={{
                                pathname: `categories/${val.id}`
                            }}
                            
                            as={`categories/${val.id}`}
                            >
                                <ListItem button>
                                    <ListItemText primary={val.name} />
                                </ListItem>          
                            </Link>
                            <Divider/>
                        </List>

                    ))}
                </div>
            </Box>
        </>
    )
}

export default Categories;