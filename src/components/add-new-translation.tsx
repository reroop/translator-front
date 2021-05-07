import React, {useState} from 'react';
import {Button, Container, Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import MatchesEntryModel from "../models/matches-entry-model";

function AddNewTranslation() {
    const API = "http://localhost:8080/api/";

    const [userWordLanguage, setUserWordLanguage] = useState("Choose word language")
    const [translationLanguage, setTranslationLanguage] = useState("Choose translation language")
    const [userWord, setUserWord] = useState("")
    const [translationWord, setTranslationWord] = useState("")

    const handleWordLanguageChange = (userWordLanguage: string) => {setUserWordLanguage(userWordLanguage)}

    const handleWordChange = (userWord: string) => {setUserWord(userWord);}

    const handleTranslationLanguageChange = (userTranslationLanguage: string) => {setTranslationLanguage(userTranslationLanguage)}

    const handleTranslationWordChange = (userTranslationWord: string) => {setTranslationWord(userTranslationWord);}

    const handleSaveNewTranslation = async () => {
        let matchesEntry: MatchesEntryModel = {
            wordLanguage: userWordLanguage,
            word: userWord,
            matchingWordLanguage: translationLanguage,
            matchingWord: translationWord
        }

        const response = await fetch(API + "words/saveNewTranslation", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify(matchesEntry)
        })//.then(response => response.json()).then(response=>{console.log(response)})

    }

    return (
        <Container>
            <InputGroup>
                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-warning"
                    title={userWordLanguage}
                    id="dropdown-word-language"
                >
                    <Dropdown.Item value={"estonian"} onClick={()=>handleWordLanguageChange("estonian")}>Estonian</Dropdown.Item>
                    <Dropdown.Item value={"english"} onClick={()=>handleWordLanguageChange("english")}>English</Dropdown.Item>
                    <Dropdown.Item value={"spanish"} onClick={()=>handleWordLanguageChange("spanish")}>Spanish</Dropdown.Item>

                </DropdownButton>

                <FormControl
                    type="text"
                    placeholder="Enter word"
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                    onChange={(e)=>handleWordChange(e.target.value)}
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-warning"
                    title={translationLanguage}
                    id="word-translation-language"
                >
                    <Dropdown.Item value={"estonian"} onClick={()=>handleTranslationLanguageChange("estonian")}>Estonian</Dropdown.Item>
                    <Dropdown.Item value={"english"} onClick={()=>handleTranslationLanguageChange("english")}>English</Dropdown.Item>
                    <Dropdown.Item value={"spanish"} onClick={()=>handleTranslationLanguageChange("spanish")}>Spanish</Dropdown.Item>

                </DropdownButton>

                <FormControl
                    type="text"
                    placeholder="Enter translation for word"
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                    onChange={(e)=>handleTranslationWordChange(e.target.value)}
                />

                <InputGroup.Append>
                    <Button variant="success" onClick={()=>handleSaveNewTranslation()}>Save translation</Button>
                </InputGroup.Append>
            </InputGroup>
        </Container>
    )
}

export default AddNewTranslation;