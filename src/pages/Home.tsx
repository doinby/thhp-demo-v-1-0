export default function Home() {
	return (
		<main>
			<section id='hero' className='flex justify-center'>
				<article className='relative flex flex-col justify-centter min-w-fit text-gray-500'>
					<h2 className='w-fit text-5xl leading-tight tracking-tight'>
						Giáo dục không phải là sự chuẩn bị <br /> cho cuộc sống — Giáo dục chính
						là <br />{' '}
						<span className='font-semibold text-emerald-400 underline underline-offset-[12px]'>
							cuộc sống
						</span>
					</h2>
					<img
						src='/images/sharon-pittaway-iMdsjoiftZo-unsplash.png'
						alt='colorful-flower'
						className='absolute top-[80px] self-center w-[500px] h-[500px]'
					/>
					<p className='w-fit mt-[280px] self-end'>
						Với sứ mệnh hỗ trợ <br />
						giáo dục mầm non
						<br /> xây dựng và nuôi
						<br /> dưỡng ngôi trường
						<br /> hạnh phúc
					</p>
				</article>

				{/* <p>
					Considerato che il riconoscimento della dignità inerente a tutti i membri
					della famiglia umana e dei loro diritti, uguali ed inalienabili,
					costituisce il fondamento della libertà, della giustizia e della pace nel
					mondo; Considerato che il disconoscimento e il disprezzo dei diritti umani
					hanno portato ad atti di barbarie che offendono la coscienza dell'umanità,
					e che l'avvento di un mondo in cui gli esseri umani godano della libertà di
					parola e di credo e della libertà dal timore e dal bisogno è stato
					proclamato come la più alta aspirazione dell'uomo; Considerato che è
					indispensabile promuovere lo sviluppo di rapporti amichevoli tra le
					Nazioni;{' '}
				</p> */}
			</section>
		</main>
	);
}
