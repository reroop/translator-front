import React, {useState} from 'react';
import {Button, Card, Container, Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";
import WordTranslationModel from "../models/word-translation-model";

interface Props {
    wordToTranslate: WordTranslationModel,
    onChange: (wordToTranslate: WordTranslationModel) => void,
}

//todo: get and set languages from api instead of hardcoding

function FindTranslations({wordToTranslate, onChange}: Props) {
    const [wordLanguageBtnTitle, setWordLanguageBtnTitle] = useState("Choose word language")
    const [translationLanguageBtnTitle, setTranslationLanguageBtnTitle] = useState("Choose translation language")
    const [translationResult, setTranslationResult] = useState("Enter word and languages for translations!")

    const API = "http://localhost:8080/api/";

    const handleWordChange = (userWord: string) => {
        onChange({...wordToTranslate, word: userWord.toLocaleLowerCase()});
    }

    const handleWordLanguageChange = (userWordLanguage: string) => {
        onChange({...wordToTranslate, wordLanguage: userWordLanguage.toLocaleLowerCase()});
        setWordLanguageBtnTitle(userWordLanguage)
    }

    const handleTranslationLanguageChange = (userTranslationLanguage: string) => {
        onChange({...wordToTranslate, translationLanguage: userTranslationLanguage.toLocaleLowerCase()});
        setTranslationLanguageBtnTitle(userTranslationLanguage)
    }

    const handleFindTranslations = async () => {

        if (wordToTranslate.wordLanguage === wordToTranslate.translationLanguage) {
            setTranslationResult("Change word language or translation language to find translations!")
            return
        }
        if (!wordToTranslate.word || !wordToTranslate.wordLanguage || !wordToTranslate.translationLanguage) {
            setTranslationResult("Change word language, translation language or enter a word to find translations!")
            return
        }


        const queryURL = "matches/" + wordToTranslate.wordLanguage + "/" + wordToTranslate.word + "/" + wordToTranslate.translationLanguage;
        const response = await fetch(API + queryURL)

        try {
            let data = await response.json()
            if (data.length === 0) {
                setTranslationResult("No results found!")
                return;
            }

            let resultString: string = ""

            for (var property in data) {
                resultString = resultString + data[property].word + ", "
            }
            resultString = resultString.slice(0, -2)   //removing unnecessary ", " from end
            setTranslationResult(resultString)
        } catch (e) {
            setTranslationResult("No results found!")
        }
    }

    return (
        <Container>
            <InputGroup>
                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title={wordLanguageBtnTitle}
                    id="dropdown-word-language"
                >
                    <Dropdown.Item value={"estonian"}
                                   onClick={() => handleWordLanguageChange("estonian")}>Estonian</Dropdown.Item>
                    <Dropdown.Item value={"english"}
                                   onClick={() => handleWordLanguageChange("english")}>English</Dropdown.Item>
                    <Dropdown.Item value={"spanish"}
                                   onClick={() => handleWordLanguageChange("spanish")}>Spanish</Dropdown.Item>
                </DropdownButton>

                <FormControl
                    type="text"
                    placeholder="Enter your word here..."
                    aria-label="entered-word"
                    aria-describedby="entered-word"
                    onChange={(e) => handleWordChange(e.target.value)}
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-info"
                    title={translationLanguageBtnTitle}
                    id="word-translation-language"
                >
                    <Dropdown.Item value={"estonian"}
                                   onClick={() => handleTranslationLanguageChange("estonian")}>Estonian</Dropdown.Item>
                    <Dropdown.Item value={"english"}
                                   onClick={() => handleTranslationLanguageChange("english")}>English</Dropdown.Item>
                    <Dropdown.Item value={"spanish"}
                                   onClick={() => handleTranslationLanguageChange("spanish")}>Spanish</Dropdown.Item>

                </DropdownButton>

                <InputGroup.Append>
                    <Button variant="success" onClick={() => handleFindTranslations()}>Find translations</Button>
                </InputGroup.Append>
            </InputGroup>

            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Found translations:</Card.Title>
                        <Card.Body>{translationResult}</Card.Body>
                    </Card.Body>
                </Card>
            </Container>
        </Container>

    )

}

export default FindTranslations;