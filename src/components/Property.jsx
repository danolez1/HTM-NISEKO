/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import placeholder_house from '../placeholder_house.jpg';


export default function Property({ data }) {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className="max-w-max max-h-[500px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={data.images[0] ?? placeholder_house} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description.substring(0, 64)} {data.description.length > 64 ? "..." : ""}</p>
                    <button type="button" onClick={() => setModal(true)} className="inline-flex items-center py-3 px-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            <PropertyModal open={modal} onClose={() => setModal(false)} data={data}></PropertyModal>
        </>
    );
}


function PropertyModal({ open, onClose, data }) {
    return (<div className={`fixed inset-0 ${open ? '' : 'hidden'} bg-slate-900/50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/* <!-- Modal content --> */}
            <div onClick={e => e.preventDefault()} className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button onClick={onClose} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="property-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                {/* <!-- Modal header --> */}
                <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                        Property Information
                    </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6">
                    <p className="max-w-96 text-md font-normal text-gray-500 dark:text-gray-400">{data.description}</p>
                    <ul className="my-4 space-y-3">
                        <a className="inline-flex items-center text-sm text-gray-500 hover:underline font-bold">
                            Amenities :</a>
                        {Object.values(data.amenities).map((amenity, i) => amenity ? (<li key={i}>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <svg aria-hidden="true" className="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"></path><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">{Object.keys(data.amenities)[i].toUpperCase()}</span>
                            </a>
                        </li>) : null)}
                        <li>
                            <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span className="flex-1 ml-3 whitespace-nowrap">Available</span>
                                {data.online ? <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-white bg-green-500 rounded ">Online</span> : <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Offline</span>}
                            </a>
                        </li>

                    </ul>
                    <div>
                        <a className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                            <svg aria-hidden="true" className="mr-2 w-3 h-3" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                            More inquires? Contact our office</a>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


