import { Stack } from "@mui/joy";
import Logo from './Logo'
import Operate from './Operate'
export default function FullWidthGrid() {
  return (
    <>
      <Stack
      className='ui-header'
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo /> <Operate/>
      </Stack>
    </>
  );
}
