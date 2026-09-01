const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm rounded-2xl bg-zinc-900 border border-gray-200 p-6 shadow-sm">
      {/* Avatar */}
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-xl font-semibold text-indigo-600">
          {user.name.firstname[0].toUpperCase()}
          {user.name.lastname[0].toUpperCase()}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-300">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="space-y-3 border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs font-medium text-gray-300">Email</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-300">Phone</p>
          <p className="text-sm text-gray-400">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-400">Address</p>
          <p className="text-sm capitalize text-gray-400">
            {user.address.number}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;