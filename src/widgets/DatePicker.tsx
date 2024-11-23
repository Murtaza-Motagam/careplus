import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Control, useController } from "react-hook-form";
import Button from "./Button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { dateTimeDisplay } from "@/lib/common";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";

interface DatePickerProps {
    name: string;
    label?: string | undefined;
    control: Control<any>;
    placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label, control, placeholder = 'Pick a date' }) => {
    const {
        field: { value, onChange },
    } = useController({
        name,
        control,
    });

    return (
        <Popover>
            <div className=" flex flex-col gap-2">
                <Label className='text-gray-900 dark:text-gray-300'>{label}</Label>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        icon={<CalendarIcon />}
                        title={value ? dateTimeDisplay(value) : placeholder}
                    />
                </PopoverTrigger>
            </div>
            <PopoverContent className="w-full" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;