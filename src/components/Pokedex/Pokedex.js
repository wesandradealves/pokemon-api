import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { 
  Container,
  Card,
  CardInfo,
  CardFooter,
  ListItem,
  HighlightItem,
  CardTitle,
  Thumbnail
} from './style.ts';

function Pokedex(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));

  const getStatus = (arr, key) => {
    let stat = arr.find(item => item.stat.name === key);
    return stat.base_stat
  }    
  
  const getTypeBaseColor = (type) => {
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };     
    return colours[type];
  }  

  return (
    <Container id="pokedex">
      {props.data.data && props.data.data.length && (
        <div className='d-block overflow-hidden'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {
                props.data.data.sort(function (a, b) {
                  return  a.order > b.order ? 1 : -1;
                }).map((data, key) => {
                  return (
                      <Grid item xs={12} md={6} lg={4} key={key}>
                        <Item className="item p-0 overflow-hidden">
                          <Card 
                            className="card p-4 overflow-hidden" 
                            backgroundColor={getTypeBaseColor(data.types[0].type.name)}>
                            <CardTitle className="d-block title">{data.name}</CardTitle> 
              
                            <CardInfo className="info pt-4 pb-4 d-flex flex-wrap align-items-stretch justify-content-between overflow-hidden">
                              <ListItem className="col-6 list d-flex flex-column justify-content-center">
                                {data.types.map((data, key) => {
                                  return (<HighlightItem key={key} backgroundColor={getTypeBaseColor(data.type.name)} className={`d-block`}>{data.type.name}</HighlightItem>);
                                })}
                              </ListItem>
                              <div className="ps-4 col-6">
                                <Thumbnail className="img-fluid" src={data.thumbnails ? data.thumbnails[0] : 'https://www.clipartmax.com/png/small/17-174728_pokeball-clipart-open-pokemon-open-ball-png.png'} />
                              </div>
                            </CardInfo>

                            <CardFooter>
                              <ListItem className="list d-flex align-items-center justify-content-between">
                                <HighlightItem className="d-block flex-fill">HP: {getStatus(data.stats, 'hp')}</HighlightItem>
                                <HighlightItem className="d-block flex-fill">Attack: {getStatus(data.stats, 'attack')}</HighlightItem>
                                <HighlightItem className="d-block flex-fill">Defense: {getStatus(data.stats, 'defense')}</HighlightItem> 
                              </ListItem>
                            </CardFooter>
                          </Card>
                        </Item>
                      </Grid>                      
                  );
                })                
              }
            </Grid>
          </Box>  
          <Stack spacing={2} className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <Pagination 
            count={props.pages.total} 
            showFirstButton showLastButton
            onChange={(e, v) => props.onChange(v)}
            siblingCount={0} 
            boundaryCount={2} 
            defaultPage={props.pages.current} 
            color="primary" />
          </Stack>      
        </div>          
      )}
    </Container>
  );
}

export default Pokedex;