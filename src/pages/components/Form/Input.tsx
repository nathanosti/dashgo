import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
}

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="email">{label}</FormLabel>
        <ChakraInput
          id={name}
          type={props.type}
          focusBorderColor="pink.500"
          backgroundColor="gray.900"
          variant="filled"
          size="lg"
          _hover={{
            background: "gray.900",
          }}
        />
      </FormControl>
    </>
  );
}
