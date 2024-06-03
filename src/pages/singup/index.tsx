import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: { username: "", email : "", password: "" },
  });

  const handle = () => {
    const { username, email, password } = getValues();
    console.log(name);
  };

  const userNameRules = {
    required: "入力してください",
    minLength: { value: 4, message: `6文字以上で入力してください。` },
    maxLength: { value: 10, message: `32文字以内で入力してください。` },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "半角英数字で入力してください。",
    },
  };

  const emailRules = {
    required: "メールアドレスを入力してください",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "有効なメールアドレスを入力してください。",
    },
  };

  const passwordRules = {
    required: "パスワードを入力してください",
    minLength: { value: 6, message: "8文字以上で入力してください。" },
    maxLength: { value: 10, message: "32文字以内で入力してください。" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: "大文字、小文字、数字、特殊文字を含めてください。",
    },
  };

  return (
    <div>
      <h1>SignUp</h1>
      <input
        type="username"
        {...register("username", userNameRules)}
        placeholder="Input your Name"
      />
      <p>{formState.errors.username?.message}</p>
      <input
        type="email"
        {...register("email", emailRules)}
        placeholder="Input your Email"
      />
      <p>{formState.errors.email?.message}</p>
      <input
        type="password"
        {...register("password", passwordRules)}
        placeholder="Input Password"
      />
      <p>{formState.errors.password?.message}</p>
      <button onClick={handleSubmit(handle)}>SigunUp</button>
    </div>
  );
}
