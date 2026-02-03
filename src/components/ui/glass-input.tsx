'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return <input ref={ref} type={type} className={cn('glass-input h-11', className)} {...props} />;
  }
);

GlassInput.displayName = 'GlassInput';

export interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea ref={ref} className={cn('glass-input min-h-[140px] resize-none py-3', className)} {...props} />;
  }
);

GlassTextarea.displayName = 'GlassTextarea';

export interface GlassSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const GlassSelect = forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select ref={ref} className={cn('glass-input h-11 appearance-none pr-10', className)} {...props}>
        {children}
      </select>
    );
  }
);

GlassSelect.displayName = 'GlassSelect';
