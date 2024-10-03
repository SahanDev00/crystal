import React, { useEffect, useRef, useState } from 'react';
import { getResponseFromService } from './queries';
import { FaTimes } from 'react-icons/fa';

const SmallChatbot = ({ onClose }) => {
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
    <div className="fixed bottom-20 left-4 w-52 md:w-72 h-60 md:h-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
      <div className="flex justify-between items-center p-2 border-b border-gray-300">
        <span className="font-bold text-lg text-cyan-900">ChatBot</span>
        <button onClick={onClose} className="text-gray-500">
          <FaTimes />
        </button>
      </div>
      <div className="flex-1 p-2 overflow-y-auto">
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
      <form onSubmit={handleSubmit} className="flex border-t border-gray-300 p-1" >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="pl-2 flex-1 border rounded-l-lg border-gray-300 w-[60px]"
          placeholder="Type..."
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SmallChatbot;
