
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './components/Login'
import { Register } from './components/Register';


import { SideBar } from './components/SideBar';


function App() {
    return (
        <div >
            <div id="container">
                <Header />
                <div id="content">
                    <SideBar />
                    <BookList />

                    <Login />
                    <Register />

                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
