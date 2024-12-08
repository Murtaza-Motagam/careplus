
export interface InputType {
    label?: string;
    placeholder?: string;
    parentClassName?: string;
    className?: string;
    id?: string;
    type: string;
    value?: any;
    htmlFor?: string;
    register?: string;
    min?: number;
    max?: number;
    errors?: string;
    showInline?: boolean;
    rest?: any;
}

export interface PasswordType {
    label?: string;
    placeholder?: string;
    parentClassName?: string;
    className?: string;
    id?: string;
    value?: any;
    htmlFor?: string;
    register?: string;
    min?: number;
    max?: number;
    errors?: string;
    rest?: any;
}
export interface CheckBoxTypeProps {
    label?: string;
    parentClassName?: string;
    className?: string;
    id?: string;
    value?: any;
    htmlFor?: string;
    register?: string;
    checked?: boolean;
    errors?: string;
    disabled?: boolean;
    rest?: any;
}
export interface TextareaProps {
    label?: string;
    placeholder?: string;
    parentClassName?: string;
    className?: string;
    id?: string;
    value?: any;
    htmlFor?: string;
    register?: string;
    min?: number;
    max?: number;
    showInline?: boolean;
    errors?: string;
    rest?: any;
}

export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    title?: string;
    variant?: "secondary" | "outline" | "default" | "destructive" | "ghost" | "link" | null | undefined;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    onKeyDown?: () => void;
    onKeyPress?: () => void;
}

export interface LinkProps {
    title: string;
    href?: Url;
    icon?: React.ReactNode;
    className?: string;
    target?: string;
}

export interface RegisterValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface loginValues {
    email: string;
    password: string;
}

export interface AuthWrapperProps {
    children: React.ReactNode;
    parentClassName?: string;
}
export interface RadioButtonProps {
    label?: string;
    parentClassName?: string;
    className?: string;
    id?: string;
    value?: any;
    htmlFor?: string;
    register?: string;
    checked?: boolean;
    errors?: string;
    disabled?: boolean;
    rest?: any;
}

export interface Gender {
    value: string;
    label: string;
}

export interface PatientProps {
    fullName: string;
    email: string;
    mobNo: string;
    dob: Date;
    genderId?: string;
    genderNm: string;
    cityId?: string;
    cityNm: string;
    stateId?: string;
    stateNm: string;
}
export interface AppointmentProps {
    appointmentDateTime: Date;
    reasonForVisit: string;
    appointmentStatus?: string;
    location: string;
    appointmentType: string;
    notes?: string;
}
export interface UserResponse {
    details: {
        id: number;
        name: string;
        email: string;
    };
}