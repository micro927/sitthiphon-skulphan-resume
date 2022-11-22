// import fsPromises from 'fs/promises';
// import path from 'path'
import CardPersonal from '../components/CardPersonal';
import Layout from '../layouts/MainLayout';

// import { useState, useEffect } from 'react';

export default function Try({ information }) {
  const { personalInformation, profile, education, work, skill } = information
  const fullName = `${personalInformation.name} ${personalInformation.surname}`
  return (
    <>
      <Layout>
        <CardPersonal fullname={fullName} />
        <h1 className='text-3xl font-bold underline'>HI</h1>
        <h1 className=''>{fullName}</h1>
        {education.map(a => <p key={a.level}>{a.levelTitle}</p>)}
      </Layout>
    </>
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