// css
import './App.css';
// component
import Title       from './components/Title'
import Description from './components/Description';

function App() {
  return (
    <div>
      <Title data="title A" />
      <Description data="desc 1" />
      <Title data="title B" />
      <Description data="desc 2" />
    </div>
  );
}

export default App;
