import { useEffect, useState } from "react";
import UserCard from "./user-cart";

export default function GitHubProfile() {
  const [userName, setUserName] = useState("Bodrul-Huda");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSearch() {
    // setUserName(...userName);
    fetchGithubData();
  }

  async function fetchGithubData() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setUserName("");
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubData();
  }, []);

  if (loading) {
    return <div className="py-16 text-center font-semibold">Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center space-x-2">
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="profile"
            type="text"
            placeholder="Search GitHub profile"
            className="border border-gray-500 px-1 py-1 rounded-md"
          />
          <button
            className="py-2 px-4 rounded-md bg-gray-400 hover:bg-gray-500"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>{userData !== null ? <UserCard data={userData} /> : null}</div>
      </div>
    </div>
  );
}
