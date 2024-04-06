import {FC} from 'react';
import logo from './assets/react.svg';
interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className='py-3 px-2' style={{borderBottom: '2px solid #777'}}>
        <img src={logo} alt="logo" style={{ height: '60px', verticalAlign: 'top' }} />
        <span className='h2 pt-4 m-2 text-white'>React Counter</span>
    </div>
    );
};

export default Header;