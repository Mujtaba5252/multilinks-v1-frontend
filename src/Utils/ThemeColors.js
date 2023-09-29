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
export const LightGrey =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicColors[2]
}
export const Red =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicColors[3]
}
export const Amber =()=>{
    const theme=useMantineTheme();
    return theme.colors.basicColors[4]
}