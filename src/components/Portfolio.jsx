export default function Portfolio({ projects }) {
    return (
        <div>
            <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '2rem',
            }}
            >
                <h2 className="text-5xl font-bold text-sky-400">Portfolio</h2>
            </div>
            <div className="flex-wrap justify-center"
            style={{
                display: 'flex',
                gap: '1rem',
                padding: '2rem 5rem',
            }}>
                {projects.map((project) => (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3" key={project.id}>
                        <img className="rounded-t-lg" src={project.src} alt="" />
                        <div className="p-5">
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h3>
                            <a href={project.repo} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <box-icon type='logo' name='github'></box-icon>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}