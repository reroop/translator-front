import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WordTranslationModel from "./models/word-translation-model";

const onUpdateWord = () => {
    console.log("updated word in index.tsx")
}

ReactDOM.render(
  <React.StrictMode>
    <App  initWordToTranslate={{} as WordTranslationModel} onUpdate={onUpdateWord}/>
  </React.StrictMode>,
  document.getElementById('root')
);

