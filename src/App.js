import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
//import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer saludo="Bienvenidos al mejor sitio para comprar 😎" />
            {/* <ItemDetailContainer /> */}
            <Footer />
        </>
    );
};

export default App;
