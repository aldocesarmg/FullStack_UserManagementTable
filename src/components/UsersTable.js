// import { users } from "../tmp/users";

import { useEffect, useState } from 'react';

import { Button, Popover, Label, TextInput  } from "flowbite-react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faTwitter, faGoogle, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function UserRows() {
    const [isLoading, setIsLoading] = useState('true');
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((response) => response.json())
            .then((responseUsers) => {
                setUsers(responseUsers);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return(<></>);
    }

    async function deleteUser(id) {
        try {
            const response = await fetch('http://localhost:5000/deleteUser/'+id, {
                method: 'DELETE'
            });
        
            if(!response.ok) throw new Error(`Error when trying to delete: ${response.status}`)
            else {
                const newUsers = users.filter((user) => user._id !== id);
                setUsers(newUsers);
            }
        } catch (error) {
            console.error(`Error when deleting! : ${error.message}`);
        }
    }

    const usersIterator = users.map((user) => {
        console.log(user._id);
        const socialMediaList = user.social_profile.map((socialMedia) => {
            let SMFiltered = socialMediaIcons.filter((SM) => {
                if(SM.name === socialMedia) return true;
                else return false;
            });
            
            return(
                <FontAwesomeIcon icon={SMFiltered[0].icon} className="mx-1" />
            );
        });

        let ratingArrow = (user.rating < 4.5) ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} /> ;

        return(
            <tr className="text-xl font-medium" key={user._id}>
                <td><input type="checkbox" /></td>
                <td>{user.name}</td>
                <td>{user.user_role}</td>
                <td>{user.status}</td>
                <td>{socialMediaList}</td>
                <td>{user.promote}</td>
                <td>{ratingArrow} {user.rating}</td>
                <td className="text-gray-500 font-normal">{user.last_login}</td>
                <td className="text-gray-500 font-normal"><button type='button' onClick={() => deleteUser(user._id)}><FontAwesomeIcon icon={faEllipsis} /></button></td>
            </tr >
        );
    });
    return usersIterator;
}

export function UsersTable() {
    return(
    <>
        <table className="w-full">
            <tr className="text-gray-500 text-base text-left">
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

const socialMediaIcons = [
    {
        name:"Facebook",
        icon:faFacebookF
    },
    {
        name:"Github",
        icon:faGithub
    },
    {
        name:"Twitter",
        icon:faTwitter
    },
    {
        name:"Google",
        icon:faGoogle
    },
    {
        name:"Instagram",
        icon:faInstagram
    },
    {
        name:"Tiktok",
        icon:faTiktok
    },
];