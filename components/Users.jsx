"use client";
import { useRouter } from 'next/navigation'
import Image from 'next/image';

function Users({users}) {

  const router = useRouter()

  return (
    <ul className='list-group' >
        {
          users.map((user) => (
            <li key={user.id}
            className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
            onClick={() =>{
                router.push(`/users/${user.id}`)
            }}>
              <div>
                <h5>{user.id} - {user.first_name} {user.last_name} </h5>
                <p>{user.email} </p>
              </div>
            <Image src={user.avatar} width={100} height={100} alt="hola" className='img-thumbnail' />
            </li>
          ))
        }
      </ul>
  )
}

export default Users
