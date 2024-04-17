import './Dashboard.css';
import MainDash from './MainDash/MainDash';

const Dashboard = (props) => {
    return (
        <div className="Dashboard">
        <div className='DashboardGlass'>
          <MainDash userId={props.userId} />
        </div>
    </div>
    )
}

export default Dashboard;