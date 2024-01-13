// Types
import { IPost } from "@/types/post";

// Components
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { Post } from "@/components/posts";
import { Button } from "@/components/button";
import { Dots } from "@/components/dots";
import { Carousel } from "@/components/carousel";

// Images
import banner from "@/images/banner.png";
import circle from "@/images/circle.png";
import sketch1 from "@/images/sketch1.png";
import sketch2 from "@/images/sketch2.png";
import { Form } from "@/components/form";
import { PostSm } from "@/components/content/postSm";
import { PostMd } from "@/components/content/postMd";
import { PostLg } from "@/components/content/postLg";
import { PostXl } from "@/components/content/postXl";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex flex-col gap-12 font-myriadSemi my-4">
        {/* Banner */}
        <section className="relative h-[25.75] w-full">
          <img src={banner} alt="banner image" />
          <img
            src={circle}
            alt="circle image"
            className="absolute right-2 -bottom-[30%]"
          />
        </section>

        {/* Section title */}
        <Title.Root>
          <Title.Text
            variant="blue"
            text="Conteúdos"
            coloredText=" para você"
          />
          <Title.Bar variant="blue" />
        </Title.Root>

        {/* Contents */}
        <section className="container">
          <div className="flex justify-center gap-12">
            {/* Image | Post */}
            <div className="bg-background_light relative w-2/4 h-[30vh] p-4">
              <img
                src={sketch1}
                alt="Woman study image"
                className="object-contain"
              />
              <PostMd />
            </div>

            {/* Articles */}
            <div className="w-1/3 flex flex-col gap-2">
              <h2 className="text-xlt_pink text-3xl py-2">Outras postagens</h2>
              <hr className="pb-2" />
              <PostSm />
              <Button variant="secondary">Ver mais</Button>
            </div>
          </div>
        </section>

        {/* News */}
        <section className="bg-[#8ECB53] flex justify-center gap-12 items-center py-6">
          {/* Bloco 1 */}
          <div className="space-y-12 w-1/3">
            <Title.Root>
              <Title.Text text="Principais notícias" variant="white" />
              <Title.Bar variant="white" />
            </Title.Root>
            <PostLg />
            <Button variant="white">Ver mais</Button>
          </div>

          {/* Bloco 2 */}
          <div className="flex flex-col gap-6 bg-background rounded-tl-[6rem] h-[35rem] w-[50rem] p-4">
            <img src={sketch2} alt="women studying image" />
            <Dots />
            <PostXl />
          </div>
        </section>

        {/* Cases  */}
        <section className="space-y-4">
          <Title.Root>
            <Title.Text text="Cases" />
            <Title.Bar variant="blue" />
          </Title.Root>

          {/* Carousel */}
          <div className="py-4">
            <Carousel />
          </div>
          <div className="flex itemscenter justify-center">
            <Button variant="secondary">Ver mais</Button>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-center justify-center gap-4 font-myriadRegular bg-background_light border border-tl-[6rem] my-4">
          <Title.Root>
            <Title.Text text="Receba" coloredText=" nossas novidades" />
            <Title.Bar variant="blue" />
          </Title.Root>

          <p className="text-grey_light">
            Quer receber conteúdos exclusivos no seu e-mail?
          </p>

          <Form />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#022776] flex flex-col lg:flex-row items-center justify-between py-4 px-12 text-[#4B8AA4] font-myriadSemi">
        <p>
          copyright 2022 - Todos os direitos reservados | Política de
          privacidade | Condições gerais
        </p>
        <p>desenvolvido por: Olivas Digital</p>
      </footer>
    </>
  );
}

export default App;
