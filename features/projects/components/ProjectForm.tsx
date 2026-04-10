'use client';

import React, { useState, useEffect } from 'react';
import { Project, ProjectFormValues } from '../types';
import { Loader2, Key, Globe, Cpu, Activity, X, Lock, Check } from 'lucide-react';

interface ProjectFormProps {
    // this prop is optional because it is only using for update
    initialData?: Project;

    onSubmit: (data: ProjectFormValues) => Promise<void>;
    onCancel: () => void;
    isLoading: boolean;
    error: Error | null;
    title: string;
    submitLabel: string;
}

const defaultFormValues: ProjectFormValues = {
    projectName: '',
    llmKey: '',
    provider: 'openai',
    rateLimit: 100,
};

export const ProjectForm = ({
    initialData,
    onSubmit,
    onCancel,
    isLoading,
    error,
    title,
    submitLabel,
}: ProjectFormProps) => {

    // first time set default form values
    const [formData, setFormData] = useState<ProjectFormValues>(defaultFormValues);

    // if initialData is provided, set form values to initialData
    // reset form values when initialData is changed
    useEffect(() => {
        if (initialData) {
            setFormData({
                projectName: initialData.projectName || '',
                llmKey: initialData.llmKey || '',
                provider: initialData.provider || 'openai',
                rateLimit: initialData.rateLimit || 100,
            });
        } else {
            setFormData(defaultFormValues);
        }
    }, [initialData]);

    // handle form submit for create and update
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    // handle for input and select change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        // get name (ex: projectName, llmKey, ...), value (ex: "", "openai", ...), type (ex: "text", "number", ...) from event target
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,

            // only update the field if that is changed
            // if the field is number, convert it to number, otherwise keep it as string
            [name]: type === 'number' ? Number(value) : value,
        }));
    };

    return (
        <div className="relative overflow-hidden bg-background p-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Configure your project settings and LLM integration
                    </p>
                </div>
                <button
                    type="button"
                    onClick={onCancel}
                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-blue-500" />
                            Project Name
                        </label>
                        <input
                            required
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            placeholder="e.g., Marketing AI Assistant"
                            className="w-full px-4 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                <Globe className="w-4 h-4 text-emerald-500" />
                                LLM Provider
                            </label>
                            <select
                                name="provider"
                                value={formData.provider}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                            >
                                <option value="openai">OpenAI</option>
                                <option value="anthropic">Anthropic</option>
                                <option value="google">Google Gemini</option>
                                <option value="custom">Custom Provider</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                <Key className="w-4 h-4 text-amber-500" />
                                API Key
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="llmKey"
                                    value={formData.llmKey}
                                    onChange={handleChange}
                                    placeholder="Enter your LLM API Key"
                                    className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-50" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <div className="space-y-2 col-span-1 md:col-span-2 border-b border-border pb-2">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Activity className="w-3 h-3" />
                                Usage Limits
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold flex items-center gap-2">
                                Rate Limit (/min)
                            </label>
                            <input
                                type="number"
                                name="rateLimit"
                                value={formData.rateLimit}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg animate-in fade-in slide-in-from-top-1">
                        <p className="font-semibold flex items-center gap-2">
                            <X className="w-4 h-4" />
                            Operation Failed
                        </p>
                        <p className="mt-1 opacity-80">{error.message}</p>
                    </div>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-border mt-6">
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isLoading}
                        className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-border disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-[2] px-4 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Check className="w-4 h-4" />
                        )}
                        {submitLabel}
                    </button>
                </div>
            </form>
        </div>
    );
};
