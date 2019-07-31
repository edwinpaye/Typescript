import React, { Component } from 'react';
import { Spinner, Button, Row, Col, Input, FormGroup, Label } from 'reactstrap';

export const Combobox = ({universidades}) => {
    // const image = selectedMeme 
    //                 ? `https://api.ticracia.com/static/memes/${selectedMeme.image}` 
    //                 : require('../image.png');
    return(
        <>
        <h1 style={{textAlign: 'center'}}> Universidad </h1>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            {
                universidades.map((univ, i) => {
                    return(
                        <option>{univ.nombre}</option>
                    );
                })
            }
          </Input>
        </FormGroup>
        </>
    );
}