import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={'/'}>Recipe Book</Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
    /* padding: 4rem 0rem; */
    padding: 4rem 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* div {
        display: flex;
        flex-flow: nowrap;
        margin-right: 1rem;
    } */
    svg {
        font-size: 2rem;
    }
`;

export default App;
