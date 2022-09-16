import { memo, useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DaoCard from '@components/DaoCard';
import { styled } from '@mui/material/styles';
import { DaoTabs, AddDao } from './style';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const DaosTab = props => {
  const { dao = [] } = props;
  const [value, setValue] = useState(0);

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
    <DaoTabs>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', texttransform: 'none' }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab label="Dao 2" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="mt-35 flex">
            <AddDao className="w-158 h-158 mr-30 rounded-[14px] bg-[#fff] flex justify-center items-center">
              <img width="48" height="39" src="/public/addDao.png" alt="addDao" />
            </AddDao>
            <div className="w-full flex justify-between flex-wrap">
              {dao.map((item, index) => (
                <DaoCard key={index} data={item} />
              ))}
            </div>
          </div>
        </TabPanel>
      </Box>
    </DaoTabs>
  );
};
export default memo(DaosTab);
