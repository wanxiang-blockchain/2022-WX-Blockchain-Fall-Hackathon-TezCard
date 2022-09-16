import { memo, useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DaoMember from '@components/DaoMember';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useImmer } from '@hooks/useImmer';
import Search from '../Search';
import { DaoTabs } from './style';
import SbtCard from '@components/SbtCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const FactorLine = props => {
  const { index } = props;
  const factorConfig = ['Discord', 'Github', 'Twitter'];
  const weightConfig = [0.2, 0.4, 0.6, 0.8, 1];
  return (
    <div className="w-full h-54 flex mb-20">
      <Box className="w-632 mr-20" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{`Factor ${index + 1}`}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={formData.skill2}
            label={`Factor ${index + 1}`}
            // onChange={handleSkills2Change}
          >
            {factorConfig.map(item => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className="w-632" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Skills 1</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={formData.skill2}
            label="Weight"
            // onChange={handleSkills2Change}
          >
            {weightConfig.map(item => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
const ContentTabs = () => {
  const [value, setValue] = useImmer(0);
  const [member, setMember] = useImmer({
    data: [],
  });
  const [factorData, setFactorData] = useImmer({
    data: [],
  });

  const getDaoData = async () => {
    // mock data
    const data = [
      {
        name: 'Wang Teng',
        avatar: '',
        skills: ['UI Design', 'PM', 'Frontend'],
        tags: ['Builder', 'Core', 'Inversor'],
        twitter: '',
        github: '',
        email: '',
      },
      {
        name: 'Cutefcc',
        avatar: '',
        skills: ['UI Design', 'PM', 'Frontend'],
        tags: ['Builder', 'Core', 'Inversor', 'Project Manager'],
        twitter: '',
        github: '',
        email: '',
      },
      {
        name: 'George',
        avatar: '',
        skills: ['UI Design', 'PM', 'Backend'],
        tags: ['Builder', 'Core', 'Inversor', 'Project Manager'],
        twitter: '',
        github: '',
        email: '',
      },
      {
        name: 'xxx',
        avatar: '',
        skills: ['UI Design', 'PM'],
        tags: ['Builder', 'Core', 'Inversor', 'Project Manager'],
        twitter: '',
        github: '',
        email: '',
      },
    ];
    setMember(draft => {
      draft.data = data;
    });
    // todo： get daoMember data from api(call contract)
  };
  const getContributeData = () => {
    // data factor data
    const factorData = [{}, {}, {}];
    setFactorData(draft => {
      draft.data = factorData;
    });
  };
  useEffect(() => {
    getDaoData();
    getContributeData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <DaoTabs className="mt-100">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', texttransform: 'none' }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab label="Members" {...a11yProps(0)} />
            <Tab label="Contribution" {...a11yProps(1)} />
            <Tab label="Vote" {...a11yProps(2)} />
            <Tab label="Fund" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Search />
          <div className="w-full flex flex-wrap justify-between">
            {member.data.map((item, index) => (
              <DaoMember key={item.name} data={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="h-32 leading-[32px] flex">
            <div className="w-32 h-32 mr-10 leading-[32px] text-[#101828] text-[16px]">No.1</div>
            <div className="w-50 h-32 leading-[32px] text-[#101828] text-[14px] border border-[#D0D5DD] rounded-[4px] text-center cursor-pointer">
              Edit
            </div>
          </div>
          <div className="h-44 leading-[44px] text-[20px] font-bold">Score</div>
          {factorData.data.map((item, index) => (
            <FactorLine item={item} index={index} />
          ))}
          <div className="h-44 leading-[44px] text-[20px] font-bold">SBT</div>
          <div className="mt-44">
            <SbtCard />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Vote
        </TabPanel>
        <TabPanel value={value} index={3}>
          Fund
        </TabPanel>
      </Box>
    </DaoTabs>
  );
};
export default memo(ContentTabs);
