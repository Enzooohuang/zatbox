import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import logo from '../../../../logo.png';

const Footer = () => {
  return (
    <Grid
      container
      spacing={1}
    >
      <Grid
        item
        xs={12}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component='a'
            href='/'
            title='ZatBox'
          >
            <Box
              component={'img'}
              src={logo}
              className='App-logo-small'
            />
          </Box>
          <Box marginTop={1}>
            <Button
              variant='outlined'
              color='primary'
              component='a'
              target='blank'
              href='/contact'
              size='large'
            >
              Let us chat!
            </Button>
          </Box>
        </Box>
      </Grid>
      {/* <Grid
        item
        xs={12}
      >
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color='text.secondary'
          gutterBottom
        >
          &copy; theFront. 2021, Maccarian. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color='text.secondary'
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default Footer;
