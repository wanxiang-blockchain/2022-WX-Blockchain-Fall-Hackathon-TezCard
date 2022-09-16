import { memo, useEffect, useRef } from 'react';
import { Container, MainCard, Dao, Sbt } from './style';
import { ReactSVG } from 'react-svg';
import { LeftAvatar, MiddleInfo, RightInfo, ProfileLogo, EditBtn } from './style';
import NormalTag from '@components/NormalTag';
import ProfileDialog from '@components/ProfileDialog';
import { getSmallAddress } from '@utils/returnSmallAddress';
import { useImmer } from '@hooks/useImmer';
import { store } from '@store/jotaiStore';
import { useAtom } from 'jotai';
import DaosTab from './DaosTab';
import SbtsTab from './SbtsTab';
import { getAccordionDetailsUtilityClass } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Header from '@components/Header';

export type ProfileData = {
  data: {
    name: string;
    avatar: string;
    info: string;
    roles: string[];
    skills: string[];
    interests: string[];
  };
};
export type DaoItemType = {
  name: string;
  avatar: string;
  role: string;
  startTime: string;
  members: number;
};
export type DaoType = {
  dao: DaoItemType[];
};
export interface State extends SnackbarOrigin {
  clipboard: boolean;
}
export type ProfileDialogType = {
  handleClickOpen: (param: string) => () => void;
} & HTMLElement;

function Profile() {
  const profileRef = useRef<ProfileDialogType>(null);
  const [profileData, setProfileData] = useImmer<ProfileData>({
    data: {
      name: '',
      avatar: '',
      info: '',
      roles: [],
      skills: [],
      interests: [],
    },
  });
  const [dao, setDao] = useImmer<DaoType>({
    dao: [
      {
        name: 'string',
        avatar: 'string',
        role: 'string',
        startTime: 'string',
        members: 123,
        desc: 'DAO desc',
      },
    ],
  });
  const [obj, setObj] = useAtom(store);
  const [state, setState] = useImmer<State>({
    clipboard: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, clipboard } = state;

  const handleClipboardClick = () => {
    setState(draft => {
      draft.clipboard = true;
    });
  };

  const handleCloseClipboard = () => {
    setState(draft => {
      draft.clipboard = false;
    });
  };
  const getProfileData = () => {
    // mock data
    const data = {
      name: 'cutefcc',
      avatar: 'xxx',
      info: ' I am a UI designer with 7 years of work experience, I hope to learn more knowledge in WEB3.',
      roles: ['Builder', 'Core', 'Inversor', 'Project Manager'],
      skills: ['UI Design', 'PM', 'Frontend', 'Backend', 'Marketing'],
      interests: ['UI Design', 'UI Design', 'UI Design', 'PM', 'Frontend', 'Skills4'],
    };
    setProfileData(draft => {
      draft.data = data;
    });
    // todo: get profile data from api(call contract) and set to profileData
  };
  const getDaoData = () => {
    // mock data
    const data = [
      {
        name: 'DAO1',
        avatar: '',
        role: 'DAO Manager',
        startTime: '2022.07.01',
        members: 130,
        desc: 'DAO1 desc',
      },
      {
        name: 'DAO2',
        avatar: '',
        role: 'DAO Manager',
        startTime: '2022.07.01',
        members: 630,
        desc: 'DAO2 desc',
      },
      {
        name: 'DAO3',
        avatar: '',
        role: 'DAO Manager',
        startTime: '2022.07.01',
        members: 2360,
        desc: 'DAO3 desc',
      },
      {
        name: 'DAO4',
        avatar: '',
        role: 'DAO Manager',
        startTime: '2022.07.01',
        members: 20,
        desc: 'DAO4 desc',
      },
      {
        name: 'DAO5',
        avatar: '',
        role: 'DAO Manager',
        startTime: '2022.07.01',
        members: 30,
        desc: 'DAO5 desc',
      },
    ];
    setDao(draft => {
      draft.dao = data;
    });
    /* 
      // todo: get dao data from api(call contract) and set 
    */
  };
  useEffect(() => {
    profileRef?.current?.handleClickOpen('paper')();
    // get profile data
    getProfileData();
    // get dao data
    getDaoData();
  }, []);
  const handleEditClick = () => {
    console.log(profileRef?.current);
    profileRef?.current?.handleClickOpen('paper')();
  };

  return (
    <>
      <Header />
      <Container className="w-1280 m-auto mt-80">
        <MainCard className="h-282 flex">
          <LeftAvatar className="w-152 h-202 flex flex-col justify-between items-center">
            <ProfileLogo className="w-152 h-152 mb-20"></ProfileLogo>
            <EditBtn
              className="w-50 h-32 text-center text-[14px] leading-[32px]"
              onClick={handleEditClick}
            >
              Edit
            </EditBtn>
          </LeftAvatar>
          <MiddleInfo className="ml-38">
            <div className="h-44 mt-30 text-[32px] text-[#101828]">{profileData.data.name}</div>
            <div className="w-516 mt-5 mb-30 leading-[24px] text-[16px] text-[#667085]">
              {profileData.data.info}
            </div>
            <div className="flex w-452">
              <div className="w-226 mr-30 flex flex-col h-103">
                <div className="w-226 h-24 mb-16 text-[16px] leading-[24px] text-[#101828] font-bold">
                  Role
                </div>
                <div className="w-226">
                  {profileData.data.roles.map((item, index) => (
                    <NormalTag item={item} key={item} />
                  ))}
                </div>
              </div>
              <div className="w-246 flex flex-col h-103">
                <div className="w-246 h-24 mb-16 text-[16px] leading-[24px] text-[#101828] font-bold">
                  Skills
                </div>
                <div className="w-246">
                  {profileData.data.skills.map((item, index) => (
                    <NormalTag item={item} key={item + index} bgcolor={true} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </MiddleInfo>
          <RightInfo className="grow">
            <div className=" h-25 leading-[25px] mt-50 flex justify-end">
              <img src="/public/global.png" className="block w-20 h-20 mr-44" />
              <img src="/public/twitter.png" className="block w-20 h-20 mr-44" />
              <img src="/public/discord.png" className="block w-20 h-20 mr-44" />
              <img src="/public/more.png" className="block w-20 h-20 mr-44" />
              <img src="/public/rectangle.png" className="block w-1 h-20 mr-44" />

              <div className="w-160 h-20 leading-[20px] flex">
                <span className="w-129 mr-10">
                  {getSmallAddress(obj?.address as string)
                    ? getSmallAddress(obj?.address as string)
                    : 'xxxxxx...xxxxxx'}
                </span>
                <img
                  src="/public/vector.png"
                  className="block w-17 h-17 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(obj?.address as string).then(
                      () => {
                        handleClipboardClick();
                        setTimeout(() => {
                          handleCloseClipboard();
                        }, 3000);
                      },
                      () => {
                        /* clipboard write failed */
                      }
                    );
                  }}
                />
              </div>
            </div>
            <div className="w-246 flex flex-col mt-80 ml-170">
              <div className="w-246 h-24 mb-16 text-[16px] leading-[24px] text-[#101828] font-bold">
                Interests
              </div>
              <div className="w-246">
                {profileData.data.interests.map((item, index) => (
                  <NormalTag item={item} key={index} />
                ))}
              </div>
            </div>
          </RightInfo>
        </MainCard>
        <Dao className="mt-18">
          <DaosTab dao={dao.dao} />
        </Dao>
        <Sbt>
          <SbtsTab />
        </Sbt>
        <ProfileDialog ref={profileRef} />
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={clipboard}
          onClose={handleCloseClipboard}
          message="Copied"
          key={vertical + horizontal}
        />
      </Container>
    </>
  );
}
export default memo(Profile);
