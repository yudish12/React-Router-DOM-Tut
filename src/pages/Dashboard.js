const Dashboard = ({ user }) => {
  return (
    <>
      {user ? (
        <section className="section">
          <h4>Hello {user.name}</h4>
        </section>
      ) : (
        <section className="section">
          <h4>Please Login</h4>
        </section>
      )}
    </>
  );
};
export default Dashboard;
