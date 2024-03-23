import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useContext, useRef, useState } from 'react';
// import { ChatContext } from './ChatContext';

interface ChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  //   const { addMessage, handleInputChange, isLoading, message } =
  //   const { addMessage, isLoading } = useContext(ChatContext);
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleInputSubmission = (message: string) => {
    console.log('SUBMITTED MESSAGE: ' + message);
    queryAPI();
    setMessage('');
  };

  function queryAPI() {
    const fetchURL = `http://40.124.115.165/chatbot`;
    // console.log(fetchURL)
    const body = JSON.stringify({
      text: message,
    });
    console.log(body);
    fetch(fetchURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the headers to inform the server about the type of the content
      },
      body: body,
    })
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setResponse(data); // Store the response in the state variable
        console.log(response);
        console.log(data);
      })
      .catch((error) => console.error('Error:', error));
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
