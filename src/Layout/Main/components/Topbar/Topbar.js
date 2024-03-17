import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import logo from '../../../../logo.png';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
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
          className='App-logo'
        />
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
      >
        {pages.map((p, i) => (
          <Box
            key={i}
            marginLeft={3}
          >
            {!p.children ? (
              <Link
                href={p.href}
                color={'text.primary'}
                underline={'none'}
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {p.title}
              </Link>
            ) : (
              <NavItem
                title={p.title}
                items={p.children}
                id={p.id}
              />
            )}
          </Box>
        ))}
        <Box marginLeft={4}>
          <Button
            variant='contained'
            color='primary'
            component='a'
            target='blank'
            href='/contact'
            size='large'
          >
            Contact us
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: 'block', md: 'none' } }}
        alignItems={'center'}
      >
        <Button
          onClick={() => onSidebarOpen()}
          aria-label='Menu'
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
