import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './clock';
import ClockInterval from './clockinterval';
import Toggle from './toggle';
import LoginControl from './logincontrol'
import Page from './page'
import * as serviceWorker from './serviceWorker';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(<Page />, document.getElementById('root'));
 // ReactDOM.render(<Mailbox unreadMessages={messages} />,document.getElementById('root'));
 // ReactDOM.render(<LoginControl />, document.getElementById('root'));
// ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
