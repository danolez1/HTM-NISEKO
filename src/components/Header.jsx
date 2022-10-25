import logo from '../logo.svg';
export default function Header({ searchBox }) {
    return (


        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded shadow-lg py-2 px-4">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <img className="cursor-pointer dark:bg-white p-1 rounded-full h-12" src={logo} alt="circle" />
                        <h2 className="font-normal text-2xl leading-6 text-gray-800 dark:text-white">HTM-Niseko</h2>
                    </div>



                    <div className="hidden md:flex flex-auto px-5 ">  {searchBox} </div>

                    {/* <!-- For medium and plus sized devices --> */}

                    <div className="flex space-x-5 justify-center items-center pl-2">
                        <div className="relative dark:bg-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
                            <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>
                </nav>
                {/* <!-- for smaller devcies --> */}

                <div className="block md:hidden w-full mt-5">
                    {/* <div onClick={console.log()} className="cursor-pointer px-4 py-3 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                    
                    </div> */}
                     {searchBox}
                </div>
            </div>
        </div>


    )
}
