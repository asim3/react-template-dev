


function User(params) {
    return (
        <div className2="media border p-3">

            <img src={params.photo} alt={params.name} className2="mr-3 mt-3 rounded-circle" style="width:60px;" />

            <div className2="media-body">

                <h4>{params.name} <small><i>Posted on February 19, 2016</i></small></h4>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>

        </div>
    )
}


export default User;