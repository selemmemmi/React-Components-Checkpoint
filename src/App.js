import './App.css';
import Address from './components/Profile/Address';
import FullName from './components/Profile/FullName';
import ProfilePhoto from './components/Profile/ProfilePhoto';

function App() {
  return ( 
  <div>
    <FullName/>
    <div className="image">
      <ProfilePhoto/>
      <Address/>
    </div>
  </div>
    
  );
}

export default App;
