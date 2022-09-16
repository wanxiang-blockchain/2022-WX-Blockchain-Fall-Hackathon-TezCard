import {
  Container,
  MemberInfo,
  Skills,
  BottomBtn,
  LeftAvatar,
  RightInfo,
  Name,
  Tags,
  SkillItem,
} from './style';
import { ReactSVG } from 'react-svg';
import NormalTag from '@components/NormalTag';

const DaoMember = props => {
  const {
    data: { name, avatar, skills = [], tags = [], twitter, github, email },
  } = props;
  const renderSkills = (item, index: number) => {
    const bgColor = index % 2 === 0 ? 'bg-[#55A3FF]' : 'bg-[#13D6E2]';
    return (
      <SkillItem
        key={item}
        className={`h-25 px-12 leading-[25px] rounded-[2px] mb-4 mr-6 text-[14px] text-[#EFF4FB] ${bgColor}`}
      >
        {item}
      </SkillItem>
    );
  };
  return (
    <div>
      <Container key={`member-${name}`} className="w-411 h-290 px-32 mb-20 py-26 pr-0">
        <MemberInfo className="w-full h-96 flex flex-row justify-between">
          <LeftAvatar className="w-80 h-80 bg-[#f60]"></LeftAvatar>
          <RightInfo className="w-250">
            <Name className="h-44 leading-[44px] text-[20px] text-[#101828] font-bold">{name}</Name>
            <Tags>
              {tags.map(i => (
                <NormalTag item={i} />
              ))}
            </Tags>
          </RightInfo>
        </MemberInfo>
        <Skills className="h-50 mt-30 mb-24">
          <div className="h25 leading-[25px] text-[16px] text-[#101828] font-bold">Skills</div>
          {skills.map((item, index) => renderSkills(item, index))}
        </Skills>
        <BottomBtn className="flex">
          <img src="/public/twitter.png" className="block w-20 h-20 mr-10" />
          <img src="/public/email.png" className="block w-20 h-20 mr-10" />
          <img src="/public/weChat.png" className="block w-20 h-20" />
        </BottomBtn>
      </Container>
    </div>
  );
};
export default DaoMember;
