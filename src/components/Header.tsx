import styled from "styled-components";

const Header: React.FC = () => {
    return (
        <header>
            <Title>Game Of Thrones</Title>
        </header>
    );
}

export default Header;

const Title = styled.h1`
    font-family: 'Rye', cursive;
    font-size: 30px;
    text-align: center;
    margin: 25px 0;
`;