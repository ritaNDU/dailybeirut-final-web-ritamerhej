export interface Props {
  placeholder: string;
  handleChange: (e: string | React.ChangeEvent<any>) => void;
  handleBlur?: (e: any) => void;
  value: string;
  error?: string;
  touched?: boolean;
}
