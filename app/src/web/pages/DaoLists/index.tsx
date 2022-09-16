import DaoListsCard from '@components/DaoListCard';
import Header from '@components/Header';
import { useImmer } from '@hooks/useImmer';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { Container, Search, DaoListsContainer, PaginationContainer } from './style';

const DaoLists = () => {
  const [list, setList] = useImmer({
    // mock data  TODO: get data from api
    data: [
      {
        name: 'dao1',
        avatar: '',
        tags: ['NFT', 'DeFi'],
        desc: 'https://Marry3.love is a dapp help you create Paired Soulbound Marriage Certificate Token, non-sell, non-transfer, forever on chain~~~',
      },
      {
        name: 'dao2',
        avatar: '',
        tags: ['GameFi', 'DEX'],
        desc: 'MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles. This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,This is a long description,',
      },
      {
        name: 'dao3',
        avatar: '',
        tags: ['CEX', 'Social'],
        desc: 'MyFirstNFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.',
      },
      {
        name: 'dao4',
        avatar: '',
        tags: ['Social', 'NFT'],
        desc: 'https://Marry3.love is a dapp help you create Paired Soulbound Marriage Certificate Token, non-sell, non-transfer, forever on chain~~~',
      },
      {
        name: 'dao5',
        avatar: '',
        tags: ['GameFi', 'DeFi'],
        desc: 'https://Marry3.love is a dapp help you create Paired Soulbound Marriage Certificate Token, non-sell, non-transfer, forever on chain~~~',
      },
      {
        name: 'dao6',
        avatar: '',
        tags: ['DeFi', 'NFT'],
        desc: 'https://Marry3.love is a dapp help you create Paired Soulbound Marriage Certificate Token, non-sell, non-transfer, forever on chain~~~',
      },
    ],
  });
  return (
    <>
      <Header />
      <Container className="w-1274 m-auto">
        <Search className="mt-70 w-685 h-54 mb-70 m-auto">
          <TextField
            className="w-full"
            // required
            id="outlined-required"
            label="Search"
            // defaultValue="Hello World"
            placeholder="Search"
          />
        </Search>
        <DaoListsContainer className="flex flex-wrap justify-between">
          {list.data.map((item, index) => (
            <DaoListsCard key={item.name} index={index} item={item} />
          ))}
        </DaoListsContainer>
        <PaginationContainer className="w-full flex justify-end">
          <Pagination className="w-345 mb-20" count={10} variant="outlined" color="primary" />
        </PaginationContainer>
      </Container>
    </>
  );
};

export default DaoLists;
