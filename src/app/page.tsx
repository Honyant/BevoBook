'use client';
import React, { useState } from 'react';
import ChatInput from '@/components/ChatInput';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Messages from '@/components/Messages';
import {MessageProps} from '@/components/Message'

export default function Home() {

    const [messages, setMessages] = useState<MessageProps[]>([]);

    const addMessage = (newMessage: MessageProps) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

  return (
    <MaxWidthWrapper>
      <div className="h-[calc(1rem)]" />
      <div className="flex-1 justify-between flex flex-col h-[calc(100vh-1.5rem)]">
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
          <div className="flex-1 justify-between flex flex-co mb-28">
            <Messages messages={messages}/>
          </div>

          <ChatInput onNewMessage={addMessage}/>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
