import { MenuRouteConfig } from '@constants/MenuRouteConfig';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';
import {
  Card,
  TopArea,
  BottomArea,
  Avatar,
  DaoName,
  DaoTagContainer,
  DaoTagItem,
  DaoDesc,
} from './style';

const topAreaBgColorStyleConfig = [
  { background: '-webkit-linear-gradient(left, #FDF5F5, #FDE6EC)' },
  { background: '-webkit-linear-gradient(left, #4AE5DE, #637DF3)' },
  { background: '-webkit-linear-gradient(left, #BDF3CD, #BDF3CD)' },
];
const avatarStyle = {
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};
const DaoTag = props => {
  const { tag } = props;
  return (
    <DaoTagItem className="h-20 pl-8 pr-8 mr-8 text-[12px] text-[#101828] border rounded-[4px] border-[#101828]">
      {tag}
    </DaoTagItem>
  );
};
const DaoListsCard = props => {
  const { item, index } = props;
  const navigate = useNavigate();

  const topAreaBgColorStyle = topAreaBgColorStyleConfig[index % 3];
  const handleGoDaoDetail = () => {
    navigate(MenuRouteConfig?.dao?.route);
  };
  return (
    <Card
      className="w-404 h-450 mb-30 bg-[#fff] rounded-[14px] relative cursor-pointer"
      onClick={handleGoDaoDetail}
    >
      <TopArea
        className="h-136 rounded-tl-[14px] rounded-tr-[14px]"
        style={topAreaBgColorStyle}
      ></TopArea>
      <BottomArea className="h-254 rounded-bl-[14px] rounded-br-[14px]">
        <DaoName className="w-350 h-24 leading-[24px] text-[18px] text-[#101828] text-center m-auto mt-60">
          Dao 1
        </DaoName>
        <DaoTagContainer className="flex justify-center w-full h-20 mt-20 leading-[20px]">
          {item.tags.map((i, index) => {
            return <DaoTag tag={i} key={i} />;
          })}
        </DaoTagContainer>
        <DaoDesc className="w-350 max-h-[150px] text-[16px] text-[#666F85] leading-[33px] mt-18 m-auto overflow-auto">
          {item.desc}
        </DaoDesc>
      </BottomArea>
      <Avatar
        className="w-86 h-86 bg-[#f80] rounded-[43px] absolute top-95 left-159"
        style={avatarStyle}
      ></Avatar>
    </Card>
  );
};
export default DaoListsCard;
