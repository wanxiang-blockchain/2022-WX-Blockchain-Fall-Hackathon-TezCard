import { memo } from 'react';
import { TagItem } from './style';
const colorArr = [
  'bg-[#6C55FF]',
  'bg-[#55A3FF]',
  'bg-[#557AFF]',
  'bg-[#55CCFF]',
  'bg-[#4CE4C9]',
  'bg-[#4CDBE4]',
];
const NormalTag = props => {
  const { item, bgcolor = false, index } = props;

  return (
    <TagItem
      className={`h-22 px-12 leading-[22px] border border-[#D0D5DD] rounded-[2px] mb-4 mr-6 text-[14px] text-[#667085] ${
        bgcolor ? colorArr[index] : ''
      } ${bgcolor ? 'text-[#fff]' : ''}`}
    >
      {item}
    </TagItem>
  );
};
export default memo(NormalTag);
