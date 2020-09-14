import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export const Gender = ({formData, setForm, navigation}) => {
    const {man, girl} = formData;
    return (
        <div>
            <h1 className="text-center p-4">Peux tu indiquer son sexe ?</h1>
            <Container maxWidth="xs">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button 
                        name = "man" 
                        value = {man} 
                        onClick={() => navigation.next()}    
                    >
                        Homme
                    </Button>
                    </ButtonGroup>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button 
                
                        name = "girl" 
                        value = {girl}
                        onClick={() => navigation.next()}
                        >
                            Femme
                    </Button>
                </ButtonGroup>
                <Button
                fullWidth 
                style = {{marginTop: "1rem"}}
                color = "inherit"
                variant = "contained"  
                onClick={() => navigation.previous()}>
                    Retour
                </Button>
            </Container>
        </div>
    )
}