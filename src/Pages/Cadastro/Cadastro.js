import { Input } from '@chakra-ui/react'
import { Fundo } from "./Cadastro.jsx"
import { CardCadastro } from './Cadastro.jsx'
import ImgLogo from '../../assets/logo.png'
import { Imagem} from './Cadastro.jsx'
import { Titulo } from './Cadastro.jsx'
import { Estilização } from './Cadastro.jsx'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BotaoCadastro } from './Cadastro.jsx'
import { Link } from 'react-router-dom'

 
function Cadastro (){
    return (
        <>
        <Fundo>
        <Imagem src={ImgLogo}/>
         <CardCadastro>
            <Titulo>CADASTRO</Titulo>
            <Estilização>
            <Input variant='nome' placeholder='nome' />
            </Estilização>
            <Estilização>
            <Input variant='senha' placeholder='senha' />
            </Estilização>
            <Estilização>
            <Input variant='senha' placeholder='confirme sua senha' />
            </Estilização>
            <Estilização>
            <Input variant='email' placeholder='email' />
            </Estilização>
            <BotaoCadastro>
            <Button colorScheme='gray' variant='outline' fontSize= '20px' color='white'>
                <Link to='/Inicial'>
                ENTRAR
                </Link>
                </Button>
            </BotaoCadastro>
         </CardCadastro>
        </Fundo>
        </>
    )
} 

export default Cadastro