import React from 'react';
import {Button, Container, Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";

function AddNewTranslation() {
    //todo: language selections, word, translation + backendAPI

    return (
        <Container>
            <InputGroup>
                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-warning"
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
                    placeholder="Enter word"
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-warning"
                    title="Choose translation language"
                    id="word-translation-language"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>

                <FormControl
                    placeholder="Enter translation for word"
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                />

                <InputGroup.Append>
                    <Button variant="success">Save translation</Button>
                </InputGroup.Append>
            </InputGroup>
        </Container>
    )
}

export default AddNewTranslation;