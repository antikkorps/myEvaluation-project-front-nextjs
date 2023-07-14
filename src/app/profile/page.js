const Profile = () => {
  return (
    <>
      <h1>Your Profile Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Profile;
