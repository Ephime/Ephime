const Experience = ({ content, type }) => {
    const experienceContent = content.experience && content.experience[type];

    if (!experienceContent) {
        return null;
    }

    return (
        <div id='content' className='box-content'>
            {Array.isArray(experienceContent) ? (
                experienceContent.map((section, i) => (
                    <div key={i}>
                        {Object.entries(section).map(([k, v], index) => (
                            <div key={index}>
                                <p>{k}</p>
                                {typeof v === 'string' ? (
                                    <p>{v}</p>
                                ) : (
                                    <ul>
                                        {Object.entries(v).map(([key, value]) => (
                                            <div key={key}>
                                                {typeof value === 'object' && !Array.isArray(value) ? (
                                                    Object.entries(value).map(([ContentTitleKeys, ContentTitleObject]) => (
                                                        <div key={ContentTitleKeys}>
                                                            <li>{ContentTitleKeys}</li>
                                                            <br />
                                                            <ul>
                                                                {typeof ContentTitleObject === 'object' && !Array.isArray(ContentTitleObject) ? (
                                                                    Object.entries(ContentTitleObject).map(([StringKey, StrinValue]) => (
                                                                        <div key={StringKey}>
                                                                            <li className="StringKey">{StringKey}</li>
                                                                            <li>{StrinValue}</li>
                                                                            <br />
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <li>{ContentTitleObject}</li>
                                                                )}
                                                            </ul>
                                                            <br /><br />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <li key={value}>{value}</li>
                                                )}
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>{experienceContent}</p>
            )}
        </div>
    );
}

export default Experience;
