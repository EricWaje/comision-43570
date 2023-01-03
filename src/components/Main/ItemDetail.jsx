import React from 'react';
import Contador from './Contador';

const ItemDetail = () => {
    return (
        <div className="container-page container-detail">
            <img
                src="https://res.cloudinary.com/ericwaje/image/upload/v1619372705/camisa2_tmojul.jpg"
                alt="detail"
            />

            <article>
                <h2>Nombre del producto</h2>
                <h4>20% OFF</h4>
                <section>
                    <h3>$ 2000.-</h3>
                    <h5>$ 3000.-</h5>
                </section>
                <span className="info-span">
                    Todos los precios están expresados en Pesos
                </span>
                <hr />
                <h3 className="cuotas">
                    Hasta <strong>12</strong> cuotas sin interes de
                    <strong> $166</strong>
                </h3>
                <button className="metodos-pagos">
                    Conocé todos los métodos de pagos
                </button>
                <hr />
                <Contador stock={10} />
            </article>
        </div>
    );
};

export default ItemDetail;
