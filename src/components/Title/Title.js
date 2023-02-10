/**
 * Function Component
 */

// Styling
import './css-title.css'

function Title(props) {
  return (
    <div className='title-wraper'>
      <h2>{props.data}</h2>
    </div>
  );
}

export default Title;
