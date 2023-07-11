async function getData() {
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <div>This is the users index</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>First Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
