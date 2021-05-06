import React from 'react';
import logo from './logo.svg';
import {Card, Container} from 'react-bootstrap';
import './App.css';
import {Row} from "react-bootstrap";
import FindTranslations from "./components/find-translations";
import AddNewTranslation from "./components/add-new-translation";

function App() {
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
                 <FindTranslations/>
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
