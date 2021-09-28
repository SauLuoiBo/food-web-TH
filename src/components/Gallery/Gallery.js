import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/GlobalComponents";
import Product from "./elements/Product";
import { dataFeedback, dataGallery } from "./data/dataGallery";
import Feedback from "./elements/Feedback";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
import SwiperCore from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

// install Swiper modules

// Import Swiper styles
// import "swiper/css";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import SwiperCore, { Navigation } from "swiper";

const Gallery = () => {
	SwiperCore.use([Pagination]);
	SwiperCore.use([Navigation]);
	return (
		<Wrapper id="gallery">
			<Container>
				<GalleryWrapper>
					<h2>
						Our Food <span>Gallery</span>
					</h2>
					<ProductWrapper>
						{dataGallery.map((data, index) => (
							<Product key={index} img={data.img} text={data.text} />
						))}
					</ProductWrapper>
					{/* {dataFeedback.map((data, index) => (
						<Feedback
							key={index}
							name={data.name}
							img={data.img}
							client={data.client}
							text={data.text}
						/>
					))}
					<> */}
					<SwiperWrapper>
						<Aaa
							spaceBetween={30}
							// slidesPerView={}
							// modules={[Navigation, Pagination, Scrollbar, A11y]}
							navigation={true}
							// pagination={{ clickable: true }}
							// navigation={{ clickable: true }}
							// scrollbar={{ draggable: true }}

							// className="mySwiper"
						>
							{dataFeedback.map((data, index) => (
								<SwiperSlide key={index}>
									<Feedback
										name={data.name}
										img={data.img}
										client={data.client}
										text={data.text}
									/>
								</SwiperSlide>
							))}
						</Aaa>
					</SwiperWrapper>
				</GalleryWrapper>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding-top: 10rem;
	display: block;
	width: 100%;
`;

const GalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	/* flex-wrap: wrap; */
	/* position: relative; */
	z-index: 0;
	overflow: hidden;
	/* flex-direction: row; */

	span {
		color: var(--color-yellow);
		font-size: 5rem;
	}
`;

const ProductWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 23rem;
`;

const Aaa = styled(Swiper)`
	width: 90%;
	overflow: visible;
`;

const SwiperWrapper = styled.div`
	margin: 0 3rem;
	width: 100%;

`;

export default Gallery;
