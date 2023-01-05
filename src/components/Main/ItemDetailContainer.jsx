import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const valor = useParams();
    console.log(valor);

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const productoEncontrado = products.find(
                    (prod) => prod.id === 1
                );
                setTimeout(() => {
                    res(productoEncontrado);
                }, 500);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
