import React from 'react';

import SubmitButton from '../buttons/SubmitButton.js'

//Layout with antd
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function RegisterPage() {
  return (

    <div className="ui container">
      {/* make a form with inputs */ }
      <div className="containercenter">
        <form className="ui form ">
          <h1 className="ui dividing header">Register for beeing listed</h1>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="field">
            <label>E-Mail</label>
            <input type="text" name="email" />
          </div>
          <SubmitButton text={ "Register now" } />




        </form>
      </div>

      {/* onsubmit save data in object */ }



    </div>

  );
}
