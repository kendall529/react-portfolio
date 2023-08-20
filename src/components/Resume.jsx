export default function Resume({ proficiencies }) {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="text-5xl font-bold text-sky-400 py-5">Resume</h2>
            </div>
            <div className="flex justify-center my-5">
                <a className="text-lg text-sky-400" href=""><box-icon name='link-external'></box-icon>  Link to Resume</a>
            </div>
            <div className="flex justify-center">
                <h4 className="text-3xl my-5 text-zinc-900">Proficiencies List</h4>
            </div>
            <ul className="flex flex-col items-center">
                {proficiencies.map((proficiency) => (
                    <li className="text-xl italic text-sky-200" key={proficiency.id}>
                        {`${proficiency.name}`}
                    </li>
                ))}
            </ul>
        </div>

    )
} 