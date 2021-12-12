import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from '../SearchBar/SearchBar';

import headerMobileStyles from './HeaderMobile.styles' 

export default function HeaderMobile({ onMenuClick, mobileOpen, location }) {
  const classes = headerMobileStyles()

  return (
    <AppBar position="static" className={classes.root}>
		<Toolbar className={classes.toolbar}>
				<IconButton
					size="medium"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
					onClick={()  => onMenuClick(!mobileOpen)}
					>
					<MenuIcon />
				</IconButton>
				<SearchBar location={location}></SearchBar>
			</Toolbar>
    </AppBar>
  );
}
