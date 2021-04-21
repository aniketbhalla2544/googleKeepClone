import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WbIncandescentSharpIcon from '@material-ui/icons/WbIncandescentSharp';

const headerStyles = makeStyles({
    root: {
        backgroundColor: '#495057',
        padding: "1.6em",
        color: "white",
        borderBottom: '2px solid #c0bbb6',

        '& *': {
            fontFamily: 'Roboto, sans-serif',
        },
    },

    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '0 0.4rem',
        letterSpacing: '2px',
        fontWeight: '500',
    },
});

export default function Header() {

    const classes = headerStyles();

    return (
        <Box component="div" className={classes.root}>
            <Typography className={classes.logo} variant="h5">
                <WbIncandescentSharpIcon />
                GOOGLE KEEP CLONE
            </Typography>
        </Box>
    )
}
