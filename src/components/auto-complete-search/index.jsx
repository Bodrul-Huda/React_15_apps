import { useEffect, useState } from "react";
import DropDownList from "./dropDown-list";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterUser, setFilterUser] = useState([]);

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUser(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users.length && data.users) {
        setLoading(false);
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleSelect(e) {
    setSearchParams(e.target.innerText);
    setFilterUser([]);
    setShowDropdown(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(users, filterUser);

  if (loading) {
    return <div className="text-center py-20 font-semibold">Loading ...</div>;
  }

  return (
    <div>
      <div className="container mx-auto py-10">
        <input
          name="search"
          placeholder="Search"
          value={searchParams}
          onChange={handleSearch}
          className="p-1 border border-gray-400 rounded-md hover:border-black w-40"
        />
        <div>
          {showDropdown && (
            <DropDownList handleSelect={handleSelect} list={filterUser} />
          )}
        </div>
      </div>
    </div>
  );
}
