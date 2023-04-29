import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
const customStyles = {
	content: {
		top: '0',
		left: '0',
		width: '100vw',
		height: '100vh',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		zIndex: '11',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};
Modal.setAppElement('#___gatsby');

function ModalSinglePicture({ modalIsOpen, closeModal, image, imgAlt }) {
	const modalBox = useRef(null);
	useEffect(() => {
		let element;
		const listener = (e) => {
			if (e.target.nodeName !== 'IMG') closeModal();
		};
		if (modalIsOpen) {
			element = modalBox.current.node;
			element.addEventListener('click', listener);
		}
		return () => {
			if (element) {
				element.removeEventListener('click', listener);
			}
		};
	}, [modalIsOpen, closeModal]);
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel='Example Modal'
			ref={modalBox}>
			<div className='relative z-50 h-3/4'>
				<GatsbyImage
					image={getImage(image)}
					alt={imgAlt}
					className='modal-box flex flex-row justify-center'
				/>
				<button
					onClick={closeModal}
					className='absolute -top-8 right-0 tracking-widest text-white transition-transform hover:text-lg'>
					CLOSE
				</button>
			</div>
		</Modal>
	);
}

export default ModalSinglePicture;
