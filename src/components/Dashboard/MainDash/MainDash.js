import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './MainDash.css';

const MainDash = () => {
    return (
        <div className='MainDash'>
            <h1 style={{textAlign: 'center', paddingBottom: '25px'}}>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default MainDash;