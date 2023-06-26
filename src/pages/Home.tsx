export default function Home() {
	return (
		<main>
			<section id='hero' className='relative flex justify-end gradient-bg'>
				<div className='absolute right-8 w-[75ch]'>
					<h1 className='text-left text-5xl leading-tight tracking-tight font-normal'>
						Giáo dục không phải là sự chuẩn bị <br /> cho cuộc sống — Giáo dục chính
						là{' '}
					</h1>
					{/* <h1 className='self-start ml-28 px-4 text-5xl leading-tight tracking-tight font-bold text-white bg-red-500'>
						Cuộc Sống
					</h1> */}
					<h1 className='w-fit text-left pr-6 pb-1 text-5xl leading-tight tracking-tight font-semibold border-b-4 border-teal-300'>
						cuộc sống
					</h1>
				</div>
				<div className='prose max-w-none absolute left-8 bottom-12'>
					<h2 className='font-normal'>
						Dự án Trường học hạnh phúc <br /> định hướng trở thành tổ chức giáo dục{' '}
						<br />
						phi lợi nhuận hỗ trợ các trường xây dựng
						<br /> ngôi trường hạnh phúc
					</h2>
				</div>
				<img
					src='/images/sharon-pittaway-iMdsjoiftZo-unsplash.png'
					alt='colorful-flower'
					className='mt-16 mr-16 w-[500px] h-[500px] z-10'
				/>

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
