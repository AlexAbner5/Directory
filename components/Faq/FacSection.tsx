'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'What is an AI image generator?',
    answer: 'An AI image generator is a tool powered by artificial intelligence that can create or modify images based on text prompts, uploaded visuals, or other forms of input. These tools use advanced models, like GANs (Generative Adversarial Networks) or diffusion models, to generate high-quality, realistic, or artistic images, often mimicking the style of real-world photographs, paintings, or other art forms.'
  },
  {
    id: 'faq-2',
    question: 'What is the AI image generator directory?',
    answer: 'The AI Image Generator Directory is a curated platform where you can explore, compare, and discover the best tools for creating, editing, and enhancing images using artificial intelligence. From tools specializing in generating visuals from text to those focused on professional photo editing, this directory is designed to help businesses, creators, and individuals find the right AI solutions tailored to their needs.'
  },
  {
    id: 'faq-3',
    question: 'How can AI image generators benefit my business or project?',
    answer: 'AI image generators can revolutionize how your business or project approaches visual content creation. Here are some key benefits: Cost-effective solutions reduce the need for expensive photo shoots or hiring professional designers. Time-saving features generate high-quality visuals in minutes instead of hours or days. Personalization allows for custom visuals that align perfectly with your brand or project needs. Scalability makes it easy to produce large volumes of images for marketing campaigns, social media, or product listings with minimal effort. Innovation helps you stand out with unique, AI-generated art and visuals that push creative boundaries.'
  },
  {
    id: 'faq-4',
    question: 'What are the most common uses of AI image generators?',
    answer: 'AI image generators are versatile and widely used across industries. Some of the most common applications include marketing and advertising to create eye-catching graphics for campaigns, banners, and ads. Content creation benefits by generating visuals for blogs, social media posts, and videos. E-commerce businesses use them to design product mockups, lifestyle images, or variations of product photos. Artists and designers can produce artistic visuals for projects, album covers, or personal portfolios. Gaming and animation industries leverage them to generate characters, backgrounds, and assets for games or animations. Education and training materials benefit from enhanced visuals for presentations, training materials, or instructional content.'
  }
];

export function FaqSection() {
  return (
    <section className="bg-[#1c1c1c] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem 
              key={id} 
              value={id}
              className="border-2 border-[#e5e7eb] rounded-2xl px-6 bg-[#333333] transition-colors hover:border-[#ef2c00]"
            >
              <AccordionTrigger className="text-white text-xl hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-lg">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
