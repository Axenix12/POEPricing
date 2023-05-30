import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>POE Pricing</title>
				<meta name="description" content="POE Pricing charts" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/Chaos1.png" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.title}>
					<div className={styles.description}>
						<p>POE Pricing</p>
					</div>
				</div>

				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/POE_Logo.png"
						alt="POE Logo"
						width={540}
						height={240}
						priority
					/>
				</div>

				<div className={styles.grid}>
					<a href="/currency" className={styles.card} rel="noopener noreferrer">
						<h2>
							Currency{" "}
							<Image
								src="/Chaos1.png"
								alt="Chaos Orb"
								width={25}
								height={25}
								className={styles.chaos}
							/>
							<span>-&gt;</span>
						</h2>
						<p>Currency Tab</p>
					</a>

					<a
						href="/fragments"
						className={styles.card}
						rel="noopener noreferrer">
						<h2>
							Fragments <span>-&gt;</span>
						</h2>
						<p>Fragments Tab</p>
					</a>

					<a href="/blight" className={styles.card} rel="noopener noreferrer">
						<h2>
							Blight <span>-&gt;</span>
						</h2>
						<p>Blight Tab</p>
					</a>

					<a href="/essences" className={styles.card} rel="noopener noreferrer">
						<h2>
							Essences <span>-&gt;</span>
						</h2>
						<p>Essences Tab</p>
					</a>

					<a href="/beasts" className={styles.card} rel="noopener noreferrer">
						<h2>
							Beasts <span>-&gt;</span>
						</h2>
						<p>Valuable Beasts</p>
					</a>

					<a href="/uniques" className={styles.card} rel="noopener noreferrer">
						<h2>
							Uniques <span>-&gt;</span>
						</h2>
						<p>Valuable Uniques</p>
					</a>

					<a href="/alva" className={styles.card} rel="noopener noreferrer">
						<h2>
							Alva <span>-&gt;</span>
						</h2>
						<p>Alva Temple</p>
					</a>

					<a
						href="/expedition"
						className={styles.card}
						rel="noopener noreferrer">
						<h2>
							Expedition <span>-&gt;</span>
						</h2>
						<p>Expedition Logbooks and Currency</p>
					</a>
				</div>
			</main>
		</>
	);
}
