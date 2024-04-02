import './Dashboard.css';
import MainDash from './MainDash/MainDash';

const Dashboard = () => {
    return (
        <div className="Dashboard">
        <div className='DashboardGlass'>
          <MainDash />
        </div>
    </div>
    )
}

export default Dashboard;