import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
/*import WebbeeLogo from 'svg/logos/Webbee';*/
import Avatar from '@mui/material/Avatar';
import Photo from '../../../../svg/photoThomas.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Topbar = ({
  onSidebarOpen,
  themeMode,
  themeToggler,
}) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box marginRight={{ xs: 1, sm: 2 }}>
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="THarbonnier"
          height={{ xs: 28, md: 32 }}
          width={45}
        >
          <Avatar alt="Thomas Harbonnier" src={Photo} />
        </Box>
      </Box>
      <Box>
        <IconButton
          onClick={() => themeToggler()}
          aria-label="Dark mode toggler"
          color={themeMode === 'light' ? 'primary' : 'secondary'}
        >
          {themeMode === 'light' ? (
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </IconButton>
      </Box>
      <Box display="flex" alignItems={'center'}>
        <Box>
          <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.Linkedin.com')}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box marginX={2}>
          <IconButton aria-label="Github.com" onClick={() => window.open('https://github.com')}>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
          <Box>
            <Link underline="none" component="a" href="/" color="textPrimary">
              Home
            </Link>
          </Box>
          <Box marginX={2}>
            <Link
              underline="none"
              component="a"
              href="/page-customers"
              color="textPrimary"
            >
              Projects
            </Link>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="/page-contact"
              size="large"
            >
              Contact me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Topbar;
