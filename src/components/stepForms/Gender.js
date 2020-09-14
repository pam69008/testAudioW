import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Gender = ({formData, setForm, navigation}) => {
    const {man, girl} = formData;
    return (
        <div>
            <h1 className="text-center p-4">Peux tu indiquer son sexe ?</h1>
            <Container maxWidth="xs">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button 
                        name = "man" 
                        style= {{marginRight: "50px"}}
                        value = {formData.man} 
                        onClick={() => {
                            navigation.next();
                            formData.gender = 'Monsieur'
                          }}  
                    >
                        Homme
                    </Button>
                    </ButtonGroup>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button 
                        name = "girl" 
                        style= {{marginLeft: "170px"}}
                        margin= "normal"
                        value = {formData.girl}
                        onClick={() => {
                            navigation.next();
                            formData.gender = 'Madame'
                          }}
                        >
                            Femme
                    </Button>
                </ButtonGroup>
                <ArrowBackIcon
                type= "button"
                style = {{marginTop: "1rem"}}
                color = "inherit"
                variant = "contained"
                onClick={() => navigation.previous()}>
                    Retour
                </ArrowBackIcon>
            </Container>
        </div>
    )
}