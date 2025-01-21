import './main.css';

const Main = ({ display }) => {

    function controls(type, menu) {
        if (type === 'nav') {
            menu === 'CV' ? display(true) : display(false);
        }
    }

    return (
        <nav id='main-nav'>
            <span onClick={() => controls('nav', 'CV')}>CV</span>
            <span onClick={() => controls('nav', 'Math')}>Math</span>
            <span onClick={() => controls('nav', 'Other')}>Other</span>
        </nav>
    );
}

export default Main;