import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export const Names = ({formData, setForm, navigation}) => {
    const {firstName, lastName} = formData;
    return (
        <div>
        <h1 className = "text-center">Peux-tu indiquer l'identité du patient ?</h1>
<Container maxWidth="xs">
               <TextField
               name = "firstName"
               value = {formData.firstName}
               onChange= {setForm}
               margin = "normal"
               variant = "outlined"
               placeholder = "Prénom"
               />
                <TextField
               name = "lastName"
               value = {formData.lastName}
               onChange= {setForm}
               margin = "normal"
               variant = "outlined"
               placeholder = "Nom"
               style= {{marginLeft: "5px"}}
               />
                <ArrowRightAltIcon 
                type= "button"
                variant = "contained"  
                fullWidth 
                color = "inherit"
                onClick={() => navigation.next()}
                > 
                =>
                </ArrowRightAltIcon>
</Container>
</div>
    )
}