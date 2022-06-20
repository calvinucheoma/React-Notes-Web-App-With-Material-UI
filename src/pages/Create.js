import React, {useState} from 'react';
import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { Send, KeyboardArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {

    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title === '') {
      setTitleError(true);
    };

    if (details === '') {
      setDetailsError(true);
    };

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {'Content-type': "application/json"},
        body: JSON.stringify({title, details, category})
      }). then(() => navigate('/'))
    };

  };


  return (

    <Container>
      
        <Typography 
          sx={{textDecoration: 'underline', marginBottom: '20px'}}
          variant='h6' 
          component='h2' 
          gutterBottom 
          color='textPrimary'
        >
            Create a New Note
        </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>

        <TextField 
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          sx={{marginTop: '20px', marginBottom: '20px', display: 'block'}}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />

        <TextField 
          label='Details'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          sx={{marginTop: '20px', marginBottom: '20px', display: 'block'}}
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />

        <FormControl sx={{marginTop: '20px', marginBottom: '20px', display: 'block'}}>

            <FormLabel> Note Category </FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                <FormControlLabel value='todos' control={<Radio/>} label='Todos' />
                <FormControlLabel value='money' control={<Radio/>} label='Money' /> 
                <FormControlLabel value='reminders' control={<Radio/>} label='Reminders' />
                <FormControlLabel value='work' control={<Radio/>} label='Work' />
            </RadioGroup>

        </FormControl>

        <Button 
            // sx={{backgroundColor:'pink', '&:hover': {backgroundColor: 'red'}}}
            type='submit' 
            color='primary' 
            variant='contained' 
            endIcon={<KeyboardArrowRight/>}
          >
          Submit
        </Button>

      </form>



    </Container>
  )

};

export default Create;
