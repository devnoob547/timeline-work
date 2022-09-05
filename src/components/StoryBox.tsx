import React, { HTMLAttributes } from 'react';
import { Popover, Transition } from '@headlessui/react';

interface StoryBoxType {
  time: string;
  children?: React.ReactNode;
}

export function StoryBox({ time, children }: StoryBoxType) {
  return (
    <div className="flex items-center justify-center text-white max-w-3xl relative">
      <div className="flex flex-col items-end">
        <p className='text-xs'>ano</p>
        <p className='text-lg'>{time}</p>
      </div>
      <div className='mx-4 bg-black p-8 rounded-md font-light text-sm'>
        {children}
      </div>
    </div>
  )
}