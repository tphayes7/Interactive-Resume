//This program handles base level logic to determine which message box
//(if any) should be displayed, and the data associated with that box.
//If a message box should be displayed, it will return a Message Box component.

import { useEffect, useState } from 'react'
import { getBoxDataById } from './assets/Data/Data';
import MessageBox from './assets/React Components/Message Box';

function App() {
  //Populate the boxData to the state.
  const [boxData, setBoxData] = useState({});

  useEffect(() => {
    const newBoxData = getBoxDataById('intro');
    setBoxData(newBoxData);
  }, [])

  const retrieveBoxData = event => {
    const newBoxData = getBoxDataById(event.currentTarget.id);
    setBoxData(newBoxData);
  }

  //Receive the onClick events from the various clickable elements.
  document.getElementById('name').onclick = retrieveBoxData;
  document.getElementById('dev-knowledge').onclick = retrieveBoxData;  
  document.getElementById('tools').onclick = retrieveBoxData;
  document.getElementById('soft-skills').onclick = retrieveBoxData;
  document.getElementById('tutorcom-header').onclick = retrieveBoxData;
  document.getElementById('tutor').onclick = retrieveBoxData;
  document.getElementById('hobbylobby-header').onclick = retrieveBoxData;
  document.getElementById('intern-tier3').onclick = retrieveBoxData;
  document.getElementById('reyrey-header').onclick = retrieveBoxData;
  document.getElementById('app-dev').onclick = retrieveBoxData;
  document.getElementById('sales-admin').onclick = retrieveBoxData;
  document.getElementById('cis-header').onclick = retrieveBoxData;
  document.getElementById('activity-coord').onclick = retrieveBoxData;
  document.getElementById('players-header').onclick = retrieveBoxData;
  document.getElementById('ops').onclick = retrieveBoxData;
  document.getElementById('dev').onclick = retrieveBoxData;
  document.getElementById('carpenter').onclick = retrieveBoxData;
  document.getElementById('general').onclick = retrieveBoxData;
  document.getElementById('obu-cis').onclick = retrieveBoxData;
  document.getElementById('obu-thea').onclick = retrieveBoxData;
  document.getElementById('exemplary-2021').onclick = retrieveBoxData;
  document.getElementById('exemplary-2022').onclick = retrieveBoxData;
  document.getElementById('HFBC').onclick = retrieveBoxData;
  document.getElementById('associate-dir').onclick = retrieveBoxData;
  document.getElementById('kids-worship').onclick = retrieveBoxData;
  document.getElementById('full-stack').onclick = retrieveBoxData;
  document.getElementById('front-end').onclick = retrieveBoxData;
  document.getElementById('back-end').onclick = retrieveBoxData;
  document.getElementById('comp-sci').onclick = retrieveBoxData;

  //Call the MessageBox component.
  return (
    <MessageBox boxData={boxData} setBoxData={setBoxData} />
  )
}

export default App
