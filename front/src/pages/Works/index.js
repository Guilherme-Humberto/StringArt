import Link from 'next/link'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import useFetcher from '../../hooks/useFetcher'
import styles from './index.module.css'

export default function Teste() {
    const { data } = useFetcher("jobs")

    if(!data) return <p>Carregando...</p>

    console.log(data)
    return (
        <div className={styles.containerWorks}>
            <p className={styles.titleWorks}>Trabalhos</p>
            <p className={styles.descWorks}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ullam.</p>
            <Link href="/">
                <p className={styles.titleBackInitial}>
                    <BsArrowLeft size={30}/>
                    Voltar para página inicial
                </p>
            </Link>

            <div className={styles.cardBox}>
                {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageBox}>
                            <Image className={styles.img} src={item.image_url} layout="fill" alt="Imagem Trabalho"/>
                        </div>

                        <div className={styles.containerInformations}>
                            <div className={styles.infoOne}>
                                <p className={styles.titleCard}>{item.name}</p>
                                <p className={styles.priceCard}>R${item.price.toFixed(2)}</p>
                            </div>
                            <div className={styles.infoTwo}>
                                <p className={styles.titleInfo}>{item.name}</p>
                                <p className={styles.descInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, obcaecati!</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}