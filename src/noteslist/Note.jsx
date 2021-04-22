import React from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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
        backgroundColor: 'transparent',
        boxShadow: '6px 6px 10px rgba(0, 0, 0, 0.2), -8px -8px 10px rgba(255, 255, 255, 0.7)',
        border: 'none',
        aspectRatio: '4 / 5',


        '&:hover': {

            cursor: 'pointer',
        }
    },

    deleteIConBox: {
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2), -4px -4px 5px rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        padding: '0.5rem 1rem',
        right: '10px', bottom: '10px',
        display: 'gird',
        placeItems: 'center',

        '&:hover': {
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.6) inset',
        }
    },


    deleteIcon: {
        // border: '1px solid red',
    },

});

export default function Note(props) {

    const classes = noteStyles();

    return (
        <Grid className={classes.root} item xs={11} sm={6} md={3}>

            <Card style={{ position: 'relative', }} className={classes.noteCard} variant="outlined">

                <CardContent>

                    <Typography className={classes.noteTitle} variant="h5">{props.title}</Typography>

                    <Typography className={classes.noteDescription} style={{ lineHeight: 1.8 }} paragraph>{props.description}</Typography>

                </CardContent>

                <Box className={classes.deleteIConBox} component="span" style={{}} onClick={() => { props.deleteNote(props.id) }}>
                    <DeleteIcon className={classes.deleteIcon} />
                </Box>


            </Card>

        </Grid>
    )
}
