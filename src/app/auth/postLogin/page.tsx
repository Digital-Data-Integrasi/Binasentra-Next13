"use client"
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function Page() {
  const { data: session }:any = useSession();

  if (session) {
    let destination = '/';

    switch (session.user.role) {
      case 'Admin':
        destination = '/framework/dashboard'; 
        break;
      case 'User':
        destination = '/nsbh/asuransi-gempabumi'; 
        break;
    }

    redirect(destination)

    // You can also return null if you don't want to render anything
    return null;
  }

  // Render something when there is no session
  return <div></div>;
}
