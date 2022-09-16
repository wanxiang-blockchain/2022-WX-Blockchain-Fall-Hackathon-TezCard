import { memo, useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { saveButtonStyle } from './style';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { SelectChangeEvent } from '@mui/material/Select';
import { Skills, Levels, Interests } from '@constants/index';
import { ProfileInfoType } from '@type/index';
import Chip from '@mui/material/Chip';
import { useImmer } from '@hooks/useImmer';
import IpfsUpload from '@components/IpfsUpload';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name: string, interest: readonly string[], theme: Theme) {
  return {
    fontWeight:
      interest.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const ProfileDialog = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const [formData, setFormData] = useImmer<ProfileInfoType>({ interest: [] });
  const [avatar, setAvatar] = useImmer({
    data: '',
  });
  const theme = useTheme();
  const uploadRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setFormData(draft => {
      draft.interest = typeof value === 'string' ? value.split(',') : value;
    });
  };

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }));

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.name = event.target.value;
    });
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.desc = event.target.value;
    });
  };
  const handleSkills1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.skill1 = event.target.value;
    });
  };
  const handleSkills2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.skill2 = event.target.value;
    });
  };
  const handleSkills3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.skill3 = event.target.value;
    });
  };
  const handleLevel1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.level1 = event.target.value;
    });
  };
  const handleLevel2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.level2 = event.target.value;
    });
  };
  const handleLevel3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.level3 = event.target.value;
    });
  };
  const handleTwitterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.twitter = event.target.value;
    });
  };
  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.website = event.target.value;
    });
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.email = event.target.value;
    });
  };
  const handleGithubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((draft: ProfileInfoType) => {
      draft.github = event.target.value;
    });
  };
  const handleSave = () => {
    console.log('formData', formData);
    // todo: save profile data (call contract) and close dialog and update profile
  };
  const handleUploadSuccess = res => {
    const { path } = res;
    const url = `https://ipfs.io/ipfs/${path}`;
    setAvatar(draft => {
      draft.data = url;
    });
  };
  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="customized-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <BootstrapDialogTitle
          className="h-64"
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="overflow-x-hidden"
          >
            <div className="w-600 h-44 leading-[44px] text-bold text-[32px] text-[#101828]">
              Profile details
            </div>
            <div className="w-600 h-44 mt-40 mb-25 leading-[44px] text-bold text-[20px] text-[#101828]">
              Basic Information
            </div>
            <div className="w-152 h-152 mb-50 rounded-[76px] bg-[#847] relative">
              {avatar.data && (
                <img src={avatar.data} className="w-152 h-152 absolute top-0 left-0" />
              )}
              <IpfsUpload ref={uploadRef} onUploadSuccess={handleUploadSuccess} />
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleNameChange}
                value={formData.name}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleDescChange}
                value={formData.desc}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="w-600 h-44 mt-40 mb-25 leading-[44px] text-bold text-[20px] text-[#101828]">
              Skills
            </div>
            <div className="flex justify-between mb-20">
              <Box className="w-360" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Skills 1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.skill1}
                    label="Skills 1"
                    onChange={handleSkills1Change}
                  >
                    {Skills.map(skill => (
                      <MenuItem value={skill}>{skill}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box className="w-180" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.level1}
                    label="Level"
                    onChange={handleLevel1Change}
                  >
                    {Levels.map(level => (
                      <MenuItem value={level}>{level}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex justify-between mb-20">
              <Box className="w-360" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Skills 1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.skill2}
                    label="Skills 2"
                    onChange={handleSkills2Change}
                  >
                    {Skills.map(skill => (
                      <MenuItem value={skill}>{skill}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box className="w-180" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.level2}
                    label="Level"
                    onChange={handleLevel2Change}
                  >
                    {Levels.map(level => (
                      <MenuItem value={level}>{level}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="flex justify-between mb-20">
              <Box className="w-360" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Skills 1</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.skill3}
                    label="Skills 3"
                    onChange={handleSkills3Change}
                  >
                    {Skills.map(skill => (
                      <MenuItem value={skill}>{skill}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box className="w-180" sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formData.level3}
                    label="Level"
                    onChange={handleLevel3Change}
                  >
                    {Levels.map(level => (
                      <MenuItem value={level}>{level}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="w-600 h-44 mt-40 mb-25 leading-[44px] text-bold text-[20px] text-[#101828]">
              Interests
            </div>
            <div>
              <FormControl className="w-full">
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={formData.interest}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map(value => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {Interests.map(item => (
                    <MenuItem
                      key={item}
                      value={item}
                      style={getStyles(item, formData.interest, theme)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-600 h-44 mt-40 mb-25 leading-[44px] text-bold text-[20px] text-[#101828]">
              Contacts
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleTwitterChange}
                value={formData.twitter}
                id="outlined-basic"
                label="Twitter"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleWebsiteChange}
                value={formData.website}
                id="outlined-basic"
                label="website"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleEmailChange}
                value={formData.email}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="w-full mb-20">
              <TextField
                onChange={handleGithubChange}
                value={formData.github}
                id="outlined-basic"
                label="Github URl"
                variant="outlined"
                className="w-full"
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button
            onClick={handleSave}
            className="w-78 h-48 rounded-[8px text-[#fff]"
            variant="contained"
            style={saveButtonStyle}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default memo(ProfileDialog);
