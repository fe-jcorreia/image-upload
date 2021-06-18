import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        width="auto"
        height="auto"
        maxH="600px"
        maxW="900px"
        bg="pGray.900"
      >
        <ModalBody p="0" display="flex" justify="center" align="center">
          <Image
            src={imgUrl}
            alt="image"
            borderRadius="5px 5px 0 0"
            maxH="480px"
            maxW="900px"
          />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          py="0.5rem"
          px="1rem"
          borderRadius="0 0 5px 5px"
          justifyContent="start"
        >
          <Link
            href={imgUrl}
            isExternal
            _focus={{ outline: 'none', boxShadow: 'none' }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
