import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchBar from '../SearchBar/SearchBar';

import headerMobileStyles from './HeaderMobile.styles' 

export default function HeaderMobile({ onMenuClick, mobileOpen }) {
  const classes = headerMobileStyles()

  return (
    <AppBar position="static" class={classes.root}>
			<Toolbar class={classes.toolbar}>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
					onClick={()  => onMenuClick(!mobileOpen)}
					>
					<MenuIcon />
				</IconButton>
				<SearchBar></SearchBar>
			</Toolbar>
    </AppBar>
  );
}
