import User from '../../components/User'


const users_list = [
    { name: "user 1", photo: "./user_photo" },
    { name: "user 2", photo: "./user_photo" },
    { name: "user 3", photo: "./user_photo" },
    { name: "user 4", photo: "./user_photo" },
    { name: "user 5", photo: "./user_photo" },
    { name: "user 6", photo: "./user_photo" },
    { name: "user 7", photo: "./user_photo" },
    { name: "user 8", photo: "./user_photo" },
]


function Users() {
    return users_list.map(data => <User name={data.name} photo={data.photo} />)
}


export default Users;
