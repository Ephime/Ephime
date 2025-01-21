const Sidebar = ({type, display}) => {
    return (
        <div id='sidebar' className='box-content'>
            {display.sidebar && display.sidebar[type]?.map((section, i) => {
                return (
                    <div key={i}>
                        {Object.entries(section).map(([sectionTitle, items]) => {
                            return (
                                <div key={sectionTitle}>
                                    <span>{sectionTitle}</span>
                                    {/* {items.map((item, itemIndex) => (
                                        <a key={itemIndex}>{item}</a>
                                    ))} */}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Sidebar;