
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

import { deviceSize } from '../media-query-sizes';
import { Character } from '../types/character';


export interface Props {
  characters: Character[];
  theme?: any;
}

const Cards: React.FC<Props> = ({characters = []}: Props) => {

  return (
    <Section>
      {characters.map((character: Character, index: number) => {
        const title =  `
                  <p>${character.fullName}, ${character.title}.</p>
                  <br />
                  <p>House: ${character.family}</p>
                `
        return (
          <Card key={character.id} data-testid={`character-${index}`}>
            <Image src={character.imageUrl} />
            <Details>
              <Name>{character.fullName}</Name>
              <Info id={character.id.toString()} />
              <ReactTooltip
                html={title}
                anchorId={character.id.toString()}
                place="top"
              />
            </Details>
          </Card>
        ) 
      })}
    </Section>
  );
}

export default Cards;



const ReactTooltip = styled(Tooltip)`
  display: none;
`;

const Info = styled(AiOutlineInfoCircle)`
  font-size: 20px;
  margin-left: 5px;

  &:hover + ${ReactTooltip}{
    display: initial;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 25px;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.tablet}) {
    & {
      grid-template-columns: auto;
      padding-bottom: 96px;
      overflow-x: hidden;
    }
  }
`

const Card = styled.div`
  border: 15px ridge ${props => props.theme.text_colors.T03};
  width: 255px;;
`;

interface ImgProps {
  src: string;
}
const Image = styled.div`
  width: 225px;
  height: 225px;
  background-image: ${(props: ImgProps) => `url(`+props.src+`)` };
  background-color: #cccccc; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
`;

const Name = styled.p`
  text-align: center;
  padding: 15px 10px;
  font-size: 20px;
  font-family: 'Skranji', cursive;
  font-weight: 100;
  max-width: 180px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
`;