import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import logo from '../../../../../../logo.png';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={1}
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
      </Box>
      <Box
        paddingX={2}
        paddingY={2}
      >
        {pages.map((p, i) => (
          <Box
            key={i}
            marginLeft={3}
            marginBottom={3}
            alignItems='center'
            justifyContent='center'
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
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant='contained'
            color='primary'
            fullWidth
            component='a'
            target='blank'
            href='/contact'
          >
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
