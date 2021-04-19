import React from 'react';
import { Container, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const createNoteStyles = makeStyles(
    {
        root: {
            marginTop: '3.5rem',
            padding: '1rem',

            '& *': {
                fontFamily: 'Roboto, sans-serif',
            },

            '& form': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',

                '& > *': {
                    fontSize: '1.25rem',
                },

                '& > *:not(:last-child)': {
                    marginBottom: '1rem',
                    border: 'none',
                },

                '& > *:not(:last-child):focus': {
                    outline: 'none',
                },

                '& Button': {
                    alignSelf: 'flex-end',

                    '& > *': {
                        fontSize: '1.1rem',
                    }
                }
            }
        },

        flexCenter: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
        }
    }
);

export default function CreateNote() {

    const classes = createNoteStyles();

    return (
        <Container fixed className={classes.root}>

            <Grid container className={classes.flexCenter} spacing={4}>

                <Grid item style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '0.5em', }} xs={11} sm={8} md={6}>

                    <form noValidate autoComplete="off">

                        <input type="text" placeholder='Title' />
                        <textarea placeholder="write a note..."></textarea>
                        <Button>Add</Button>

                    </form>

                </Grid>

            </Grid>

        </Container>
    )
}
