// import React, { useState, useEffect, useContext } from 'react';
import React, { useState, useContext } from 'react';
import { Container, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { NoteContext } from './NoteContext';

export default function CreateNote() {

    const [emptyNoteErrMsg, setEmptyNoteErrMsg] = useState("");
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
                    borderRadius: '0.5em',

                    // error msg box
                    '&::before': {
                        content: `"${emptyNoteErrMsg}"`,
                        position: 'relative',
                        top: 0,
                        left: 0,
                        color: '#212529',
                        paddingBottom: '1rem',
                        // fontWeight: 'bolder',
                        fontWeight: '600 !important',
                        fontSize: '2rem',
                        fontFamily: `"Tangerine", "cursive"`,
                    },

                    '& > *': {
                        fontSize: '1.25rem',
                    },

                    '& > *:not(:last-child)': {
                        marginBottom: '1rem',
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#495057',
                    },

                    '& > *:not(:last-child):focus': {
                        outline: 'none',
                    },

                    '& Button': {
                        alignSelf: 'flex-end',
                        color: '#212529',
                        fontWeight: '700',
                        boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.4), -5px -5px 5px rgba(255, 255, 255, 0.6)',
                        padding: '0.4rem 1.8rem',

                        '& > *': {
                            fontSize: '1.2rem',
                        }
                    }
                },
            },

            formContainer: {
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2), -8px -8px 10px rgba(255, 255, 255, 0.6)',
            },

            flexCenter: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
            }
        }
    );
    const classes = createNoteStyles();
    const [notesListData, setNotesListData] = useContext(NoteContext);
    const [titleDescription, setTitleDescription] = useState(
        {
            id: "",
            title: "",
            description: "",
        }
    );
    const titleNoteAreaHandler = e => {

        const { target: { name, value } } = e;

        setTitleDescription(oldTitleDescription => {
            return {
                ...oldTitleDescription,
                [name]: value,
            }
        });
    }

    // useEffect(() => console.log(titleDescription), [titleDescription]);
    // useEffect(() => console.log(notesListData), [notesListData]);


    const onAddClickhandler = e => {

        e.preventDefault();

        if (titleDescription.title != "" && titleDescription.description != "") {

            setNotesListData(oldNotesListData => {
                return [...oldNotesListData, titleDescription]
            });

            setTitleDescription(
                {
                    id: "",
                    title: "",
                    description: "",
                }
            );
        } else {
            setEmptyNoteErrMsg("Notes can't be stored empty....!!");
            setTimeout(() => setEmptyNoteErrMsg(""), 5000);
        }
    }

    return (
        <Container fixed className={classes.root}>

            <Grid container className={classes.flexCenter} spacing={4}>

                <Grid item className={classes.formContainer} xs={11} sm={8} md={6}>

                    <form onSubmit={onAddClickhandler} noValidate autoComplete="off">

                        <input value={titleDescription.title} name="title" onChange={titleNoteAreaHandler} type="text" placeholder='Title' />
                        <textarea value={titleDescription.description} name="description" onChange={titleNoteAreaHandler} placeholder="write a note..."></textarea>
                        <Button type="submit">Add</Button>

                    </form>

                </Grid>

            </Grid>

        </Container>
    )
}
