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

                    // error msg box
                    '&::before': {
                        content: `"${emptyNoteErrMsg}"`,
                        position: 'relative',
                        top: 0,
                        left: 0,
                        color: 'red',
                        paddingBottom: '1rem',
                        fontWeight: '600',
                        fontSize: '1rem',

                    },

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

                <Grid item style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '0.5em', }} xs={11} sm={8} md={6}>

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
