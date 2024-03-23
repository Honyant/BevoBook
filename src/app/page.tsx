'use client';
import React, { useState } from 'react';
import ChatInput from '@/components/ChatInput';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Messages from '@/components/Messages';
import {MessageProps} from '@/components/Message'

export default function Home() {

    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [responseLoading, setResponseLoading] = useState<boolean>(false);

    const addMessage = (newMessage: MessageProps) => {
      if (newMessage.message === '') {
        newMessage = {message: 'This was an empty message :(', isUserMessage: newMessage.isUserMessage}
      }
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

  return (
    <MaxWidthWrapper>
      <div className="h-[calc(1rem)]" />

      <div className="flex-1 justify-between flex flex-col h-[calc(100vh-1.5rem)]">
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
          <div className="flex-1 justify-between flex flex-co mb-28">
            <Messages messages={messages} reponseLoading={responseLoading}/>
          </div>

          <ChatInput onNewMessage={addMessage} setResponseLoading={setResponseLoading}/>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

// Loading tState:
// -pass in state variable to chatInput and Messages and then display a loading spinner if true

// for help with the charbod borders, figure that out
// Make sure new messages are properly added to the bottom of the chat and quick autoscrolling