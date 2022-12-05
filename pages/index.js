import Head from 'next/head'
import Image from 'next/image'
import { Fade } from 'react-reveal'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Layout from '../layouts/MainLayout'
export default function Home() {

  return (
    <Layout>
      <Head>

      </Head>
      <section>
        <div className=' h-96 flex justify-center'>
          <Fade top>
            <p className=' text-6xl inline-block align-middle'>
              SITTHIPHON SKULPHAN
            </p>
            <p></p>
          </Fade>
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Desk and Office
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
                </div>

                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <div className='h-full w-full object-cover object-center relative'>
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                        alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                        fill
                        objectFit="cover" // change to suit your needs
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
                </div>

                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  // const informationPath = path.join(process.cwd(), 'json/information.json');
  // const informationJSON = await fsPromises.readFile(informationPath)
  // const information = JSON.parse(informationJSON)

  const res = await fetch(`${process.env.HOST}/api/information`)
  const information = await res.json()

  return { props: { information } }
}