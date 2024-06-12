import React, { useEffect , useState } from 'react';
import logo from '../../Assets/logo.png'
import Image from 'next/image';
import { FaHouse } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { authActions } from '@/Store/Auth';
import {useStore} from 'react-redux'
import axios from 'axios';
import styles from '../../styles/allCss.module.css'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";




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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebarOpen = () => {
    setIsSidebarOpen(true)
  }
  const toggleSidebarClose = () => {
    setIsSidebarOpen(false)
  }
  
  return (
    <div className={styles.sidebar}>

      <a href="/" className="d-flex align-items-center justify-content-center link-dark text-decoration-none mb-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        <Image width='30' height='30.5' src={logo} alt='' />
        <span className="visually-hidden">Icon-only</span>
      </a>

      <FaBars size={25} onClick={toggleSidebarOpen} className={`${isSidebarOpen === false ? `${styles.barsButton}` : `${styles.barsButtonClose}`}`} />

      <div className={`d-flex flex-column flex-shrink-0 bg-light d-sm ${isSidebarOpen === false ? `${styles.responsiveSidebar}` : `${styles.responsiveSidebarActive}`} `}>

        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">

          <ImCross size={20} onClick={toggleSidebarClose} />

          <li className="nav-item">
            <a href="/" className={`nav-link py-3 border-bottom ${activeTab === 'home' ? 'active' : ''}`} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home" onClick={() => setActiveTab('home')}>
              <FaHouse size={30} />
            </a>
          </li>

          <li>
            <a href="/" className={`nav-link py-3 border-bottom ${activeTab === 'orders' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders" onClick={() => setActiveTab('orders')}>
              <CiCircleList size={30} />
            </a>
          </li>
          <li>
            <a href="/Finished" className={`nav-link py-3 border-bottom ${activeTab === 'products' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products" onClick={() => setActiveTab('products')}>
              <FaListCheck size={30} />
            </a>
          </li>

          <li>
            <a href="/User" className={`nav-link py-3 border-bottom d-flex align-items-center justify-content-evenly ${activeTab === 'customers' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers" onClick={() => setActiveTab('customers')}>
              <FaUser size={25} />
              <details>
                <summary> </summary>
                <p>{name}</p>
              </details>
            </a>
          </li>

          <li>
            <a href="/LogIn" className="nav-link py-3 border-bottom" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
              <FaRightFromBracket
                onClick={logOut} size={25} />
            </a>
          </li>

        </ul>

      </div>

    </div>
  );
};
export default Sidebar;