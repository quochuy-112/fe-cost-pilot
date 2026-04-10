'use client';

import React from 'react';
import { Project } from '../types';
import { LayoutGrid, Calendar, Clock, Edit2, Trash2 } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
    onDelete: (project: Project) => void;
}

export const ProjectCard = ({ project, onEdit, onDelete }: ProjectCardProps) => {
    return (
        <div className="group bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all p-6 cursor-pointer hover:border-primary/50 relative">
            <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <LayoutGrid className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100/50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                        {project.provider || 'Default'}
                    </span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit(project);
                            }}
                            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-muted-foreground hover:text-primary transition-colors"
                            title="Edit project"
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(project);
                            }}
                            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-muted-foreground hover:text-red-500 transition-colors"
                            title="Delete project"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {project.projectName}
            </h3>
            
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                API Key: {project.llmKey ? '••••••••' + project.llmKey.slice(-4) : 'Not configured'}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
                <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">Rate Limit</p>
                    <p className="text-sm font-semibold">{project.rateLimit ?? 'N/A'} /min</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">Total Limit</p>
                    <p className="text-sm font-semibold">{project.totalToken ? `${(project.totalToken / 1000).toFixed(1)}k` : 'Unlimited'}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'Today'}
                </span>
                <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.updatedAt ? 'Updated ' + new Date(project.updatedAt).toLocaleDateString() : 'Just now'}
                </span>
            </div>
        </div>
    );
};
