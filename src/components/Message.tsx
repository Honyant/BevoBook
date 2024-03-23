import { cn } from '@/lib/utils';
import { Icons } from './Icons';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { forwardRef } from 'react';

interface MessageProps {
  message: String;
  isUserMessage: boolean;
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ message, isUserMessage }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-end', {
          'justify-end': isUserMessage,
        })}
      >
        <div
          className={cn(
            'relative flex h-6 w-6 aspect-square items-center justify-center',
            {
              'order-2 bg-blue-600 rounded-sm': isUserMessage,
              'order-1 bg-zinc-800 roudned-sm': !isUserMessage,
            },
          )}
        >
          {isUserMessage ? (
            <Icons.user className="fill-zinc-200 text-zinc-200 h-3/4 w-3/4" />
          ) : (
            <Icons.logo className="fill-zinc-300 h-3/4 w-3/4" />
          )}
        </div>

        <div
          className={cn('flex flex-col space-y-2 text-base max-w-md mx-2', {
            'order-1 items-end': isUserMessage,
            'order-2 items-start': !isUserMessage,
          })}
        >
          <div
            className={cn('px-4 py-2 rounded-lg inline-block', {
              'bg-blue-600 text-white': isUserMessage,
              'bg-gray-200 text-gray-900': !isUserMessage,
              'rounded-br-none': isUserMessage,
              'rounded-bl-none': !isUserMessage,
            })}
          >
            {typeof message === 'string' ? (
              <ReactMarkdown
                className={cn('prose whitespace-pre-wrap', {
                  'text-zinc-50': isUserMessage,
                })}
              >
                {message}
              </ReactMarkdown>
            ) : (
              <div className="whitespace-pre-wrap">{message}</div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Message.displayName = 'Message';

export default Message;
