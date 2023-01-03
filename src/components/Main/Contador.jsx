import { useState } from 'react';

const Contador = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <button onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button disabled={cantidad === stock} onClick={sumar}>
                +
            </button>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default Contador;
