import { useState } from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0 auto auto auto;

  @media (min-width: 600px) {
    border-radius: 10px;
  }
  @media (min-width: 1100px) {
    margin: 0;
  }
`;

const ChatHeader = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 15px;
  font-weight: bold;
  text-align: center;
  height: 50px;
`;

const ChatMessages = styled.div`
  padding: 10px;
  height: 400px;
  overflow-y: auto;
`;

const Message = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  word-wrap: break-word;
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  height: 50px;
  background-color: #f5f5f5;
  padding: 10px;
`;

const ChatInput = styled.input`
  padding: 8px 10px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  font-family: var(--descripciones);
  &:focus {
    border-color: #007bff;
  }
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 5px 15px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <b>Chat en Vivo</b>
      </ChatHeader>
      <ChatMessages>
        {messages.map((message, index) => (
          <Message key={index}>
            <p>{message}</p>
          </Message>
        ))}
      </ChatMessages>

      <ChatInputContainer>
        <ChatInput
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <SendButton onClick={handleSendMessage}>
          <p>Enviar</p>
        </SendButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default LiveChat;
