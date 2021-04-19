import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const noteStyles = makeStyles({
    root: {

        '& *': {
            fontFamily: 'Roboto, sans-serif',
        },
    },

    'noteTitle': {
        fontWeight: '600',
        marginBottom: '0.8rem',
        fontSize: '1.1rem',
    },

    'noteDescription': {
        fontSize: '0.8rem',
    },

    'noteCard': {

        '&:hover': {
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
        }
    }
});

export default function Note(props) {

    const classes = noteStyles();

    return (
        <Grid className={classes.root} item xs={11} sm={6} md={3}>

            <Card className={classes.noteCard} variant="outlined">

                <CardContent>

                    <Typography className={classes.noteTitle} variant="h5">{props.title}</Typography>

                    <Typography className={classes.noteDescription} style={{ lineHeight: 1.8 }} paragraph>{props.description}</Typography>

                </CardContent>

            </Card>

        </Grid>
    )
}
