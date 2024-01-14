// Components
import { Header } from "@/components/header";
import { Title } from "@/components/title";
import { Button } from "@/components/button";
import { Dots } from "@/components/dots";
import { Carousel } from "@/components/carousel";
import { Form } from "@/components/form";
import { PostSm } from "@/components/content/postSm";
import { PostMd } from "@/components/content/postMd";
import { PostLg } from "@/components/content/postLg";
import { PostXl } from "@/components/content/postXl";

// Images
import banner from "@/images/banner.png";
import circle from "@/images/circle.png";
import sketch1 from "@/images/sketch1.png";
import sketch2 from "@/images/sketch2.png";
import object1 from "@/images/object1.png";
import object2 from "@/images/object2.png";
import object3 from "@/images/object3.png";
import object4 from "@/images/object4.png";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex flex-col gap-12 font-myriadSemi overflow-hidden">
        {/* Banner */}
        <section className="relative h-[10rem] lg:h-[25rem] w-full">
          <img
            src={banner}
            alt="banner image"
            className="h-full w-full object-cover"
          />
          <img
            src={circle}
            alt="circle image"
            className="absolute aspect-square w-[20%] right-0 -bottom-[30%] lg:-bottom-[50%]"
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
        <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 py-20 px-12">
          {/* Image | Post */}
          <div className="bg-background_light relative w-full lg:w-2/4 lg:h-[30vh] p-4">
            <img
              src={sketch1}
              alt="Woman study image"
              className="object-contain"
            />
            <PostMd />
          </div>

          {/* Articles */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <h2 className="text-xlt_pink text-3xl py-2">Outras postagens</h2>
            <hr className="pb-2" />
            <PostSm />
            <Button variant="secondary" size="lg">
              Ver mais
            </Button>
          </div>
          <img
            src={object1}
            alt="Object image"
            className="absolute bottom-0 -right-7"
          />
          <img
            src={object2}
            alt="Object image"
            className="absolute -bottom-[44%] -left-[50%] 2xl:-left-[30%] hidden xl:block z-[50]"
          />
        </section>

        {/* News */}
        <section className="bg-[#8ECB53] flex flex-col lg:flex-row justify-center gap-12 items-center py-20 px-12 relative">
          <img
            src={object3}
            alt="Object image"
            className="absolute -bottom-32 -left-20 lg:-left-7"
          />

          {/* Bloco 1 */}
          <div className="space-y-12 w-full lg:w-1/3">
            <Title.Root>
              <Title.Text text="Principais notícias" variant="white" />
              <Title.Bar variant="white" />
            </Title.Root>
            <PostLg />
            <Button variant="white" size="lg">
              Ver mais
            </Button>
          </div>

          {/* Bloco 2 */}
          <div className="flex flex-col gap-6 bg-background rounded-tl-[6rem] lg:h-[35rem] w-full lg:w-[50rem] p-4 overflow-hidden">
            <img src={sketch2} alt="women studying image" />
            <Dots />
            <PostXl />
          </div>
        </section>

        {/* Cases  */}
        <section className="space-y-4 py-12">
          <Title.Root>
            <Title.Text text="Cases" />
            <Title.Bar variant="blue" size="sm" />
          </Title.Root>

          {/* Carousel */}
          <div className="py-4">
            <Carousel />
          </div>
          <div className="flex itemscenter justify-center">
            <Button variant="secondary" size="lg">
              Ver mais
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col items-center justify-center gap-16 font-myriadRegular bg-[#F0F1F5] rounded-tl-[10rem] py-12 relative">
          <img
            src={object1}
            alt="Object image"
            className="absolute -left-72 lg:-left-4 -top-4 lg:top-7"
          />
          <Title.Root>
            <Title.Text text="Receba" coloredText=" nossas novidades" />
            <Title.Bar variant="blue" />
          </Title.Root>

          <p className="text-grey_light relative w-full text-center">
            Quer receber conteúdos exclusivos no seu e-mail?
            <img
              src={object4}
              alt="SemiCircle image"
              className="absolute -right-80 lg:right-4"
            />
          </p>
          <Form />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#022776] flex flex-col lg:flex-row items-center justify-between py-4 px-12 text-[#4B8AA4] font-myriadSemi">
        <p className="text-center">
          copyright 2022 - Todos os direitos reservados | Política de
          privacidade | Condições gerais
        </p>
        <p>desenvolvido por: Olivas Digital</p>
      </footer>
    </>
  );
}

export default App;
