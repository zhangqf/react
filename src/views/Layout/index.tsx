import Header from './modules/Header'
import { Stack } from '@mui/joy';
import Navigate from './modules/Navigate';
import Article from './modules/Article';
export default function Layout () {
  return  (
    <Stack
    sx={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Stack sx={{ width: "100%" }}><Header/></Stack>
    <Stack 
    direction="row"
    sx={{ width: "100%"}}
    >
      <Stack><Navigate/></Stack>
      <Stack><Article/></Stack>
    </Stack>
  </Stack>
  )
}
