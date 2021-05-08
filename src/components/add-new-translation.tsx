import React, {useState} from 'react';
import {Button, Container, Dropdown, DropdownButton, FormControl, InputGroup, Toast} from "react-bootstrap";
import MatchesEntryModel from "../models/matches-entry-model";


//todo: get languages from api instead of hardcoding; add possibility to add new languages when entering translations

function AddNewTranslation() {
    const API = "http://localhost:8080/api/";
    const initUserWordLanguage = "Choose word language";
    const initTranslationLanguage = "Choose translation language";

    const [userWordLanguage, setUserWordLanguage] = useState(initUserWordLanguage)
    const [translationLanguage, setTranslationLanguage] = useState(initTranslationLanguage)
    const [userWord, setUserWord] = useState("")
    const [translationWord, setTranslationWord] = useState("")

    const [showResponseToast, setShowResponseToast] = useState(false);
    const [responseToastText, setResponseToastText] = useState("");
    const toggleShowResponseToast = () => setShowResponseToast(!showResponseToast);

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

        if (matchesEntry.wordLanguage===initUserWordLanguage || !matchesEntry.word || matchesEntry.matchingWordLanguage===initTranslationLanguage
            || !matchesEntry.matchingWord || matchesEntry.wordLanguage===matchesEntry.matchingWordLanguage) {
            setResponseToastText("Translation was not saved. Check your translation entries and try again!")
            //todo: on first unsuccessful save throws error, see console
            toggleShowResponseToast();
            return;
        }

        const response = await fetch(API + "words/saveNewTranslation", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify(matchesEntry)
        }).then(response => {
            //console.log(response);
            const responseStatus:number = response.status;
            if (responseStatus === 200) {
                setResponseToastText("Translation is saved successfully!")
            } else {
                setResponseToastText("Translation was not saved. Check your translation entries and try again!")
            }
            toggleShowResponseToast();
        })


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
            <Toast show={showResponseToast}
                   onClose={()=>toggleShowResponseToast()}
                   autohide={true}
                   style={{
                       position: 'absolute',
                       right: 0,
                   }}
            >
                <Toast.Header>
                    <strong className="mr-auto">Save result</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body>{responseToastText}</Toast.Body>
            </Toast>
        </Container>
    )
}

export default AddNewTranslation;