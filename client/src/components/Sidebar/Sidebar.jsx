// import { Link } from 'react-router-dom'
// import { ChevronDown, Menu } from 'lucide-react'

// export default function Sidebar() {
//     return (
//         <div className="w-64 bg-white  dark:text-white border-r">
//             <div className="p-4 border-b">
//                 <button className="flex items-center text-gray-700">
//                     <Menu className="mr-2" size={20} />
//                     Collapse
//                 </button>
//             </div>
//             <div className="p-4 border-b">
//                 <button className="flex items-center text-blue-600">
//                     <span className="mr-2">+</span>
//                     Create new
//                     <ChevronDown className="ml-auto" size={16} />
//                 </button>
//             </div>
//             <nav className="p-2">
//                 {[
//                     { name: 'Jobs', path: '/' },
//                     { name: 'Phone calls', path: '/phone-calls' },
//                     { name: 'Smart Sourcing', path: '/smart-sourcing' },
//                     { name: 'Candidates', path: '/candidates' },
//                     { name: 'Interviews', path: '/interviews' },
//                     { name: 'Analytics', path: '/analytics' },
//                     { name: 'Tools', path: '/tools' },
//                 ].map((item) => (
//                     <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block p-2 rounded ${item.name === 'Jobs' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
//                             }`}
//                     >
//                         {item.name}
//                         {['Interviews', 'Analytics', 'Tools'].includes(item.name) && (
//                             <ChevronDown className="float-right" size={16} />
//                         )}
//                     </Link>
//                 ))}
//             </nav>
//         </div>
//     )
// }


import { Link, useLocation } from 'react-router-dom'
import { Menu, Home, Search, Bookmark, FileText, User, ChevronDown } from 'lucide-react'

const navItems = [
    { icon: Home, label: 'Dashboard', path: '/Dashboard' },
    { icon: Search, label: 'Job Search', path: '/job-search' },
    { icon: Bookmark, label: 'Saved Jobs', path: '/saved-jobs' },
    { icon: FileText, label: 'Applications', path: '/applications' },
    // { name: 'Phone calls', path: '/phone-calls' },
    // { name: 'Smart Sourcing', path: '/smart-sourcing' },
    // { name: 'Candidates', path: '/candidates' },
    // { name: 'Interviews', path: '/interviews' },
    // { name: 'Analytics', path: '/analytics' },
    // { name: 'Tools', path: '/tools' },
    { icon: User, label: 'Profile', path: '/profile' },
]

export default function Sidebar() {
    const location = useLocation()

    return (
        <div className="w-64 bg-white dark:bg-gray-800 h-full dark:text-white overflow-y-auto">
            <div className="p-4 border-b">
                <button className="flex items-center dark:text-gray-50">
                    <Menu className="mr-2" size={20} />
                    Collapse
                </button>

            </div>
            <div className="p-4 border-b">
                <button className="flex items-center text-blue-600">
                    <span className="mr-2">+</span>
                    Create new
                    <ChevronDown className="ml-auto" size={16} />
                </button>
            </div>
            <nav className="mt-5 px-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150 ${location.pathname === item.path
                            ? 'text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700'
                            }`}
                    >
                        <item.icon
                            className={`mr-4 h-6 w-6 ${location.pathname === item.path
                                ? 'text-gray-500 dark:text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300'
                                }`}
                        />
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}