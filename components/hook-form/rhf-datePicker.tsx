import { isValid, parseISO } from 'date-fns';
import { Controller, useFormContext } from 'react-hook-form';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// ----------------------------------------------------------------------

type Props = {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
  [other: string]: any;
};

export default function RHFDatePicker({ name, helperText, label, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          label={label}
          value={field.value}
          onChange={(newValue) => {
            field.onChange(newValue);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!error,
              helperText: error ? error?.message : helperText,
              ...other,
            },
          }}
        />
      )}
    />
  );
}

export const parseDate = (dateValue: any): Date => {
  if (!dateValue) return new Date();

  // If it's already a Date object and valid
  if (dateValue instanceof Date && isValid(dateValue)) {
    return dateValue;
  }

  // If it's a string, try to parse it
  if (typeof dateValue === 'string') {
    try {
      const parsedDate = parseISO(dateValue);
      return isValid(parsedDate) ? parsedDate : new Date();
    } catch {
      return new Date();
    }
  }

  return new Date();
};
