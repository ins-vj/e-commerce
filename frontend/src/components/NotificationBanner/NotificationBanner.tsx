import React from 'react';
import { NotificationItem } from './NotificationItem';
import { LucideIcon } from 'lucide-react';

interface NotificationBannerProps {
  text: string;
  icon?: LucideIcon;
  backgroundColor?: string;
  repeatingItems?: number;
}

export function NotificationBanner({ 
  text, 
  icon, 
  backgroundColor = 'bg-red-600',
  repeatingItems = 8 
}: NotificationBannerProps) {
  const items = Array(repeatingItems).fill(null);

  return (
    <div className={`h-[7vh] ${backgroundColor} overflow-hidden relative`}>
      <div className="flex absolute left-0 top-0 animate-marquee">
        <div className="flex items-center whitespace-nowrap py-2 gap-8">
          {items.map((_, index) => (
            <NotificationItem key={`first-${index}`} text={text} icon={icon} />
          ))}
        </div>
      </div>
      <div className="flex absolute left-0 top-0 animate-marquee2">
        <div className="flex items-center whitespace-nowrap py-2 gap-8">
          {items.map((_, index) => (
            <NotificationItem key={`second-${index}`} text={text} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}