import React, { useEffect , useState } from 'react';
import logo from '../../Assets/logo.png'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { authActions } from '@/Store/Auth';
import {useStore} from 'react-redux'
import axios from 'axios';
import styles from '../../styles/allCss.module.css'



const Sidebar = () => {

  const store = useStore()
  
  const logOut = () => {
    alert('Do you want to log out')
    store.dispatch(authActions.logOut())
    localStorage.clear('id')
    localStorage.clear('token')
    if (typeof window !== 'undefined') {
      window.location.href = '/LogIn'
    }
  }

    

  let id = null;
  let token = null;

  if (typeof window !== 'undefined') {
    id = localStorage.getItem('id');
    token = localStorage.getItem('token');
  }

  const headers = {
    id,
    authorization: `Bearer ${token}`,
  };


  const [name, setName] = useState('')

  useEffect(() => {
    axios.get('https://to-do-api-seven.vercel.app/app/getUserInfo', { headers })
      .then(result => setName(result.data.userInfo.name))
  }, [])
  
  const [activeTab, setActiveTab] = useState('home')
  
  return (
    <div className={styles.sidebar}>
      <a href="/" className="d-flex align-items-center justify-content-center link-dark text-decoration-none mb-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        <Image width='30' height='30.5' src={logo} alt='' />
        <span className="visually-hidden">Icon-only</span>
      </a>
      <div className={'d-flex flex-column flex-shrink-0 bg-light'}>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="/" className={`nav-link py-3 border-bottom ${activeTab === 'home' ? 'active' : ''}`} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home" onClick={() => setActiveTab('home')}>
              <FontAwesomeIcon icon={faHouse} size='xl' />
            </a>
          </li>
          <li>
            <a href="/" className={`nav-link py-3 border-bottom ${activeTab === 'orders' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders" onClick={() => setActiveTab('orders')}>
              <FontAwesomeIcon icon={faList} size='xl' />
            </a>
          </li>
          <li>
            <a href="/Finished" className={`nav-link py-3 border-bottom ${activeTab === 'products' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products" onClick={() => setActiveTab('products')}>
              <FontAwesomeIcon icon={faListCheck} size='xl' />
            </a>
          </li>
          <li>
            <a href="/User" className={`nav-link py-3 border-bottom d-flex align-items-center justify-content-evenly ${activeTab === 'customers' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers" onClick={() => setActiveTab('customers')}>
              <FontAwesomeIcon icon={faUser} size='xl' />
              <details>
                <summary> </summary>
                <p>{name}</p>
              </details>
            </a>
          </li>
          <li>
            <a href="/LogIn" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FontAwesomeIcon icon={faRightFromBracket} size='xl'
                onClick={logOut} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;