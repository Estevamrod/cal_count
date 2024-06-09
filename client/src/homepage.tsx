import logo from './assets/logo.png'
import picture1 from './assets/picture1.jpg'
import picture2 from './assets/picture2.png'
import picture3 from './assets/picture3.jpg'
import { useState } from 'react'
import axios from 'axios'

function homepage() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const send_message = async() => {
        try {
            const request = await axios.post('http://localhost:1024/v1/send_message', {
                name: name,
                email: email,
                message: message
            })
            if (request.status != 200) {
                console.log(request.data.msg)
                return request.data.msg
            }
            setTimeout(() => {
                console.log( request.data.msg)
                window.location.href = '/'
                return request.data.msg
            },1000)
        } catch (e) {
            console.log(e)
            return e
        }
    }

  return (
    <>
      <nav className="bg-white border-gray-200" id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="CalCount Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">CalCount</span>
            </a>

            {/* <!--Configuração do usuário--> */}
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="flex text-sm bg-[#f8fafc] rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Abrir menu de usuário</span>
                </button>
            
            
            
                {/* <!-- Dropdown menu --> */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                  <div className="px-4 py-3"></div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Menu</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Configurações</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sair</a>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
        
        
        
            {/* <!--NavBar--> */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Descubra</a>
                        </li>
                        <li>
                            <a href="#Sobre" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
                        </li>
                        <li>
                            <a href="#Contato" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contato</a>
                        </li>
                    </ul>
                </div>
        </div>
  </nav>

  <h1 className="justify-center align-center flex mt-10 text-neutral-500 font-bold text-xl mb-8 text-center">SUA VIDA MAIS SAUDÁVEL COMEÇA AQUI. 🍎</h1>


  {/* <!--Cards--> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{justifyItems:'center', marginRight:'2%', marginLeft: '2%'}} id="descubra">  
        <div className="bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg " src={picture1} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Perca Peso</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Alcance seus objetivos de perda de peso com facilidade.</p>
            </div>
        </div>  
        <div className="bg-white border border-gray-200 rounded-lg shadow grid min-[320px]:grid-cols-1 max-[600px]:grid-cols-3">
            <a href="#">
                <img className="rounded-t-lg " src={picture2} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ganhe Massa Muscular</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Maximize seus ganhos de massa muscular com nosso app.</p>
            </div>
        </div>  
        <div className="bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="rounded-t-lg " src={picture3} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Alimentação Saudável</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">Transforme sua alimentação com nosso app.</p>
            </div>
        </div>  
    </div>

    <div className="mt-10 text-white">.</div>

    <h1 className="justify-center align-center flex mt-10 p-0 text-neutral-500 font-bold text-xl mb-8">SOBRE 📘</h1>

    {/* <!--Parte do Sobre--> */}
    <div className="grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-24 gap-8" style={{justifyItems:'center', marginRight: '2%', marginLeft:'2%'}} id="Sobre">
      <div className="flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow w-64 h-64 mb-8">
        <img src="https://avatars.githubusercontent.com/u/139374026?v=4" alt="César img" className="rounded-full w-1/2"/>
        <h1 className="mt-4"><b><a href="https://github.com/CesarAlexandreTeodoro" className="hover:text-blue-700">César Teodoro</a></b></h1>
        <span>Design e Front-end</span>
      </div>
        <div className="flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow w-64 h-64 mb-8">
          <img src="https://avatars.githubusercontent.com/u/115419827?v=4" alt="César img" className="rounded-full w-1/2"/>
          <h1 className="mt-4"><b><a href="https://github.com/Estevamrod" className="hover:text-blue-700">Estevam Otavio</a></b></h1>
          <span>Backend</span>
        </div>
        <div className="flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow w-64 h-64 mb-8">
          <img src="https://avatars.githubusercontent.com/u/141373268?v=4" alt="César img" className="rounded-full w-1/2"/>
          <h1 className="mt-4"><b><a href="https://github.com/Lim4S2" className="hover:text-blue-700">Pedro Lima</a></b></h1>
          <span>Front-end</span>
        </div>
        <div className="flex items-center justify-center flex-col bg-white border border-gray-200 rounded-lg shadow w-64 h-64 mb-8">
          <img src="https://avatars.githubusercontent.com/u/161462991?v=4" alt="César img" className="rounded-full w-1/2"/>
          <h1 className="mt-4"><b><a href="https://github.com/ViniciusDeCarli" className="hover:text-blue-700">Vinicius de Carli</a></b></h1>
          <span>Front-end</span>
        </div>
    </div>

    <div className="grid grid-cols-1 items-center gap-4 mb-8" style={{justifyContent: 'center', alignItems: 'center', marginLeft: '2%', marginRight: '2%'}}> 
      <span className="text-center md:text-left col-span-2 text-[#191919]"><b>🍽 Seu aliado na jornada para uma vida mais saudável! Desenvolvido por quatro alunos da Escola Técnica Estadual Deputado Salim Sedeh, em Leme-SP, o CalCount é o seu destino para calcular calorias, seja para perda de peso, alimentação saudável ou ganho de massa. Com o CalCount, simplificamos o caminho para alcançar seus objetivos de forma eficaz e acessível. Comece hoje mesmo sua jornada para uma vida melhor com o CalCount! 🔥</b></span>
    </div>

    <b><h1 className="justify-center align-center flex mt-10 p-0 text-neutral-500 font-bold text-xl mb-8"> CONTATO ☎️</h1></b>
    <div className="flex flex-col justify-center items-start mx-auto w-1/2" id="Contato">
        <h1 className="text-[18px] pb-[6px]"><b>Nome</b></h1>
        <input type="text" onChange={(event) => setName(event.target.value)} className="rounded-[16px] bg-white w-full text-[16px] pl-[15px] pr-[15px] h-[36px] rounded-lg mb-8"/>
        <h1 className="text-[18px] pt-[20px] pb-[6px]"><b>Email</b></h1>
        <input type="text" onChange={(event) => setEmail(event.target.value)} className="rounded-[16px] bg-white w-full text-[16px] pl-[15px] pr-[15px] h-[36px] rounded-lg mb-8"/>
        <h1 className="text-[18px] pt-[20px] pb-[6px]"><b>Mensagem</b></h1>
        <textarea onChange={(event) => setMessage(event.target.value)} className="rounded-lg bg-white w-full text-[16px] pl-[15px] pr-[15px] h-[150px]"></textarea>
    </div>
    <div className="flex justify-center space-x-4">
        <button className="bg-blue-600 p-2 rounded-xl text-white p-3 mt-8 mb-8" onClick={send_message}><b>Enviar</b></button>
        <button className="bg-red-600 p-2 rounded-xl text-white p-3 mt-8 mb-8"><b>Limpar</b></button>
    </div>
    <h1 className="text-center text-[#191919] hover:text-blue-700 mb-4"><a href="#"><b>©Copyright</b></a></h1>
    </>
  )
}

export default homepage;
