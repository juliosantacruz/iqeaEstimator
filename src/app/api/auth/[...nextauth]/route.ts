
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const users = [
  {
    username: "arturo",
    password: "iqea2024",
    name: "arturo chavez",
    email: "arturo@iqea.mx",
    company: "IQEA",
    jwtToken: "jwtTOken_de_prueba",
    isAdmin: true,
  },
  {
    username: "julio",
    password: "iqea2024",
    name: "julio santacruz",
    email: "cto@iqea.mx",
    company: "IQEA",
    jwtToken: "jwtTOken_de_prueba",
    isAdmin: true,
  },
]

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        identifier: { label: "Username", name:"identifier", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
    if (
      users.find((user) => user.username === credentials?.identifier)&&
      users.find((user) => user.password === credentials?.password)
    ) {
      const loginUser = users.find((user) => user.username === credentials?.identifier)
      return loginUser
    }

    // Autentificacion con servidor
        try {
          const res = await fetch("http://localhost:1337/api/auth/local", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          });
          const user = await res.json();

          if (res.ok && user) {
            return user;
          } else {
            console.error('Error during authentication:', user);
            return null;
          }
        } catch (error) {
          console.error('Exception during authentication:', error);
          return null;
        }
      }
    })
  ],
  callbacks:{
    jwt({token, user}:any){
      // console.log({account, token, user, profile, session})
      if(user) token.user = user
      // console.log(token)

      return token
    },
    session({session, token}:any){
      const {user:oldUser} = token.user as any
      const userData = {
        id:oldUser.id,
        username:oldUser.username,
        email:oldUser.email,
        role:oldUser.roleStore || 'customer',
        isConfirmed:oldUser.confirmed
      }
      session.user = userData

      const newSession ={
        ...session, accessToken:(token.user as any).jwt
      }
      // console.log(newSession)
      return newSession
    }
  },
  pages:{
    signIn:'/login',
    // newUser:'/signup'

  }
}

const handlerAuth = NextAuth(authOptions)

export { handlerAuth as GET, handlerAuth as POST }
