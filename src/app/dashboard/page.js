import LogoutBtn from '../../../components/LogoutBtn';

function Dashboard() {
  return (
    <div>
      <h1>welcome to your Dashboard page</h1>
      <p>This is the main page when you are connected</p>
      <p>You can logout by clicking the button below.</p>
      <LogoutBtn />
    </div>
  );
}

export default Dashboard;
