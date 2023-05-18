import { Box, Input, useTheme } from "native-base";

const NewExerciseForm=()=>{

    const theme = useTheme();

    return(
        <Box alignItems="center">
        <Input size="xl" placeholder="Nombre" w="100%" 
            style={{
                backgroundColor: theme.colors.white
            }}
        />
    </Box>
    )
}

export default NewExerciseForm;