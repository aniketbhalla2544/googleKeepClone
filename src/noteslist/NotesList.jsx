import React, { useContext } from 'react';
import Note from './Note';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NoteContext } from '../NoteContext';


export default function NotesList() {

    const [NotesListData] = useContext(NoteContext);

    const NoteListStyle = makeStyles({
        root: {
            marginTop: '6rem',
            marginBottom: '6rem',
        },
    });

    const classes = NoteListStyle();

    return (

        <Container fixed className={classes.root}>

            <Grid container spacing={10}>

                {NotesListData.map((noteObject, index) => {

                    const { id, title, description } = noteObject;

                    return <Note key={id} id={id} title={title} description={description} />;
                })}

            </Grid>

        </Container>
    )
}
