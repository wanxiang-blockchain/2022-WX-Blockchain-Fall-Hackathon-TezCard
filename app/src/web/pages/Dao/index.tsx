import { memo, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { store } from '@store/jotaiStore';
import { useAtom } from 'jotai';
import ContentTabs from './Tabs';

import {
  Container,
  DaoInfo,
  LeftInfo,
  RightInfo,
  DaoLogo,
  EditBtn,
  DaoName,
  DaoDesc,
  BottomBtn,
  DaoTabs,
  ClaimBtn,
  CalimBtnStyle,
  ModalStyle,
  JoinButtonStyle,
} from './style';
import { ReactSVG } from 'react-svg';
import Header from '@components/Header';
import { useImmer } from '@hooks/useImmer';

function Home() {
  const [obj, setObj] = useAtom(store);
  const [currentDao, setCurrentDao] = useImmer({
    data: {
      name: 'string',
      avatar: 'string',
      role: 'string',
      startTime: 'string',
      members: 123,
      desc: 'DAO desc',
    },
  });
  const [open, setOpen] = useImmer(false);
  useEffect(() => {}, []);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderLeftInfo = () => {
    return (
      <LeftInfo className="w-152 h-full flex flex-col justify-between items-center">
        <DaoLogo className="w-152 h-152"></DaoLogo>
        <Button
          onClick={handleOpen}
          className="w-73 h-36"
          variant="contained"
          style={JoinButtonStyle}
        >
          Join
        </Button>
        {/* <EditBtn className="w-50 h-32 text-center text-[14px] leading-[32px]">Edit</EditBtn> */}
      </LeftInfo>
    );
  };

  const renderRightInfo = () => {
    return (
      <RightInfo className="w-full pl-48">
        <DaoName className="h-44 leading-[44px] mt-40 mb-10 text-[32px] text-[#101828]">
          {currentDao.data.name}
        </DaoName>
        <DaoDesc className="h-24 leading-[24px] text-[16px] text-[#667085]">
          {currentDao.data.desc}
        </DaoDesc>
        <BottomBtn className="h-20 mt-70 leading-[20px] flex flex-row">
          <img src="/public/global.png" className="block w-20 h-20 mr-44" />
          <img src="/public/twitter.png" className="block w-20 h-20 mr-44" />
          <img src="/public/discord.png" className="block w-20 h-20" />
        </BottomBtn>
      </RightInfo>
    );
  };

  return (
    <>
      <Header />
      <Container className="w-1280 m-auto mt-80">
        <DaoInfo className="h-207 flex">
          {renderLeftInfo()}
          {renderRightInfo()}
        </DaoInfo>
        <ContentTabs />
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle} className="flex flex-col justify-center items-center">
          <div className="w-500 h-66 leading-[66px] rounded-[20px] border border-[#000] text-[#101828] text-[32px] text-center">
            Claim the SBT
          </div>
          <img className="w-24 h-55" src="/public/arrow.png" />
          <div className="w-500 h-66 leading-[66px] rounded-[20px] border border-[#000] text-[#101828] text-[32px] text-center">
            Build for the DAO
          </div>
          <img className="w-24 h-55" src="/public/arrow.png" />
          <div className="w-500 h-66 mb-40 leading-[66px] rounded-[20px] border border-[#000] text-[#101828] text-[32px] text-center">
            Get proof of donation
          </div>
          <ClaimBtn
            className="w-248 h-60 leading-[60px] text-[24px] text-[#fff] text-center"
            style={CalimBtnStyle}
          >
            Claim
          </ClaimBtn>
        </Box>
      </Modal>
    </>
  );
}
export default memo(Home);
