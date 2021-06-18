import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleViewImage(url: string) {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid gap="40px" columns={3}>
        {cards?.map(card => {
          return <Card key={card.id} data={card} viewImage={handleViewImage} />;
        })}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImageUrl}
      />
    </>
  );
}
