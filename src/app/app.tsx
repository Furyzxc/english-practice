import { Speaker } from "@/components/speaker";
import { Container } from "@mui/material";
import { Input } from "@/components/input/page";


export const App = () =>  {


  return (
    <Container sx={{textAlign:"center", pt: "180px"}}>
      <Speaker />
       <Input />
      <Speaker />
    </Container>
  )
}

