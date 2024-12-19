import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";





export default async function Home() {

  const { getUser } = getKindeServerSession()
  const session = await getUser()
  return (
    <div className="p-10">
      {session ? (
        <LogoutLink>
          <Button>Logout</Button>
        </LogoutLink>
      ) : (
        <div>
          <LoginLink>
            <Button>Register</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Login</Button>
          </RegisterLink>
        </div>
      )}
    </div>
  );
}
