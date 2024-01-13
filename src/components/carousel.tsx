import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@/components/button";
import { usePost } from "@/hooks/usePost";
import { Loading } from "@/components/loading";

export const Carousel = () => {
  const { data, isLoading } = usePost(403);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          900: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide
              className="py-4 flex flex-col justify-between cursor-pointer lg:w-[25rem] lg:h-[25rem]"
              key={item.id}
            >
              <img
                src="https://www.olivas.digital/wp-content/uploads/2023/03/OD_Vantagens-de-uma-agencia-de-desenvolvimento-e-marketing-integrado-WEB-blogpost-banner-1224x512-1.png?_t=1682598414"
                alt="post image"
                className="object-contain overflow-hidden lg:w-[25rem]"
              />
              <h3 className="text-primary font-myriadSemi text-xl lg:w-[25rem]">
                {item.title.rendered}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                className="h-24 leading-6 overflow-hidden font-myriadRegular text-ellipsis text-sm line-clamp-5 text-grey_light lg:w-[25rem]"
              />
              <Button variant="pink" size="default">
                <a href={item.og_url}>Saiba mais</a>
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
