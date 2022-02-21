import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

type Props = {
  labels: string[]
}

export default function Chips(props: Props) {
  const { labels } = props;
  const chips = labels.map((label) => <Chip label={label} size="small" color="secondary" variant="outlined" sx={{ ml: 1, mb: 1 }} />);
  return (
    <>
      { chips }
    </>
  );
}
