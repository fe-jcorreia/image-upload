import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',

    ({ pageParam }) =>
      api.get('http://localhost:3000/api/images', {
        params: { after: pageParam },
      }),

    {
      getNextPageParam: lastPage =>
        lastPage.data.after ? lastPage.data.after : null,
    }
  );

  const formattedData = useMemo(() => {
    return data?.pages.map(page => page.data.data).flat();
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />

          <Box maxW={1120} px={20} mx="auto" my={20}>
            {isError ? <Error /> : <CardList cards={formattedData} />}

            {hasNextPage ? (
              <Button mt="3rem" onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
              </Button>
            ) : (
              ''
            )}
          </Box>
        </>
      )}
    </>
  );
}
