import './App.css';
import College from './college';
import Student from './student';

function App() {
  return (
    <>
      <Student name="Rick Rude" number="11111" enrolled="2"/>
      <Student name="Shawn Michaels" number="22222" enrolled="3"/>
      <Student name="Bret Hart" number="33333" enrolled="1"/>
      <College name="George Brown" location="Casa Loma"/>
    </>
  );
}

export default App;
