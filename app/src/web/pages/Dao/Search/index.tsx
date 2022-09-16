import { memo, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from './style';

const Search = () => {
  return (
    <Container className="mt-40 w-full mb-50">
      <TextField
        className="w-full"
        // required
        id="outlined-required"
        label="Search"
        // defaultValue="Hello World"
        placeholder="Search"
      />
    </Container>
  );
};
export default memo(Search);
