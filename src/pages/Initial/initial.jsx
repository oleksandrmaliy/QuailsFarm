import // Link,
// Outlet,
'react-router-dom';
// import css from './initial.module.css';
import { Farm } from '../../components/farm.jsx';

export const Initial = () => {
  //   const [count, setCount] = useState(0);
  // const initial = 'Home Page !';

  return (
    <>
      <Farm />
      {/* <h1>{initial}</h1> */}
      {/* <ul>
        <li>
          <Link to="about">About us</Link>
        </li>
        <li>
          <Link to="gallery">Enjoy our pics</Link>
        </li>
        <li>
          <Link to="contacts">Call us for joy</Link>
        </li>
      </ul> */}
      {/* <Outlet /> */}
    </>
  );
};
