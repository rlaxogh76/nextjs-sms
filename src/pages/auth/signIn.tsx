import { signIn } from "next-auth/react";

export default function login() {
  return (
    <form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        const result = await signIn("credentials", {
          email,
          password,
          callbackUrl: "/auth/loginSuccess",
        });
        console.log(result);
      }}
    >
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <h1>You need to input test@example.com email and 1234 password.</h1>
    </form>
  );
}
