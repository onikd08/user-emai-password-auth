const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
  };
  return (
    <div className="max-w-screen-lg mx-auto text-center">
      <h1 className="text-3xl my-4">Please Sign up</h1>
      <form onSubmit={(e) => handleSignUp(e)}>
        <input
          className="px-4 py-2 mb-4 border rounded w-1/3 text-lg"
          type="email"
          placeholder="Your Email"
          name="email"
        />
        <br />
        <input
          className="px-4 py-2 mb-4 border rounded w-1/3 text-lg"
          type="password"
          placeholder="Password"
          name="password"
        />
        <br />
        <input
          className="btn btn-success w-1/3"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;
