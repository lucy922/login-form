import React, { useState } from "react";
import { User } from "../user";
import { Button } from "./Button";
import InputField from "./InputField";
import Label from "./Label";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser([{ email, password }]);
    setEmail("");
    setPassword("");
    console.log(user);
  };

  return (
    <form
    data-testid="login-form"
      onSubmit={(e) => handleSubmit(e)}
      className="block max-w-lg mx-auto bg-white drop-shadow-md rounded mt-12 p-4"
    >
      <h1 className="text-3xl pb-3">Login Form</h1>
      <div className="pt-5">
        <div className="pt-3">
          <Label className="block text-start pb-1">Email</Label>
          <InputField
          data-testid="email-input"
            type="text"
            placeholder="Enter email.."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className=" pt-7">
          <Label className="block text-start pb-1">Password</Label>
          <InputField
          data-testid="password-input"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <Button type="submit" name="button" variant="primary" size="sm" className="mt-6">Login</Button>
    </form>
  );
};

export default Form;
