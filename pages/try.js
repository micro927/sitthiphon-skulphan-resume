import fsPromises from 'fs/promises';
import path from 'path'
import { useState, useEffect } from 'react';

export default function Try({ information }) {
  const myData = information.education
  return (
    <>
      <h1 className='text-3xl font-bold underline'>HI</h1>
      {myData.map(a => <p key={a.level}>{a.levelTitleTH}</p>)}
    </>
  )
}

export async function getStaticProps() {
  const informationPath = path.join(process.cwd(), 'json/information.json');
  const informationJSON = await fsPromises.readFile(informationPath)
  const information = JSON.parse(informationJSON)
  return { props: { information } }
}