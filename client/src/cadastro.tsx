import logo from './assets/logo.png'
import image4 from './assets/image4.svg'

export default function Cadastro (){
    return(
        <>
            <nav className="bg-white border-gray-200" id="navbar">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                          <div className="px-4 py-3">
                          </div>
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
                                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Descubra</a>
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
    

            <div className="justify-center flex  mr-5 ml-5">
                <img src={image4} className="rounded-l-[70px] shadow-2xl w-[600px] hidden lg:inline-flex h-[500px]"/>
                <div className="p-6 space-y-8 sm:p-8 bg-white rounded-r-[70px] w-full h-[500px] lg:shadow-2xl lg:rounded-l-none lg:m-0 md:rounded-r-[70px]">
                    <h2 className="text-2xl font-bold justify-center align-center flex text-[#24B1EE]">
                        CADASTRO
                    </h2>

                    <p className="font-bold justify-center align-center flex">Preparado para iniciar sua jornada? 🔥</p>

                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#505050]">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[18px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#505050] ">Senha</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[18px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-[#505050] ">Repetir senha</label>
                            <input type="password" id="repeat-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[18px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            <div className="space-y-3 mt-[5px]">
                                <label htmlFor="terms" className="ms-2 text-sm font-medium text-[#505050]">Já possui uma conta? <a href="/login" className="text-blue-600 hover:underline">Fazer login</a></label>
                                <button type="submit" className="px-5 py-3 text-base font-medium text-center text-white rounded-full focus:ring-4 focus:ring-blue-300 w-[35%] bg-[#24B1EE] justify-center flex">Cadastrar</button>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}