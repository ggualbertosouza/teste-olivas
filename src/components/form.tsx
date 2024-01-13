import z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Insira um nome válido."),
  email: z.string().email("Insira um e-mail válido."),
  check: z
    .boolean()
    .refine((data) => data == true, { message: "Concorde com os termos." }),
});

interface formProps extends z.infer<typeof schema> {}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="flex items-center flex-col gap-4"
    >
      <div className="flex flex-col lg:flex-row gap-1 items-center">
        <Input
          {...register("name")}
          errors={errors.name?.message!}
          type="text"
          placeholder="Digite o seu nome"
        />
        <Input
          {...register("email")}
          errors={errors.email?.message!}
          type="email"
          placeholder="Digite o seu e-mail"
        />
      </div>

      <div className="flex  flex-col items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row gap-1 items-center text-grey_light">
          <input {...register("check")} type="checkbox" />
          <p className="text-center">
            Ao informar meus dados, eu concordo com a Política de Privacidade e
            concordo em receber comunicações.
          </p>
        </div>
        <p className="text-sm text-red-600 italic">{errors.check?.message}</p>
      </div>

      <Button type="submit" variant="pink" size="xl">
        <AiOutlinePlusCircle />
        Cadastrar
      </Button>
    </form>
  );
};
