import { useMantineTheme } from "@mantine/styles";

export const MainBlue =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicBlues[0]
}
export const DarkBlue =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicBlues[1]
}
export const Black =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicColors[0]
}
export const White =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicColors[1]
}