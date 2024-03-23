import { Loader2, MessageSquare } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Message from './Message';
import { ChatContext } from './ChatContext';
import { useContext, useEffect, useRef } from 'react';

const Messages = () => {
  const combinedMessages = [
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message: 'toodles',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message: 'toodles',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message: 'toodles',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
    {
      message: '-------------------',
      isUserMessage: true,
    },
    {
      message: '----------------',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message: 'dumb dumb ----------------',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message: 'toodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodlestoodles',
      isUserMessage: false,
    },
    {
      message: 'winnie',
      isUserMessage: true,
    },
    {
      message: 'uh more',
      isUserMessage: false,
    },
  ];
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {combinedMessages.map(({message, isUserMessage}, i) => {
        if (i === combinedMessages.length - 1) {
          return (
            <Message
              message={message}
              isUserMessage={isUserMessage}
            />
          );
        } else {
          return (
            <Message
              message={message}
              isUserMessage={isUserMessage}
            />
          );
        }
      })}
    </div>
  );
};

export default Messages;
