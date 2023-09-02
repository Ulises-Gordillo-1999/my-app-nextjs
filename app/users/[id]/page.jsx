import Image from "next/image"


async function getUser(id) {
  //console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  //console.log(data.data)
  return data.data

}



async function UsersPage({ params }) {

  //console.log(params)

  const user = await getUser(params.id)

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3" >
        <div className="card">
          <div className="card-header text-center">
            <Image src={user.avatar} width={100} height={100} alt={user.email} />
          </div>
          <div className="card-body text-center">
            <h1>{user.first_name} {user.last_name} </h1>
            <p>{user.email} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage
