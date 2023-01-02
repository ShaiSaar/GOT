import { useContext } from 'react';
import styled from 'styled-components';

import { CharactersContext } from './state/store';
import useFetch from './hooks/useFetch';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { GET_GOT_CHARACTERS } from './api';
import { deviceSize } from './media-query-sizes';
const loadingGIF = require('./assets/thrones-loading.gif');
const errorGIF = require('./assets/thrones-error.gif');

const App: React.FC = () => {

  const { characters, hasNextPage, getNextPage, getAllCharactersSuccess } = useContext(CharactersContext);
  const {isLoading, error} = useFetch(GET_GOT_CHARACTERS, getAllCharactersSuccess);
  
  if(isLoading) return <ImgContainer><img src={loadingGIF} alt={'Loading...'} />{'Loading...'}</ImgContainer>
  if(error) return <ImgContainer><img src={errorGIF} alt={'Error'} />{'Error has occurred'}</ImgContainer>

  return (
    <>
      <Header />
      <Cards characters={characters}/>
      <Footer disabled={!hasNextPage || !!error || isLoading} getNextPage={getNextPage}/>
    </>
  );
}

export default App;

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 23px;

    @media screen and (max-width: ${deviceSize.tablet}) {
    & > img {
      width:100%
    }
  }
`;