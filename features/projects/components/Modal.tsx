'use client';

import React, { useEffect } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    maxWidth?: string;
}

export const Modal = ({ isOpen, onClose, children, maxWidth = 'max-w-2xl' }: ModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className={clsx(
                "fixed inset-0",
                "z-50",
                "flex items-center justify-center",
                "p-4"
            )}
        >
            {/* Backdrop */}
            <div
                className={clsx(
                    "absolute inset-0",
                    "bg-background/80",
                    "backdrop-blur-sm",
                    "transition-opacity"
                )}
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div
                className={clsx(
                    "relative",
                    "w-full",
                    "bg-card",
                    "border border-border",
                    "rounded-2xl",
                    "shadow-2xl",
                    "overflow-hidden",
                    "animate-in zoom-in-95 fade-in duration-200",
                    maxWidth
                )}
            >
                {children}
            </div>
        </div>
    );
};
