import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles';
import swal from 'sweetalert';
import Input from '@material-ui/core/Input';


const theme = createTheme({
  palette: {
    primary: {
      main: '#AF8AE4'
    }
  }
})

function Understanding (){

    const [understandingInput, setUnderstandingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (understandingInput > 5 || understandingInput == 0){
            swal({
                title: "Uh Oh!",
                text: "Please enter a valid response",
                icon: "error",
                button: "Okay",
            });
        } else (
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
        }),
        history.push("/support")
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="center">
                <h1>How well are you understanding the content?</h1>
                <Input placeholder="on a scale of 1-5" inputProps={{ 'aria-label': 'description' }} type="number" value={understandingInput} onChange={(event) => setUnderstandingInput(event.target.value)}/>
                <Button variant="outlined" color="primary" onClick={(event) => handleChange(event)}>NEXT</Button>
            </div>
        </ThemeProvider>
    )
}

export default Understanding;