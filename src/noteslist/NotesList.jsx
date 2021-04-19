import React, { useState } from 'react';
import Note from './Note';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function NotesList() {

    const NoteListStyle = makeStyles({
        root: {
            marginTop: '6rem',
            marginBottom: '6rem',
        },
    });

    const classes = NoteListStyle();

    const [NotesListData, setNotesListData] = useState([
        {
            id: "0titleZero",
            title: "titleZero",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: "1titleOne",
            title: "titleOne",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: "2titleTwo",
            title: "titleTwo",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
            id: "3titleThree",
            title: "titleThree",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a type specimen book.`,
        }
    ]);


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
