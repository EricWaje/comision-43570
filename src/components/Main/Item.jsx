import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    const discount =
        producto.price - (producto.price * producto.descuento) / 100;
    return (
        <div className="item">
            <img src={producto.img} width="200px" alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <h4 className="descuento">{producto.descuento}% off</h4>
                <div className="info-price">
                    <h3>${discount}.-</h3>
                    <h5>${producto.price}.-</h5>
                </div>
                <Link className="ver-detalle" to={`/detail/${producto.id}`}>
                    Ver detalle
                </Link>
            </article>
        </div>
    );
};

export default Item;
