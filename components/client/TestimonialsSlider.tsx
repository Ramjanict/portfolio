"use client";

import Slider from "react-slick";
import TestimonialCard from "./testimonial/TestimonialCard";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Vikash Vis",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    quote:
      "Hiring Md Ramjan Ali for web development was the best decision we made! Their clean code and intuitive designs significantly improved user experience. Definitely our go-to developer from now on!",
  },
  {
    id: 2,
    name: "David Patel",
    role: "CEO, Tech Innovations",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote:
      "Md Ramjan Ali is a fantastic developer! They revamped our outdated website with modern technologies, ensuring a seamless and optimized experience for users.",
  },
  {
    id: 3,
    name: "Sophia Reynolds",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "Working with Md Ramjan Ali was an absolute pleasure! Their attention to detail and proactive communication made our project run smoothly from start to finish. Highly recommend!",
  },
  {
    id: 4,
    name: "Neha R.",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote:
      "Collaborating with Md Ramjan Ali was seamless and productive. Their ability to handle tight deadlines without compromising quality was truly impressive.",
  },
  {
    id: 5,
    name: "Rohit Sharma",
    role: "Startup Founder",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote:
      "Md Ramjan Ali delivered exceptional results for our startup mobile app. The app is user-friendly, robust, and exactly what we needed to scale our business. Highly impressed!",
  },
];

export default function TestimonialsSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full py-4 pb-8">
      <Slider {...settings}>
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="h-full py-2">
            <TestimonialCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
