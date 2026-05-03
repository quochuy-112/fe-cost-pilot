'use client';

import React from 'react';
import clsx from 'clsx';
import { useDeleteProject } from '../hooks/useDeleteProject';
import { Project } from '../types';
import { Loader2, AlertTriangle, X, Trash2 } from 'lucide-react';

interface DeleteProjectConfirmProps {
    project: Project;
    onSuccess: () => void;
    onCancel: () => void;
}

export const DeleteProjectConfirm = ({ project, onSuccess, onCancel }: DeleteProjectConfirmProps) => {
    const { deleteProject, isLoading, error } = useDeleteProject({
        onSuccess,
    });

    const handleDelete = async () => {
        try {
            await deleteProject(project.id);
        } catch (err) {
            console.error('Failed to delete project:', err);
        }
    };

    return (
        <div
            className={clsx(
                "relative",
                "overflow-hidden",
                "bg-background",
                "p-8",
                "text-center"
            )}
        >
            <div className="flex justify-center mb-6">
                <div
                    className={clsx(
                        "p-4",
                        "bg-red-50 dark:bg-red-900/10",
                        "rounded-2xl"
                    )}
                >
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                </div>
            </div>

            <h2
                className={clsx(
                    "text-2xl font-bold",
                    "text-foreground",
                    "mb-2"
                )}
            >
                Delete Project?
            </h2>
            <p className="text-muted-foreground mb-8">
                Are you sure you want to delete <span className="font-bold text-foreground">"{project.projectName}"</span>? 
                This action cannot be undone and all associated data will be permanently removed.
            </p>

            {error && (
                <div
                    className={clsx(
                        "mb-6",
                        "p-3",
                        "text-sm text-red-500",
                        "bg-red-50 dark:bg-red-900/10",
                        "border border-red-200 dark:border-red-900/30",
                        "rounded-lg",
                        "animate-in fade-in slide-in-from-top-1",
                        "text-left"
                    )}
                >
                    <p className="font-semibold flex items-center gap-2">
                        <X className="w-4 h-4" />
                        Deletion Failed
                    </p>
                    <p className="mt-1 opacity-80">{error.message}</p>
                </div>
            )}

            <div
                className={clsx(
                    "flex flex-col sm:flex-row",
                    "items-center",
                    "gap-3"
                )}
            >
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isLoading}
                    className={clsx(
                        "w-full",
                        "px-6 py-3",
                        "rounded-xl",
                        "text-sm font-semibold",
                        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                        "transition-colors",
                        "border border-border",
                        "disabled:opacity-50"
                    )}
                >
                    Cancel, keep it
                </button>
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isLoading}
                    className={clsx(
                        "w-full",
                        "px-6 py-3",
                        "rounded-xl",
                        "text-sm font-semibold",
                        "bg-red-500 text-white",
                        "hover:bg-red-600",
                        "transition-all",
                        "flex items-center justify-center gap-2",
                        "shadow-lg shadow-red-500/20",
                        "disabled:opacity-70"
                    )}
                >
                    {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <Trash2 className="w-4 h-4" />
                    )}
                    Yes, delete project
                </button>
            </div>
        </div>
    );
};
