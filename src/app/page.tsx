'use client';
import ChatInput from '@/components/ChatInput';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Message from '@/components/Message';
import Messages from '@/components/Messages';
import Image from 'next/image';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2">
          <div className="flex-1 justify-between flex flex-co mb-28">
            <Messages/>
          </div>

          <ChatInput />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
