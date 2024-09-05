export default function UserCard({ data }) {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center">
        <img className="rounded-full w-56 h-56" src={data.avatar_url} />
      </div>
      <div className="py-2">
        <a href={`https://github.com/${data.login}`}>
          Name: {data.name || data.login}
        </a>
        <p className="py-2">Followers: {data.followers}</p>
      </div>
    </div>
  );
}
