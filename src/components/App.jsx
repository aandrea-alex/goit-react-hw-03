import React from 'react';
import TitleSection from './TitleSection/TitleSection';
import { TITLE } from '../js/constants';

function App() {
  return (
    <React.Fragment>
      <TitleSection>{TITLE}</TitleSection>
    </React.Fragment>
  );
}

export default App;
