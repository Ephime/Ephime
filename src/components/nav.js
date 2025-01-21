import './nav.css';

const Nav = ({content, type}) => {
    return (
        <div id='nav-div' className='box-content'>
            <nav>
                {content.nav && Object.entries(content.nav).map(([k, v], i) => {
                    return <a onClick={() => type(k)} key={k}>{v}</a>
                })}
            </nav>
        </div>

    );
}

export default Nav;