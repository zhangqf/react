import { Typography, Avatar } from "@mui/joy";
import { Stack } from "@mui/joy";
export default function Logo() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Avatar color="primary" size="lg" variant="solid" />
      <Typography color="neutral" level="h3" noWrap variant="plain">
        Logo{" "}
      </Typography>
    </Stack>
  );
}
