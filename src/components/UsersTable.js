import users from "../tmp/users";

function UserRows() {
    const usersIterator = users.map((user) => {
        return(
            <tr>
                <td></td>
                <td>{user.name}</td>
                <td>{user.user_role}</td>
                <td>{user.status}</td>
                <td>{user.social_profile}</td>
                <td>{user.promote}</td>
                <td>{user.rating}</td>
                <td>{user.last_login}</td>
                <td></td>
            </tr >
        );
    });

    return usersIterator;
}

export function UsersTable() {
    return(
    <>
        <table className="w-full">
            <tr className="text-gray-500 text-base">
                <th><input type="checkbox" /></th>
                <th>User</th>
                <th>User Role</th>
                <th>Status</th>
                <th>Social Profile</th>
                <th>Promote</th>
                <th>Rating</th>
                <th>Last Login</th>
                <th></th>
            </tr>
            <UserRows />
        </table>
    </>
    );
}