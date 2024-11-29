import './App.css';
import { EditForm } from './components/EditForm';


const editEntries = [
  {
    attribute: 'attribute',
    attributeName: ' attributeName',
    type: "PillList",
    isRequired: false,
    validations: ['Email'],
    extramParam: {
      pills: ['Pill Label 1', 'Pill Label 2']
    }
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EditForm
          title="title"
          description='Description'
          editEntries={editEntries}

        />
      </header>
    </div>
  );
}

export default App;
