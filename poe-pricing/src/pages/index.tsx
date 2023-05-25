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
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.description}>
					<p>POE Pricing homepage</p>
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer">
							By{" "}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
				</div>

				<div className={styles.grid}>
					<a
						href="/currency"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Currency <span>-&gt;</span>
						</h2>
						<p>Currency Tab</p>
					</a>

					<a
						href="/fragments"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Fragments <span>-&gt;</span>
						</h2>
						<p>Fragments Tab</p>
					</a>

					<a
						href="/blight"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Blight <span>-&gt;</span>
						</h2>
						<p>Blight Tab</p>
					</a>

					<a
						href="/essences"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Essences <span>-&gt;</span>
						</h2>
						<p>Essences Tab</p>
					</a>

					<a
						href="/beasts"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Beasts <span>-&gt;</span>
						</h2>
						<p>Valuable Beasts</p>
					</a>

					<a
						href="/uniques"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Uniques <span>-&gt;</span>
						</h2>
						<p>Valuable Uniques</p>
					</a>

					<a
						href="/uniques"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer">
						<h2>
							Alva <span>-&gt;</span>
						</h2>
						<p>Alva Temple</p>
					</a>

					<a
						href="/uniques"
						className={styles.card}
						target="_blank"
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
