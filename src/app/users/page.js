import axios from 'axios';

function page() {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + '/users'
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return <div>This is the users index</div>;
}

export default page;
