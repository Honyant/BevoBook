import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useContext, useEffect, useRef, useState } from 'react';
// import { ChatContext } from './ChatContext';
import { MessageProps } from '@/components/Message';

interface ChatInputProps {
  onNewMessage: (newMessage: MessageProps) => void;
  isDisabled?: boolean;
}

const ChatInput = ({ onNewMessage, isDisabled }: ChatInputProps) => {
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (!(response === '') && !isLoading) {
      // Now, this will only run after `response` is set and `isLoading` is false
      onNewMessage({ message: response, isUserMessage: false });
      setResponse(''); // Reset response to null after processing
      setMessage(''); // Clear message input
    }
  }, [response, isLoading, onNewMessage]);

  const handleInputSubmission = async (message: string) => {
    if (!isLoading) {
      await queryAPI();
    }

    // console.log('SUBMITTED MESSAGE: ' + message);
    // // queryAPI();
    // setIsLoading(true);
    // queryAPI();

    // console.log('RESPONSE: ');
    // console.log(response);
    // if (response === '') {
    //   setResponse('This was an empty string');
    // }
    // onNewMessage({ message: response, isUserMessage: false });
    // setMessage('');
  };

  const queryAPI = async () => {
    setIsLoading(true);
    const fetchURL = `https://server.theanthonywang.com/chatbot`;
    const tempMessage = message;
    setMessage('');
    try{
      const fetchResponse = await fetch(fetchURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the headers to inform the server about the type of the content
      },
      body: JSON.stringify({ text: tempMessage }),
      });
      const data = await fetchResponse.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
    // const body = JSON.stringify({
    //   text: message,
    // });
    // fetch(fetchURL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json', // Set the headers to inform the server about the type of the content
    //   },
    //   body: body,
    // })
    //   .then((response) => response.json()) // Convert the response to JSON
    //   .then((data) => {
    //     setResponse(data); // Store the response in the state variable
    //     setIsLoading(false);
    //     console.log(response);
    //     console.log(data);
    //   })
    //   .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="absolute bottom-0 left-0 w-full">
      {/* <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"> */}
      <div className="mx-2 flex flex-row gap-3 ">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex flex-col w-full flex-grow p-4">
            <div className="relative">
              <Textarea
                rows={1}
                ref={textareaRef}
                autoFocus
                onChange={handleInputChange}
                value={message || ''}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();

                    handleInputSubmission(message);

                    textareaRef.current?.focus();
                  }
                }}
                placeholder="Enter your question..."
                className="resize-none pr-12 text-base py-3 scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
              />

              <Button
                disabled={isLoading || isDisabled}
                className="absolute bottom-1.5 right-[8px]"
                aria-label="send message"
                onClick={() => {
                  handleInputSubmission(message);

                  textareaRef.current?.focus();
                }}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
