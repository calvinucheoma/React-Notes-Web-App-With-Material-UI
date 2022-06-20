import React from 'react';
import {Card, CardHeader, CardContent, IconButton, Typography, Avatar} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';


const NoteCard = ({note, handleDelete}) => {

  return (

    <div>
      <Card 
        elevation={1} 
        sx={
            [note.category === 'work' ? {border: '1px solid blue'} : null,
             note.category === 'todos' ? {border: '1px solid yellow'} : null,
             note.category === 'money' ? {border: '1px solid green'} : null,
             note.category === 'reminders' ? {border: '1px solid red'} : null,
            {marginRight: '50px'} 
            ]
           
        }
      >
          <CardHeader 
            avatar={
              <Avatar
                sx={
                    [note.category === 'work' ? {backgroundColor: 'blue'} : null,
                    note.category === 'todos' ? {backgroundColor: 'yellow'} : null,
                    note.category === 'money' ? {backgroundColor: 'green'} : null,
                    note.category === 'reminders' ? {backgroundColor: 'red'} : null,
                    ]
                  }
              >
                 {note.category[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton onClick={() => handleDelete(note.id)}> 
                <DeleteOutlined /> 
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />  
          <CardContent>
            <Typography variant='body2' color={grey}> {note.details} </Typography>  
          </CardContent>
      </Card>
    </div>
  )

};

export default NoteCard;