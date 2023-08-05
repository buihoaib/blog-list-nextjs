import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog List | Home</title>
        <meta name='keywords' content='blogs' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.title} >
          orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium sem interdum ornare volutpat. Nam sagittis leo lacus, vel pretium erat pharetra in. Curabitur et justo dapibus, pellentesque ipsum non, eleifend mauris. Aliquam in molestie massa, eu consectetur neque. Duis tempus commodo sem, ac bibendum ante finibus non. Maecenas quis leo rutrum, mattis felis sit amet, cursus magna. Donec non cursus tellus. Vivamus dictum sollicitudin dictum. Curabitur malesuada nunc in nisl gravida, non rutrum dui viverra. Ut vel interdum turpis, ut tempor lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </>
  )
}
