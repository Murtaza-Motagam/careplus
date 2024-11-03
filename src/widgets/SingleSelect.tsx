'use client'
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react'
import Select, { GroupBase, OptionsOrGroups } from 'react-select'
import { useTheme } from "next-themes"
import InfoIcon from '@/Icons/InfoIcon';

interface Option {
    value: string;
    label: string;
}

interface SingleSelectProps {
    label?: string;
    options: OptionsOrGroups<Option, GroupBase<Option>>;
    placeholder?: string;
    name?: string;
    onChangeSelect?: (selectedOption: Option | null) => void;
    isSearchable?: boolean;
    isIcon?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
    isClearable?: boolean;
    onInputChange?: (inputValue: string) => void;
    errors?: string;
    loading?: boolean;
    [key: string]: any;  // This allows additional props via rest
}

const SingleSelect: React.FC<SingleSelectProps> = ({
    label,
    options,
    placeholder,
    name,
    onChangeSelect = () => { },
    isSearchable = true,
    isIcon = false,
    icon,
    disabled,
    isClearable = true,
    onInputChange,
    errors,
    loading = false,
    ...rest
}) => {
    const { theme } = useTheme();

    const [value, setValue] = useState<Option[]>();

    useEffect(() => {
        setValue(rest.value || '');
    }, [rest.value]);

    const handleChange = (changedValue: any) => {
        setValue(changedValue);
        onChangeSelect(changedValue);
    };

    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? '#020817' : '#ffffff',
            borderColor: state.isFocused ? (theme === 'dark' ? '#ffffff' : '#000000') : (theme === 'dark' ? '#444444' : '#cccccc'),
            boxShadow: state.isFocused ? `0 0 0 1px ${theme === 'dark' ? '#ffffff' : '#000000'}` : undefined,
            borderRadius: '0.375rem',
            color: theme === 'dark' ? '#ffffff' : '#000000',
            '&:hover': {
                borderColor: theme === 'dark' ? '#ffffff' : '#000000',
            },
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? (theme === 'dark' ? '#1e3a8a' : '#3b82f6')
                : state.isFocused
                    ? (theme === 'dark' ? '#334155' : '#e2e8f0')
                    : 'transparent',
            color: state.isSelected
                ? (theme === 'dark' ? '#ffffff' : '#ffffff')
                : (theme === 'dark' ? '#ffffff' : '#000000'),
            '&:hover': {
                backgroundColor: theme === 'dark' ? '#334155' : '#e2e8f0',
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
            borderRadius: '0.375rem',
            boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: theme === 'dark' ? '#ffffff' : '#000000',
        }),
        input: (provided: any) => ({
            ...provided,
            color: theme === 'dark' ? '#ffffff' : '#000000', // Input text color for search
        }),
    };


    return (
        <div>
            {label && <Label className='text-gray-900 dark:text-gray-300'>{label}</Label>}
            <Select
                styles={customStyles}
                options={options}
                placeholder={placeholder}
                classNamePrefix={name}
                isSearchable={isSearchable}
                isClearable={isClearable}
                name={name}
                isLoading={loading}
                onChange={handleChange}
                onInputChange={onInputChange}
                value={value}
                isDisabled={disabled}
                {...rest}
            />
            {errors && (
                <div className="flex items-center justify-start">
                    <InfoIcon size={14} className='text-red-600' />
                    <p className='!ml-1 text-red-600 text-xs' >{errors}</p>
                </div>
            )}
        </div>
    )
}

export default SingleSelect;