import { Loader2, MessageSquare } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Message from './Message';
import { ChatContext } from './ChatContext';
import { useContext, useEffect, useRef } from 'react';

const Messages = () => {
  let combinedMessages = [
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message:
        `ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)`,
      isUserMessage: false,
    },
  ];
  return (
    <div className="flex max-h-[calc(100vh-1.5rem-7rem)] border-zinc-200 flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {combinedMessages && combinedMessages.length > 0 ? (
        combinedMessages.map(({ message, isUserMessage }, i) => {
          if (i === combinedMessages.length - 1) {
            return <Message message={message} isUserMessage={isUserMessage} />;
          } else {
            return <Message message={message} isUserMessage={isUserMessage} />;
          }
        })
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="h-8 w-8 text-blue-500" />
          <h3 className="font-semibold text-xl">You&apos;re all set!</h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
