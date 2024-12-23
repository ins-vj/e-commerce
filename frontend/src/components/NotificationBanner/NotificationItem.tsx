import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NotificationItemProps {
  text: string;
  icon?: LucideIcon;
}

export function NotificationItem({ text, icon: Icon }: NotificationItemProps) {
  return (
    <div className="animate-flash inline-flex items-center text-white font-bold text-xl gap-2">
      {Icon && <Icon className="animate-bounce" />}
      {text}
    </div>
  );
}