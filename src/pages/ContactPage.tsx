import { Box, Stack, Typography, useTheme } from "@mui/material";

const ContactPage = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-around",
                p: 4,
            }}
        >
            <Stack spacing={3}>
               Test
            </Stack>
        </Box>
    );
};

export default ContactPage;
