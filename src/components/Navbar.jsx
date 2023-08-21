// import NavLinks from './NavLinks';

// const styles = {
//     wrapper: {
//         padding: '5rem 0',
//     }
// }

function Navbar(props) {
    const {
        currentComponent,
        handleChange,
    } = props;
    const comps = ['about', 'portfolio', 'contact', 'resume'];

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center" href="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kendall S. Portfolio</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className={ props.currentComponent === comps[0] ? "nav-item is-active" : "nav-item"} key={comps[0]}>
                            <a onClick={() => handleChange('About')} className={`${props.currentComponent === comps[0] ? "nav-link active" : "nav-link"} block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500` }href="#about">About Me</a>
                        </li>
                        <li className={ props.currentComponent === comps[1] ? "nav-item is-active" : "nav-item"} key={comps[1]}>
                            <a onClick={() => handleChange('Portfolio')} className={`${props.currentComponent === comps[1] ? "nav-link active" : "nav-link"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} href="#portfolio">Portfolio</a>
                        </li>
                        <li className={ props.currentComponent === comps[2] ? "nav-item is-active" : "nav-item"} key={comps[2]}>
                            <a onClick={() => handleChange('Contact')} className={`${props.currentComponent === comps[2] ? "nav-link active" : "nav-link"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} href="#contact">Contact</a>  
                        </li>
                        <li className={ props.currentComponent === comps[3] ? "nav-item is-active" : "nav-item"} key={comps[3]}>
                            <a  onClick={() => handleChange('Resume')} className={`${props.currentComponent === comps[3] ? "nav-link active" : "nav-link"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`} href="#resume">Resume</a>    
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;