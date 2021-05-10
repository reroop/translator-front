import React, {useState} from 'react';
import {Card, Container} from 'react-bootstrap';
import FindTranslations from "./components/find-translations";
import AddNewTranslation from "./components/add-new-translation";
import WordTranslationModel from "./models/word-translation-model";

interface Props {
    initWordToTranslate: WordTranslationModel,
    onUpdate(): void
}


function App({initWordToTranslate}: Props) {
    const [wordForTranslation, setWordForTranslation] = useState<WordTranslationModel>({...initWordToTranslate});

    const handleChange = (wordForTranslation: WordTranslationModel) => {
        setWordForTranslation(wordForTranslation);
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>Welcome to TranslatorApp!</Card.Title>
                    <Card.Text>Find saved translations for words or add new translations yourself!</Card.Text>
                </Card.Body>
            </Card>

            <Card className="mt-5">
                <Card.Body>
                    <Card.Title>Find translations for word:</Card.Title>
                    <FindTranslations wordToTranslate={wordForTranslation} onChange={handleChange}/>
                </Card.Body>
            </Card>

            <Card className="mt-5">
                <Card.Body>
                    <Card.Title>Save a new translation for word:</Card.Title>
                    <AddNewTranslation/>
                </Card.Body>
            </Card>

        </Container>
    );
}

export default App;
