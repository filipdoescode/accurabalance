import { siteConfig } from '@/config/site';
import AccuraBalance from '@/public/accurabalance.svg';
import Image from 'next/image';
import { FooterNav } from './footer-nav';

export function SiteFooter() {
  return (
    <footer>
      <div className='container'>
        <div className='flex justify-around gap-10'>
          <div className='grow basis-full space-y-2'>
            <div className='flex items-center gap-2 font-bold italic'>
              <Image
                src={AccuraBalance}
                alt={siteConfig.name}
                className='size-8'
              />

              <span>{siteConfig.name}</span>
            </div>

            <p>
              We provide reliable bookkeeping and accounting services designed
              to help small businesses stay organized, compliant, and
              financially confident. Let us handle the numbers so you can focus
              on growing your business.
            </p>
          </div>

          <div className='grow basis-full flex justify-center'>
            <FooterNav />
          </div>

          <div className='flex'>
            <aside className='grow basis-full'>
              <p>Address</p>

              <p>
                Maksim Gorki 32 <br /> Prilep, 7500 <br /> North Macedonia
              </p>
            </aside>

            <aside>
              <p>Opening hours</p>

              <p>Monday - Friday: 09:00 AM - 06:00 PM</p>
            </aside>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <div className='container py-2'>
          <p className='text-gray-400 text-sm'>
            © 2025 AccuraBalance | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
