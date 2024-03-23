import { cn } from '@/lib/utils';
import { Icons } from './Icons';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export interface LoadingMessageProps {
  message: string;
  isUserMessage: boolean;
}

const LoadingMessage = forwardRef<HTMLDivElement, LoadingMessageProps>(
  ({ message, isUserMessage }, ref) => {
    return (
      <div ref={ref} className="flex items-end">
        <div
          className={cn(
            'relative flex h-6 w-6 aspect-square items-center justify-center',
            {
              'order-1 bg-blue-600 rounded-sm': isUserMessage,
              'order-1 bg-zinc-800 rounded-sm': !isUserMessage,
            },
          )}
        >
          {isUserMessage ? (
            <Icons.user className="fill-zinc-200 text-zinc-200 h-3/4 w-3/4" />
          ) : (
            // <Icons.logo className="fill-zinc-300 h-3/4 w-3/4" />
            <Icons.logo />
          )}
        </div>

        <div
          className={cn('flex flex-col space-y-2 text-base max-w-screen mx-2', {
            'order-1 items-end': isUserMessage,
            'order-2 items-start': !isUserMessage,
          })}
        >
          <div
            className={cn('px-4 py-2 rounded-lg inline-block rounded-bl-none', {
              'bg-blue-600 text-zinc-50': isUserMessage,
              'bg-orange-600 text-white': !isUserMessage,
            })}
          >
            <Loader2 className="h-5 w-5 text-white animate-spin" />
            {/* {typeof message === 'string' ? (
              <ReactMarkdown
                className={'prose'}
              >
                {message}
              </ReactMarkdown>
            ) : (
              message
            )} */}
          </div>
        </div>
      </div>
    );
  },
);

LoadingMessage.displayName = 'LoadingMessage';

// export {MessageProps};

export default LoadingMessage;
