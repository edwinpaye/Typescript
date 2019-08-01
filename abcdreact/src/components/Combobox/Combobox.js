import React, { useState } from 'react';
import { FormGroup, Label, Card, CardTitle, CardText } from 'reactstrap';

export const Combobox = ({universidades}) => {

    const [variables, setVariables] = useState({
        indice: 0,
        univs: universidades,
        nam: '',
        ubic: '',
        facult: '',
        carre:  ''
    });

    const setIndice = (numero)=>{
        setVariables({
            indice: numero.target.value,
            nam: universidades[numero.target.value].nombre,
            ubic: universidades[numero.target.value].ubicacion,
            carre: universidades[numero.target.value].carreras,
            facult: universidades[numero.target.value].facultades
        });
    }

    return(
        <>
        <h1 style={{textAlign: 'center'}}> Universidad </h1>
        <FormGroup>
          <Label>Select</Label>
          <select onChange={setIndice}>
            {
            universidades.map((univ, i) => {
                return(
                    <option key={univ.id} value={i}>{univ.nombre}</option>
                );
            })
            }
          </select>
        </FormGroup>
        <Card body inverse color="primary">
            <CardTitle>Lorem Ipsum</CardTitle>
            <CardText>{variables.nam}</CardText>
            <CardText>{variables.ubic}</CardText>
            <CardText>{variables.carre}</CardText>
            <CardText>{variables.facult}</CardText>
        </Card>
        </>
    );
}