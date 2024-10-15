import { useState, useEffect } from 'react'
import { CssVarsProvider ,useColorScheme } from '@mui/joy/styles';
import { useDispatch } from 'react-redux';

import { fetchLogin } from '@/store/modules/user';

import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';



function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const [error, setError] = useState('')
  const handlerSubmit = () => {
    console.log('button')
    if(!email || !passwd){
      setError('用户名和密码不能为空')
      return
    }
    setError('')
    const formdata = {
      user_name: email,
      password: passwd
    }
    
    dispatch(fetchLogin(formdata) as any)

    console.log("Email:", email)
    console.log("Email:", passwd)
  }
  return (
    <CssVarsProvider>
    <main>
      <ModeToggle />
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        color={error?"danger":'neutral'}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>欢迎!</b>
          </Typography>
          {/* <Typography level="body-sm">继续登录</Typography> */}
        </div>
        { error && (
          <Typography level="body-sm" sx={{color: 'red'}}>{error}</Typography>
          )
        }
        <FormControl>
          <FormLabel>用户名</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            value={email}
            placeholder="请输入用户名"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>密码</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            value={passwd}
            placeholder="请输入密码"
            onChange={(e) => setPasswd(e.target.value)}
          />
        </FormControl>
        <Button onClick={handlerSubmit} sx={{ mt: 1 /* margin top */ }}>登  录</Button>
        <Typography
          endDecorator={<Link href="/sign-up">注  册</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          没有账号？去
        </Typography>
      </Sheet>
    </main>
    </CssVarsProvider>
  );
}