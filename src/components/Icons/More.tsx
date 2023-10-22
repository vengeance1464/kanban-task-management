import { IconButton } from '@mui/material';
import React from 'react';
import { PropsWithChildren } from '../../react-app-env';
import { IconProps } from './types';

export const More: React.FC<PropsWithChildren<IconProps>> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <svg
        width="5"
        height="20"
        viewBox="0 0 5 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
        <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
        <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3" />
      </svg>
    </IconButton>
  );
};
