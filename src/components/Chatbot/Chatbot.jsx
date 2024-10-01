// src/Chatbot.js

import React, { useEffect, useRef, useState } from 'react';
import { getResponseFromService } from './queries';
import { Helmet } from 'react-helmet';
import { FaTimes } from 'react-icons/fa';

// Simulating an NLP service response
<getResponseFromService/>

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null); // Ref for scrolling

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Ignore empty submissions

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    const response = await getResponseFromService(input);
    const botMessage = { text: response, sender: 'bot' };
    setMessages([...messages, userMessage, botMessage]);
  };

  useEffect(() => {
    const initialGreeting = "Hello! How can I assist you today?";
    setMessages([{ text: initialGreeting, sender: 'bot' }]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat messages
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex items-center justify-center h-screen relative">
        <Helmet>
          <title>K-Mats | ChatBot</title>
        </Helmet>
        <div className="absolute m-4 w-[60%] h-[65%] bg-white border border-gray-300 rounded-lg shadow-lg">
            <h1 className='font-bold text-3xl p-4'>CHAT BOT</h1>
            <div className="px-4 h-[500px] overflow-y-scroll">
            {messages.map((message, index) => (
                <div
                key={index}
                className={`mb-2 ${message.sender === 'bot' ? 'text-cyan-600' : 'text-gray-800'}`}
                >
                {message.text}
                <div ref={endOfMessagesRef} />
                </div>
            ))}
            </div>
            <button 
              onClick={onClose} 
              className='absolute z-50 top-2 right-2 text-cyan-700'>
              <FaTimes size={20} />
            </button>
            <form onSubmit={handleSubmit} className="absolute w-full bottom-0 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className=" p-2 w-full border rounded-l-lg border-gray-300 "
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-cyan-500 text-white px-5 py-2 rounded-r-lg hover:bg-cyan-600"
                >
                    Send
                </button>
            </form>
        </div>
    </div>
  );
};

export default Chatbot;
