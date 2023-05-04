import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/';
import Pokedex from '../../components/Pokedex/';
import Filter from '../../components/Filter/';

import { 
    Section,
    Title,
    Subtitle,
    Container
} from './style.ts';

function Home(props) {
    const [data, setData] = useState(null);
    const [sortBy, setsortBy] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [pages, setPage] = useState({
        current: 1,
        total: null
    });

    const fetchData = async (page) => {
        setLoading(true);

        let url = `https://pokeapi.co/api/v2/pokemon/?offset=${page > 1 ? page * 10 : 0}&limit=10`;

        const response = await fetch(url);
        const _response = await response.json();

        if(_response.results) {
            (async () => {
                    const promises = _response.results.map(async (item) => {
                        const Response = await fetch(item.url);
                        const _Response = await Response.json();   

                        const search = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBfcE-uAJShsP-nw7_0ldiGtjuSyvUerNg&cx=52729c06ac02b43c2&q=${item.name + ' pokemon'}&searchType=image`);
                        const _search = await search.json();    
                        
                        return {
                            ...item, 
                            ..._Response, 
                            thumbnails: _search.items.map((item) => {
                                return item.link
                            })
                        }
                    });
    
                    const info = await Promise.all(promises);

                    setData({
                        ..._response,
                        data: info
                    })

                    setLoading(false);

                    window.scrollTo(0,0);                   
            })(); 
        }
    }    

    const handlePaginate = (page) => {
        setPage({
            ...pages,
            current: page
        })
        fetchData(page)
    }    

    useEffect(() => {
        document.title = `Pokedéx - Página Inicial`;
        fetchData(pages.current); 
    }, []); 
    
    useEffect(() => {
        if(data&&!pages.total) {
            setPage({
                ...pages,
                total: Math.round(data.count/10)
            })
        }
    }, [data, pages]);     

    return (
        <Section id="dashboard" className="overflow-hidden" data-loading={isLoading}>
                {data && (
                    <Container className="container pt-5 pb-5">
                        <Title className='mb-4 d-flex justify-content-between align-items-center'>
                            <span>
                                Pokedéx <Subtitle>Page {pages.current}/{pages.total}</Subtitle>
                            </span>
                            <Filter data={data} onFilter={setsortBy} />
                        </Title>
                        <Pokedex sortBy={sortBy} onChange={handlePaginate} pages={pages} data={data} />
                    </Container>
                )}
                {isLoading && (<Spinner />)}
        </Section>
    );  
}

export default Home;