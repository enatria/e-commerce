import React, { useEffect } from 'react';
import { CardProduct } from '../../molecules';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useFetch from '../../../hook/useFetch'

const ListProducts = ({id}) => {

  const URL  = `https://fakestoreapi.com/products/${id ? id : '' }`

  const {loading, error, data} = useFetch(URL)

    return (
        <Box>
            <Container>
                    {loading ? <div>Loading..</div> 
                        : error ? <div>{error} </div>             
                            : <Grid container spacing={4}>
                                {data?.map((item, key) => (
                                    <Grid item xs={12} xl={4} lg={4} md={6} key={key} >
                                        <CardProduct data={item} />
                                    </Grid>
                                ))}
                        </Grid>
                }
            </Container>
        </Box>
    )
}

export default ListProducts
