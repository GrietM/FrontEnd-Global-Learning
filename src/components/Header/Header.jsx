import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Header.css'
import { PageHeader, Button, Descriptions } from 'antd';


const style = {
  color: 'white',
  backgroundColor: 'gray'
}

const Header2 = (props) => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to= '/' activeStyle= {style}> 
            Main
            </Link>
          </li>
          <li>
          <NavLink to= '/books' activeStyle={style}>
            Books
          </NavLink>
          </li>
          <li>
          <NavLink to= '/users' activeStyle={style}>
            Users
          </NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  )
}


const Header = (props) =>{
  return(
<div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="GitHub Cards App"
      subTitle="Save your favorite user's profiles cards in one place"
      extra={[
        <Button key="1" type="primary">
          Main
        </Button>,
        <Button key="2" href='https://github.com/'>Go to GitHub</Button>,
        <Button key="3">Contact us</Button>,
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Created by">Marce Griet</Descriptions.Item>
        <Descriptions.Item label="User Name at GitHub">
          <a href= 'https://github.com/GrietM'>{'GrietM'}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Creation Date">2021-04-28</Descriptions.Item>
        <Descriptions.Item label="Location"> San Carlos de Bariloche, Arg. </Descriptions.Item>
        <Descriptions.Item label="email"> marcelagriet@gmail.com </Descriptions.Item>
        <Descriptions.Item label="Phone N°"> 123456789 </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>)}


export  {Header, Header2, PageHeader}