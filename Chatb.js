import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "./components/Assets/logo.png";
import all_product from './components/Assets/all_product'; // Ensure this import is correct
import Blogs from './pages/Blogs';
import Blogsww from './App';
import quiz from './App';

const steps = [
  {
    id: '0',
    message: 'Hey Conscious!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: " Hi {previousValue}!, how can I help you?",
    trigger: 4
  },
  {
    id: '4',
    options: [
      {
        value: 1,
        label: 'View Plans',
        trigger: 'viewCourses',
      },
      {
        value: 2,
        label: 'Read Articles',
        trigger: 'readArticles',

      },
      {
        value:3,
        label:'Take Quiz',
        trigger:'tq',
      },
    ],
  },
  {
    id: 'viewCourses',
    component: (
      <div>
        <p>Great! Check out our available courses <a href="/all_productww">here</a>.</p>
        {/* <p>Is there anything else I can help you with?</p> */}
      </div>
    ),
    end: true,
  },
  {
    id: 'readArticles',
component: (<a href="/Blogsww">Read More</a>),
end: true
},
{
  id:'tq',
  component:(<a href="/quiz">Take Quiz here!</a>),
  end:true
}

];

const theme = {
  background: 'lavender',
  headerBgColor: '#6f73a6',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#687EFF',
  userFontColor: 'white',
};

const config = {
  botAvatar: logo,
  floating: true,
};

function Ch() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="MindfulMate"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default Ch;
