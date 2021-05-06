import React from 'react';
import {Button, Card, Container, Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import App from "../App";


function FindTranslations() {
    //todo: language selections, word, translation + backendAPI

    return (
        <Container>
            <InputGroup>
                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Choose word language"
                    id="dropdown-word-language"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>

                <FormControl
                    placeholder="Enter your word here..."
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-info"
                    title="Choose translation language"
                    id="word-translation-language"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>

                <InputGroup.Append>
                    <Button variant="success">Find translations</Button>
                </InputGroup.Append>
            </InputGroup>

            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Found translations:</Card.Title>
                        <Card.Body>Enter word for translations!</Card.Body>
                    </Card.Body>
                </Card>
            </Container>
        </Container>

        )

}

export default FindTranslations;