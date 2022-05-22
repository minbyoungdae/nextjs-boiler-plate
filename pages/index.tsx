import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const items = useInput({ name: '' });
  const { name } = items.list;
  return (
    <>
      <input value={name} name="name" onChange={items.onChange}></input>
      <div>{name}</div>
    </>
  );
};

export default Home;
